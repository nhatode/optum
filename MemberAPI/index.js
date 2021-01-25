var dataservice = require("../Data/data");
const request = require("request");
var alldata = dataservice.getCustomerDetails()

module.exports = function (context, req) {
    console.log(req.body)
    if (req.body) {
        if (req.body.id || req.body.fname || req.body.lname || req.body.dob) {
            dataservice.setId(context.req.body.id)
            dataservice.setFname(context.req.body.fname)
            dataservice.setLname(context.req.body.lname)
            dataservice.setDob(context.req.body.dob)

        }

        const options = {
            url: 'https://login.microsoftonline.com/orxhemib2c.onmicrosoft.com/oauth2/token',
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: "grant_type=client_credentials&client_id=f293d510-47b0-45a3-ab2b-27c85f96a621&resource=50e66739-1513-4133-bdbe-19fbcd948531&client_secret=-LmHp-5t~SRy1Y8k~u13.gUsiWfbbe25po"
        }

        request(options,
            function (error, response, rsp_body) {
                if (response.statusCode == 200) {
                    context.res.headers = {
                        'Content-Type': 'application/json',
                    }
                    const token = JSON.parse(rsp_body).access_token;
                    // console.log(typeof token)
                    const options2 = {
                        url: "https://stghemi2-cloud.optum.com/rxclaimmembersearchdpaas/v1.0/rxclaim/member/search",
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            "Authorization": "Bearer " + token
                        },
                        body: JSON.stringify(alldata)
                    }
                    // console.log("options2:" + JSON.stringify(options2))
                    request(options2,
                        function (error, new_response, res_body) {
                            console.log("step 2" + res_body)
                            console.log("step 3" + JSON.stringify(new_response))
                            console.log("step 4" + error)
                            console.log("step 5" + typeof (error))
                            console.log("step 7: " + typeof (new_response))
                            console.log("step 8: " + typeof (res_body))
                            if (new_response.statusCode == 200) {
                                // console.log("Step 5" + JSON.parse(res_body).memberItems);
                                //&& JSON.parse(res_body).memberItems.[memberEligibility]["eligibilityStatus"] == 'A'
                                context.res.headers = {
                                    'Content-Type': 'application/json',

                                }
                                console.log("Step 6");
                                // context.res.send(res_body);
                                context.res = {
                                    // body : 'Member is Eligible for Plan type.'
                                    body: JSON.parse(res_body),
                                    statusCode: new_response.statusCode

                                };
                                context.done();
                            }
                            if (new_response.statusCode != 200) {
                                var resp = JSON.parse(res_body).errors
                                for (var i = 0; i < resp.length; i++) {
                                    var obj = resp[i];
                                    console.log("Step10" + obj.message);
                                }
                                context.res= {
                                    body: obj.message,
                                    statusCode: new_response.statusCode
                                };
                                context.done();   
                            }   
                        })

                };
                
                if (error) {
                    console.log(error);

                }
            
            
            
            })

}
}





