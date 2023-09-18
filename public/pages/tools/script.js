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

// // Fraud Check CODE
// const userIP = "";
// // Function to get the user's IP address
//     async function getUserIP() {
//       try {
//         const response = await fetch('https://api.ipify.org?format=json');
//         if (response.ok) {
//           const data = await response.json();
//           return data.ip;
          
//         } else {
//           console.error('Failed to fetch user IP.');
//           return null;
//         }
//       } catch (error) {
//         console.error('Error:', error.message);
//         return null;
//       }
//     }

   
//     // Function to fetch data from the server and display it
//     async function fetchData() {
//       try {
//         const userIP = await getUserIP(); // Get the user's IP address
//         if (!userIP) {
//           console.error('User IP not available.');
//           return;
//         }
//         console.log(userIP)
//         const response = await fetch(`/scrape/${userIP}`); // Send a request to the server with the user's IP

//         // Check if the request was successful (status code 200)
//         if (response.ok) {
//           const data = await response.json(); // Parse the JSON response
//           const scoreValue = data.score; // Extract the "score" value

//           // Set the "scoreValue" as the text of the <p> element with class "res"
//           document.querySelector('.res').textContent = scoreValue;

//         } else {
//           console.error('Failed to fetch data. Status code:', response.status);
//         }
//       } catch (error) {
//         console.error('Error:', error.message);
//       }
//     }
    

//     // Attach click event listener to the button
//     document.getElementById('scrapeButton').addEventListener('click', fetchData);

    

//     let globalIP; // Global variable to store the IP address

// async function getPublicIP() {
//   try {
//     const response = await fetch('https://api.ipify.org?format=json');
//     if (!response.ok) {
//       throw new Error(`Request failed with status: ${response.status}`);
//     }
//     const data = await response.json();
//     globalIP = data.ip; // Store the IP address globally
//     return globalIP;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }

// function fetchDataUsingJSONP(ip) {
//   const url = `https://gloryphi.cyclic.cloud/scrape/${ip}?callback=myCallbackFunction`;

//   const script = document.createElement('script');
//   script.src = url;

//   document.body.appendChild(script);

//   // Define a callback function to handle the response
//   window.myCallbackFunction = function(data) {
//     console.log('Data from URL:', data);
//     document.body.removeChild(script);
//   };
// }

// // Example usage:
// getPublicIP()
//   .then(ip => {
//     if (ip) {
//       console.log(`Your public IP address is: ${ip}`);
      
//       // Fetch data using JSONP
//       fetchDataUsingJSONP(ip);
//     } else {
//       console.log('Failed to fetch IP address.');
//     }
//   });


document.getElementById("scrapeButton").addEventListener("click", () => {
  // When the button is clicked, make an HTTP request to your Express server.
  fetch("/call-python-script")
      .then(response => response.json())
      .then(data => {
          // Handle the response data as needed.
          console.log(data);
          // You can update the DOM with the data or perform any other actions here.
      })
      .catch(error => {
          console.error("An error occurred:", error);
          // Handle errors here.
      });
});