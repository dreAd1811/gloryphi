const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// Route to the home page (index.html)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Route to the about page (about.html)
app.get('/random', (req, res) => {
  res.sendFile(__dirname + '/public/pages/random/index.html');
});

// Route to the contact page (contact.html)
app.get('/image-gen', (req, res) => {
  res.sendFile(__dirname + '/public/pages/gloryv2/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
