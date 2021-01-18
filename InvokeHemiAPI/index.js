// var https = require('https');

// const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjVPZjlQNUY5Z0NDd0NtRjJCT0hIeEREUS1EayIsImtpZCI6IjVPZjlQNUY5Z0NDd0NtRjJCT0hIeEREUS1EayJ9.eyJhdWQiOiIyNDQxNmZmOC0yNWRjLTRkYmYtYThjMi1lMDczOWRkMzAyNjgiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84ZDEzMzBmYy00MGQxLTQ2NmItYWMzYi1jYzlkMThlYzlmZTcvIiwiaWF0IjoxNjEwNDg1ODM4LCJuYmYiOjE2MTA0ODU4MzgsImV4cCI6MTYxMDQ4OTczOCwiYWlvIjoiRTJKZ1lDaFdVYkR1M2M4d3gwNzRnWm5QS1FNM0FBPT0iLCJhcHBpZCI6IjQxOTU5Yjk2LTM3YWUtNGFiZC1hYzI5LTYxZWY0ZmMzNzI2OCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzhkMTMzMGZjLTQwZDEtNDY2Yi1hYzNiLWNjOWQxOGVjOWZlNy8iLCJvaWQiOiJiMTE5ZmRmNi05MmNmLTRlZDItOWM3MC1lNjRlNDk5ZWM4MTMiLCJyaCI6IjAuQUFBQV9EQVRqZEZBYTBhc084eWRHT3lmNTVhYmxVR3VONzFLckNsaDcwX0RjbWdkQUFBLiIsInJvbGVzIjpbInJ4Yy1waGFybXNyY2gtbXMiLCJSeEVTQl9BUFBfUk9MRSJdLCJzdWIiOiJiMTE5ZmRmNi05MmNmLTRlZDItOWM3MC1lNjRlNDk5ZWM4MTMiLCJ0aWQiOiI4ZDEzMzBmYy00MGQxLTQ2NmItYWMzYi1jYzlkMThlYzlmZTciLCJ1dGkiOiJWNVRaUFgtcGhFNktJQVFKbUYwRUFBIiwidmVyIjoiMS4wIn0.VTfMD9KmqkU2sgsqIdf-UJoZzLx_0iemxZ7SK38WsoMQHQXtG4P6wnFLris3utW0hOp5s9jn6_18VyRK7er4PKomR31n1AP6am246jVq_6MeGxDzZbUkRHjNIZ31S97-h0FnVafOGt4rGdQAd1P_YRIdAF3rceX59kgIstRK4JgkGm8JpD8JyC389O63WEzK99B-oSQbhj1jQ2jgvALdEiMpRAybX0NltejFJ3jMsJOuLS_iVyK4vhzDxOwuZ1rppaIG0lQp3maznr7a0cyRk9y6JgF_jzH6Yt4a02rnXjWwqEw0mBEHvZLmyKtWgXKUqUiRvzgpV3JjKJ_sgr6wjw";
// var auth = 'Bearer\n' + token;

// const data = JSON.stringify({
//     data: 'This is a test'
// })

// const options = {
//     ENDPOINT_URL = "https://stghemi2-cloud.optum.com/rxclaimmembersearchdpaas/v1.0/rxclaim/member/search",
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         "Authorization": auth
//     }
// }

// const req = https.request(options, res => {
//     console.log(`statusCode: ${res.statusCode}`)

//     res.on('data', d => {
//         process.stdout.write(d)
//     })
// })

// req.on('error', error => {
//     console.error(error)
// })

// req.write(data)
// req.end()

// const PostAPI = require('../PostData/index');

// module.exports = function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');

//     context.res = {
//         // status: 200,
//         // body: "The API is invoked"
//     };
// };