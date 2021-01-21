const GetDataService = require('../CustomerData/data');
const { getToken } = require('../auth/auth.js');
var request = require('request');

module.exports = {
    PostMethod:  function (context, req) {
    // context.log('JavaScript HTTP trigger function processed a request.');
    
    console.log(req.body)
    if(req.body){
        if( req.body.id || req.body.fname || req.body.lname || req.body.dob){
            GetDataService.setId(req.body.id)
            console.log("1"+req.body.id)
            GetDataService.setFname(req.body.fname)
            console.log("2"+req.body.fname)
            GetDataService.setLname(req.body.lname)
            console.log("3"+req.body.lname)
            GetDataService.setDob(req.body.dob)
            console.log("4"+req.body.dob)
            console.log(GetDataService.getCustomerDetails())
        }
        var options1 = {
            'method': 'POST',
            'url': 'https://login.microsoftonline.com/orxhemib2c.onmicrosoft.com/oauth2/token',
            'headers': {
                'Content-Type': ['application/x-www-form-urlencoded', 'text/plain']
            },
            body: "grant_type=client_credentials&client_id=f293d510-47b0-45a3-ab2b-27c85f96a621&resource=50e66739-1513-4133-bdbe-19fbcd948531&client_secret=-LmHp-5t~SRy1Y8k~u13.gUsiWfbbe25po"
          };
          request(options1, function (error, response, body) { 
            if (response.statusCode == 200)
            {
                context.response = {
                    statusCode : reponsse.statusCode,
                    body : JSON.parse(body).access_token 
                }
            console.log("stepsujoy:"+ context.response.body);
            } 
          });

    }

    var token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiI1MGU2NjczOS0xNTEzLTQxMzMtYmRiZS0xOWZiY2Q5NDg1MzEiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84ZDEzMzBmYy00MGQxLTQ2NmItYWMzYi1jYzlkMThlYzlmZTcvIiwiaWF0IjoxNjExMjA4ODIyLCJuYmYiOjE2MTEyMDg4MjIsImV4cCI6MTYxMTIxMjcyMiwiYWlvIjoiRTJKZ1lOaXRJZkk3U09FQlc4SE4zMjl2di83U0JnQT0iLCJhcHBpZCI6ImYyOTNkNTEwLTQ3YjAtNDVhMy1hYjJiLTI3Yzg1Zjk2YTYyMSIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzhkMTMzMGZjLTQwZDEtNDY2Yi1hYzNiLWNjOWQxOGVjOWZlNy8iLCJvaWQiOiJmNzBjZmE4OC1hZmQ3LTRhZjUtYTA5Ny02NTY4Y2JlZjQ1MGQiLCJyaCI6IjAuQUFBQV9EQVRqZEZBYTBhc084eWRHT3lmNXhEVmtfS3dSNk5GcXlzbnlGLVdwaUVkQUFBLiIsInJvbGVzIjpbIklTRE1fQVBQX1JPTEUiXSwic3ViIjoiZjcwY2ZhODgtYWZkNy00YWY1LWEwOTctNjU2OGNiZWY0NTBkIiwidGlkIjoiOGQxMzMwZmMtNDBkMS00NjZiLWFjM2ItY2M5ZDE4ZWM5ZmU3IiwidXRpIjoiM2dwbU1QU05Ra2FJaTBoNGlaakRBQSIsInZlciI6IjEuMCJ9.ji-nGIqc4TsoReLf_yrqQQMO-oT3-w6zNOrq7VtdbtLFAOaMx5iDVrPRT9hd1k8nAUtTMyQKbJTwcnaRFhalrRxHqzUJUt7qBa0QbRfXApPnA8MdiZeVjeYf5cGL-hJrLKR2INCIVBg2Xyk4IiT-m7Jiiq71OIJWUGYAn9M0ZxnkrWfH2T0CKWc02DAQnk7u_0rLPdXV197cN5vW_I6dFKGOH8KVyvOJVyaDqTEVlB-3hVHKXcl15owpmiJ0O0Onz4W3LUCWuVPhO73phZFdvQZUe_EmF22AXckErpBAOfdnDjzzcn1yCmbki8vN7_0Uk-o4GU-ASxBrxqe9gyL9vQ"

    const options = {
        url : "https://stghemi2-cloud.optum.com/rxclaimmembersearchdpaas/v1.0/rxclaim/member/search",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": token
        },
        body : JSON.stringify(GetDataService.getCustomerDetails())
    }

    console.log("options:"+JSON.stringify(options))
    request(options, 
        function (error, response, rsp_body) 
        { 
            console.log("step 2" + JSON.stringify(rsp_body))
            console.log("step 3" + JSON.stringify(response))
            console.log("step 4" + JSON.stringify(error))
            console.log("step 7: " + typeof(response))
            console.log("step 8: " + typeof(rsp_body))
            if(response.statusCode == 200 ){
                console.log("Step 5");
                // context.res.statusCode = 200;
                // context.res = GetDataService.postmId(context) ;
                context.res.headers = {
                    'Content-Type' : 'application/json' ,
                    
                }
                console.log("Step 6");
                // context.res.statusCode = response.statusCode
                context.res = {
                    body : JSON.parse(rsp_body),
                    statusCode : response.statusCode
                    //content-Type: 'application/json'
                };
                context.done();

                // context.res.send(rsp_body)
                // context.done();

            }
            // context.res = response.body
            
            // context.done();
            if (error) {
                console.log(error);
                // context.res = response.rsp_body
                // throw new Error(error);
            }
        }); 

    // if (req.params || req.params.mid || req.params.fname || req.params.lname || req.params.dob) {
    //     console.log("Step 1")
    //     // var req_body =  GetDataService.postmId(context);
    //     // console.log("Step 2"+JSON.stringify(req_body))
        
               
    // }
    // else {
    //     context.res = {
    //         status: 400,
    //         body: "Member ID not provided"
    //     };
    // }
    
}
};




