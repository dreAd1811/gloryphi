// api/saveIpAddress.js
module.exports = (req, res) => {
    const forwardedFor = req.headers['x-forwarded-for'];
    const realIp = req.headers['x-real-ip'];
    const clientIp = forwardedFor || realIp || req.connection.remoteAddress;
  
    // Save the IP address to a database or perform any other desired action.
    console.log(`Received IP address: ${clientIp}`);
    res.status(200).send('IP address saved successfully');
  };
  