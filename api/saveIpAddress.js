// api/saveIpAddress.js
module.exports = (req, res) => {
    const userIpAddress = req.headers['x-real-ip'] || req.connection.remoteAddress;
    // Save the IP address to a database or perform any other desired action.
    console.log(`Received IP address: ${userIpAddress}`);
    res.status(200).send('IP address saved successfully');
  };
  