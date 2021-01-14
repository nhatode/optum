var Request = require("request");


const ENDPOINT_URL = "https://stghemi2-cloud.optum.com/rxclaimmembersearchdpaas/v1.0/rxclaim/member/search";

const token = "<Need the token>";
module.exports = function (context, req) {
    console.log("memberBody" + memberBody);
    const method = req.method.toLowerCase();
    var payload = null;
    var entity = "";


    switch (method) {
        case "post":
            var body = req.body
            var auth = 'Bearer ' + token;
            Request.post({
                "headers": {
                    "content-type": "application/json",
                    "Authorization": auth
                },
                "url": ENDPOINT_URL,
                "body": body
            }, (error, response, body) => {
                // if(error) {
                //     // response.body(body);
                //     console.log("::::::"+error);
                //     return error ; //console.dir(error);
                // }
                console.log(error);
                console.log(response.statusCode);
                if (response.statusCode != 200)
                    console.dir(JSON.parse(body));
                context.res =
                {
                    body
                }
                context.done();
            });
            break;
    }
    return val
}
