// Inside your JavaScript function after loading the HTML content
function loadPage(pageURL) {
    fetch(pageURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(htmlContent => {
            document.getElementById("content").innerHTML = htmlContent;

            // Load CSS from the second HTML page
            const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
            cssLinks.forEach(link => {
                const newLink = document.createElement('link');
                newLink.rel = 'stylesheet';
                newLink.href = link.href;
                document.head.appendChild(newLink);
            });

            // Load JavaScript from the second HTML page
            const scriptTags = document.querySelectorAll('script[src]');
            scriptTags.forEach(script => {
                const newScript = document.createElement('script');
                newScript.src = script.src;
                document.head.appendChild(newScript);
            });
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}
