var value = "";
var imageUrl = "";
var deep_api = "3057885b-8c29-49cc-9732-2dafb82461db";

function getValue() {
    value = document.getElementById("input1").value;
    console.log(value);
}

function sendReq() {
    console.log("Request Sent")
    function askDALL_E2_Conversation() {
        const api_key = "sk-1048294595257184329-41663";
        const api_base = "https://api.shuttle.rip/v1/images/generations";

        const headers = {
            "Authorization": `Bearer ${api_key}`,
            "Content-Type": "application/json"
        };

        const data = {
            "model": "kandinsky-2.2", // kandinsky-2.2 is probably best
            "prompt": value,
            "n": 1
        };

        return fetch(api_base, {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error(`Error: ${response.status}`);
                }
            })
            .catch(error => {
                throw new Error(`Error: ${error.message}`);
            });
    }

    askDALL_E2_Conversation()
        .then(response_message => {
            console.log(response_message);
            imageUrl = response_message.data[0].url;
            console.log("Image URL:", imageUrl);
            var out = document.getElementById("out")
            out.src = imageUrl

        })
        .catch(error => {
            console.error(error);
        });

}

// function enhanceImg(){
//     console.log(imageUrl);
//     console.log("image enhanced request sent to api");

//     deepai.setApiKey(deep_api);
//     (async function() {
//       var enhance = await deepai.callStandardApi("torch-srgan", {
//         image: imageUrl,
//         });
//         console.log(enhance);
//         output_url_enh = enhance['output_url'];
//         var out_img_enh = document.getElementById("out");
//         out_img_enh.src = output_url_enh;
//         console.log(output_url_enh);
//     })};


// Vanta Background 
VANTA.HALO({
    el: "#main",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    amplitudeFactor: 3.00,
    xOffset: -0.11,
    yOffset: -0.11,
    size: 2.60
})

