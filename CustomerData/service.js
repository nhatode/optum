const data = require('./data.js');

module.exports = {
    getCustomerDetails: function (context) {
        try {
            var obj = data.getCustomerDetails(context);
            context.res.send(JSON.stringify(obj));

        } catch (error) {
            context.res.status(500).send(error);
        }
    },

    postmId: function (context) {
        try {
            const response = data.postmId(context.req.params.mid);
            context.res.send(JSON.stringify(response));
        } catch (error) {
            context.log(error)
            context.res.status(500).send(error);
        }
    }

};

