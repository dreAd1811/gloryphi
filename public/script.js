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

let date = now.getDate()
console.log(date)



var datee = moment();

var currentDate = datee.format('D/MM/YYYY');

var datep = document.getElementById("datep");
datep.innerHTML = currentDate;
console.log(currentDate);