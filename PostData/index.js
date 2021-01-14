const GetDataService = require('../CustomerData/service');

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.params && req.params.mid) {
        
        context.res = {
            status: 200,
            body: GetDataService.postmId(context)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Member ID not provided"
        };
    }
    context.done();
};