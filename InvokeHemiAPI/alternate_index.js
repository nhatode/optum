var https = require('https');

var Memberapi = require("../PostData/index");
const Payload = Memberapi.memberAPI();

const ENDPOINT_URL = "https://stghemi2-cloud.optum.com/rxclaimmembersearchdpaas/v1.0/rxclaim/member/search";
const token = "<Need the token>";
var auth = 'Bearer ' + token;
var postheaders = {
    "content-type": "application/json",
    "Authorization": auth
};

var reqPost = https.request(ENDPOINT_URL, function (res) {
    console.log("statusCode: ", res.statusCode);

    res.on('data', function (d) {
        console.info('POST result:\n');
        process.stdout.write(d);
        console.info('\n\nPOST completed');
    });
});

// write the json data
reqPost.write(Payload);
reqPost.end();
reqPost.on('error', function (e) {
    console.error(e);
});
