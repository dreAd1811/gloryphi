const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  const userAgent = req.headers['user-agent'];
  const isMobile = /Mobile|Android|iPhone|iPad|iPod|Windows Phone/i.test(userAgent);
  
  if (isMobile) {
    // You can choose to respond with a message or redirect to a different page
    res.sendFile(__dirname + '/public/mobile/index.html');
  } else {
    // Continue processing the request for non-mobile devices
    next();
  }
});

app.use(express.static('public'));

// Route to the home page (index.html)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Route to the Random page 
app.get('/random', (req, res) => {
  res.sendFile(__dirname + '/public/pages/random/index.html');
});

// Route to the Image Generator page 
app.get('/image-gen', (req, res) => {
  res.sendFile(__dirname + '/public/pages/gloryv2/index.html');
});

// Route to the Anime  page 
app.get('/anime', (req, res) => {
  res.sendFile(__dirname + '/public/pages/anime/index.html');
});

// Route to the Random page 
app.get('/tools', (req, res) => {
  res.sendFile(__dirname + '/public/pages/tools/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
