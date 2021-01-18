const GetDataService = require('../CustomerData/service');
var request = require('request');



module.exports = {
    PostMethod: function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    

    if (req.params || req.params.mid || req.params.fname || req.params.lname || req.params.dob) {
        console.log("Step 1")
        // var req_body =  GetDataService.postmId(context);
        // console.log("Step 2"+JSON.stringify(req_body))
        const options = {
            url : "https://stghemi2-cloud.optum.com/rxclaimmembersearchdpaas/v1.0/rxclaim/member/search",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'auth'
            },
            body : GetDataService.postmId(context)
        }

        console.log("options:"+JSON.stringify(options))
        request(options, 
            function (error, response, rsp_body) 
            { 
                console.log("step 2" + JSON.stringify(rsp_body))
                console.log("step 3" + JSON.stringify(response))
                console.log("step 4" + JSON.stringify(error))
                // context.res = {
                //     status: 200,
                //     body: rsp_body,
                // };

                // context.res = {
                //     body: rsp_body,
                //     contentType: 'application/json'
                //  };
                //  console.log("context.res"+JSON.statusCode(context.res))
                if(response && response.statusCode != 200 ){
                    // console.log("Step 5"+JSON.stringify(rsp_body));
                    // context.res.statusCode = 200;
                    // context.res = GetDataService.postmId(context) ;
                    // context.res.headers = {
                    //     'Content-Type' : 'application/json' 
                    // }
                    // context.res.statusCode = response.statusCode
                    context.res = {
                        body : rsp_body,
                        statusCode : response.statusCode
                        // contentType: 'application/json'
                    };
                    context.done();

                    // context.res.send(rsp_body)
                    context.done();

                }
                // context.res = response.body
                
                // context.done();
                if (error) {
                    console.log(response.body);
                    //context.res = response.body
                    // throw new Error(error);
                }
            });        
    }
    else {
        context.res = {
            status: 400,
            body: "Member ID not provided"
        };
    }
    
}
};




