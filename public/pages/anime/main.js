
const baseUrl = "https://api.consumet.org/anime/gogoanime/watch/";
let episodeId = "naruto-episode-1"; // Default episode ID
const server = "gogocdn";

// Function to fetch data and update the video source
const fetchDataAndUpdateVideo = async () => {
    try {
        // Get the values from the textboxes
        const animeName = document.getElementById("animeName").value;
        const episodeNumber = document.getElementById("episodeNumber").value;

        // Update the episodeId based on user input
        episodeId = `${animeName}-episode-${episodeNumber}`;

        const url = new URL(baseUrl + episodeId);
        url.searchParams.append("server", server);

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Function to find the URL with quality "1080p"
        const find1080pURL = (sources) => {
            for (const source of sources) {
                if (source.quality === "1080p") {
                    return source.url;
                }
            }
            return null; // Return null if not found
        };

        // Call the function to find the URL with quality "1080p"
        const url1080p = find1080pURL(data.sources);

        // Log the URL with quality "1080p" to the console
        console.log("1080p URL:", url1080p);

        // hls js video player to play m3u8 files
        const video = document.getElementById("my-video");
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(url1080p);
            hls.attachMedia(video);
        }
        document.getElementById("my-video").style.opacity = "1";
        document.getElementById("error1").textContent = "";
    } catch (error) {
        console.error(error);
        document.getElementById("error1").textContent = "Error"
    }
};

// Add a click event listener to the button
document.getElementById("updateButton").addEventListener("click", fetchDataAndUpdateVideo);


new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    licenseKey: "gplv3-license"
});


const urlBase = "https://api.consumet.org/anime/gogoanime/";

const fetchData = async (searchText) => {
    try {
        const url = `${urlBase}${searchText}?page=1`; // Construct the URL with the updated text
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); 
        return data.results; // Extract the "results" array from the response
    } catch (error) {
        throw new Error(error.message);
    }
};

const displayData = async () => {
    const animeList = document.getElementById("anime-list");
    const maxDivs = 12; // Maximum number of div elements

    try {
        const animeData = await fetchData(document.getElementById("inp").value);

        if (animeData.length === 0) {
            document.getElementById("error3").textContent = "No Anime Found"
            return; // Exit the function early if no results are found
        }

        // Iterate through the animeData with a limit of 18 items
        for (let i = 0; i < Math.min(maxDivs, animeData.length); i++) {
            const anime = animeData[i];

            const animeItem = document.createElement("div");
            animeItem.classList.add("grid-item");
            animeItem.innerHTML = `<p>ID: ${anime.id}</p><p>Title: ${anime.title}</p>`;
            animeList.appendChild(animeItem);
            document.getElementById("error3").textContent = "";
        }
    } catch (error) {
        console.error(error);
    }
};


// Add a click event listener to the button
document.getElementById("btn1").addEventListener("click", function () {
    const searchText = document.getElementById("inp").value; // Get the text from the input
    const newURL = `${window.location.origin}${window.location.pathname}?text=${encodeURIComponent(searchText)}`;
    history.pushState({}, document.title, newURL);

    // Call the fetchData and displayData functions after updating the URL
    document.getElementById("anime-list").innerHTML = ''; // Clear the existing data
    displayData();
});