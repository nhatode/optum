// const data = require('./data.js');
// console.log(data);
// module.exports = {
//     getCustomerDetails: function (context) {
//         try {
//             var obj = data.getCustomerDetails(context);
//             context.res.send(JSON.stringify(obj));

//         } catch (error) {
//             context.res.status(500).send(error);
//         }
//     },

//     postmId: function (context) {
//         try {
//             var response = data.postmId(context.req.params.mid);
//             var response = data.fname(context.req.params.fname);
//             var response = data.lname(context.req.params.lname);
//             var response = data.dob(context.req.params.dob);
//             // context.res.send(JSON.stringify(response));
//             // return response ;
//         } catch (error) {
//             context.log(error)
//             context.res.status(500).send(error);
//         }
//     }

//     // fname: function (context) {
//     //     try {
//     //         const response = data.fname(context.req.params.fname);
//     //         console.log(context.req.params.fname);
//     //         console.log(response);
//     //         context.res.send(JSON.stringify(response));
            
//     //     } catch (error) {
//     //         context.log(error)
//     //         context.res.status(500).send(error);
//     //     }
//     // }

// };

