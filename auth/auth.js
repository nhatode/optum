
async function getToken (context){
  var rp = require('request-promise');
  var options = {
    'method': 'POST',
    'url': 'https://login.microsoftonline.com/orxhemib2c.onmicrosoft.com/oauth2/token',
    'headers': {
      'content-type': 'application/x-www-form-urlencoded',
      'Content-Type': 'text/plain'
    },
    body: "grant_type=client_credentials&client_id=f293d510-47b0-45a3-ab2b-27c85f96a621&resource=50e66739-1513-4133-bdbe-19fbcd948531&client_secret=-LmHp-5t~SRy1Y8k~u13.gUsiWfbbe25po"
  };

  await rp(options)
    .then(function (repos) {
        console.log('User has %d repos', repos.length);
        console.log("KKK:"+response.body.access_token);
        return response.body.access_token;
    })
    .catch(function (err) {
        // API call failed...
        console.log(err)
        // throw new Error(err);
    });

  // await rp(options, function (error, response) {
  //     if (error) 
  //         throw new Error(error);
      
  //     // context.bindings.authResponse = response.body ;
  //     console.log("KKK:"+response.body.access_token);
  //     return response.body.access_token;
  //   }).then(function (htmlString) {
  //     // Process html...
  // })
  // .catch(function (err) {
  //     // Crawling failed...
  // });;
}

module.exports.getToken = getToken;