const GetDataService = require('../CustomerData/service');

module.exports = {
    GetData: async function (context, req) {
        context.log('JavaScript HTTP trigger function processed a request.');
    
        context.res = {
            status: 200,
            body: GetDataService.getCustomerDetails(context)
        };
    }
};