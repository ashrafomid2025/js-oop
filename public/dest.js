
setInterval(()=>{
    const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
let date = new Date();
hours.innerHTML = date.getHours();
minutes.innerHTML = date.getMinutes();
if(date.getSeconds()<=9){
seconds.innerHTML ="0" +date.getSeconds();
}
else{
    seconds.innerHTML = date.getSeconds();
}

},1000);