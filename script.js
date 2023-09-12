let now = new Date()

let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let now = new Date()
    
    hrs.innerHTML = (now.getHours()<10?"0":"") + now.getHours();
    min.innerHTML = (now.getMinutes()<10?"0":"") + now.getMinutes();
    sec.innerHTML = (now.getSeconds()<10?"0":"") + now.getSeconds();
},1000)

