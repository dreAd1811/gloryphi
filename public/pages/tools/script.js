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
        });
}



