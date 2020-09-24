
const fs = require('fs');
const receiveFrom = process.argv[2];
const sendTo = process.argv[3];
const request = require('request');

request(receiveFrom, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    process.exit;
  }
  fs.writeFile(sendTo, body, function(err) {
    let size = fs.statSync(sendTo);
    if (err) {
      console.log("error:", err);
    } else
      console.log(`Downloaded and saved ${size['size']} bytes from ${receiveFrom} to ${sendTo}`);
  });
});
