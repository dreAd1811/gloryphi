const express = require('express');
const axios = require('axios');
const path = require('path');
const { JSDOM } = require('jsdom');
const { spawn } = require("child_process");
const app = express();
const port = 4000;


// Enable CORS to allow requests from all domains
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // You can also specify more CORS headers as needed
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
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


// Fraud SCORE API :)

app.get('/scrape/:text', async (req, res) => {
  try {
    const text = req.params.text; // Extract the text parameter from the URL
    const url = `https://scamalytics.com/search?ip=${text}`;

    // Function to scrape the website and extract the text of the score div
    async function scrapeWebsite(url) {
      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          const { document } = new JSDOM(response.data).window;
          const scoreDiv = document.querySelector('.score');
          const scoreText = scoreDiv ? scoreDiv.textContent.trim() : 'Score not found';
          return scoreText;
        } else {
          return 'Failed to retrieve the webpage. Status code: ' + response.status;
        }
      } catch (error) {
        return 'Error: ' + error.message;
      }
    }

    // Scrape the website and send a JSON response
    const data = await scrapeWebsite(url);
    res.json({ score: data });
  } catch (error) {
    res.status(500).json({ error: 'Error scraping website' });
  }
});

app.use(express.json()); // Middleware for parsing JSON request bodies
app.enable('trust proxy'); // Enables reverse proxy support

// Endpoint to save IP address
app.post('/saveIpAddress', (req, res) => {
  const userIpAddress = req.ip;
  // Here, you can save the IP address to your database or perform any other desired action.
  console.log(`Received IP address: ${userIpAddress}`);
  res.sendStatus(200); // Send a success response
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
