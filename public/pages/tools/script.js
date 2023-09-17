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

// Fraud Check CODE

// Function to get the user's IP address
async function getUserIP() {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      if (response.ok) {
        const data = await response.json();
        return data.ip;
      } else {
        console.error('Failed to fetch user IP.');
        return null;
      }
    } catch (error) {
      console.error('Error:', error.message);
      return null;
    }
  }

  // Function to fetch data from the server and display it
  async function fetchData() {
    try {
      const userIP = await getUserIP(); // Get the user's IP address
      if (!userIP) {
        console.error('User IP not available.');
        return;
      }
      console.log(userIP)
      const response = await fetch(`/scrape/${userIP}`); // Send a request to the server with the user's IP

      // Check if the request was successful (status code 200)
      if (response.ok) {
        const data = await response.json(); // Parse the JSON response
        const scoreValue = data.score; // Extract the "score" value

        // Set the "scoreValue" as the text of the <p> element with class "res"
        document.querySelector('.res').textContent = scoreValue;

      } else {
        console.error('Failed to fetch data. Status code:', response.status);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  // Attach click event listener to the button
  document.getElementById('scrapeButton').addEventListener('click', fetchData);

