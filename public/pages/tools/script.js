var outp = "";
var text = "";

function getSS() {
    var text = document.getElementById("text").value;
    var longURL = "https://api.apiflash.com/v1/urltoimage?access_key=e896a3e8a13248d18c49cf35edb6aaf5&wait_until=page_loaded&url=http://" + text;

    // Make an API call to TinyURL to shorten the long URL
    shortenURL(longURL);
}

function shortenURL(longURL) {
    // Create the request URL for the TinyURL API
    var requestURL = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(longURL);

    // Send an HTTP GET request to TinyURL to shorten the URL
    fetch(requestURL)
        .then(response => response.text())
        .then(data => {
            // Extract the shortened URL from the response
            var shortenedURL = data;
            document.getElementById("outp5").textContent = shortenedURL;
        })
        .catch(error => {
            console.error('Error shortening URL:', error);
            alert("Some error Occured")
        });
}

// Define a global variable to store the IP address
let clientIp;

function fetchData() {
    if (clientIp) {
      const url = `https://gloryphi.cyclic.cloud/scrape/${clientIp}`;
  
      fetch(url)
        .then(response => response.text())
        .then(data => {
          // Assuming the data is in JSON format, parse it
          const jsonData = JSON.parse(data);
  
          // Access the "score" property and log it
          const scoreValue = jsonData.score;
          console.log(scoreValue);
          document.querySelector(".res").textContent = scoreValue;
  
          // You can process the fetched data here
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      console.log('Client IP Address is not available yet.');
    }
  }
  


// Function to get the client's IP address
function getClientIpAddress() { 
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            clientIp = data.ip; // Save the IP address globally
            console.log(`Client IP Address: ${clientIp}`);
            // Call the function to fetch data after getting the IP address
            fetchData();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}



document.getElementById('scrapeButton').addEventListener('click', getClientIpAddress);

// Github First Commit 

var inputUrl;
var updatedUrl;

function getFirstCommit() {
  function firstCommit(url) {
    var commits = document.getElementById("numberg").value;
    var no = commits - 34;
    var modifiedCommits = "+" + no; // Save the modified commits
    var modifiedUrl = url.replace(/\+34/g, modifiedCommits);
    console.log("Modified Commits: " + modifiedCommits); // Log the modified commits
    return modifiedUrl;
  }

  inputUrl = document.getElementById("textg").value;
  updatedUrl = firstCommit(inputUrl);

  // Shorten the URL using the TinyURL API
  shortenUrlGit(updatedUrl);
}

function shortenUrlGit(url) {
  // Define the TinyURL API endpoint
  var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(url);

  // Make an HTTP GET request to the TinyURL API
  fetch(apiUrl)
    .then(function(response) {
      return response.text();
    })
    .then(function(shortenedUrl) {
      console.log("Shortened URL: " + shortenedUrl);
      document.getElementById("outp6").textContent = shortenedUrl; // Display the shortened URL
    })
    .catch(function(error) {
      document.getElementById("outp6").textContent = "Error"
    });
}





