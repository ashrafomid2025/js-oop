
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

// select input
const city = document.getElementById("city");
const maqsad = document.getElementById("maqsad");
const sorat = document.getElementById("sorat");
const btn = document.getElementById("btn");
const showMessage = document.getElementById("showMessage");

const fasilaha = {
    kabulKandahar: 501,
    kabulGhazni: 148,
    kabulMazar: 426,
    kabulHerat: 1070,
    kabulJalalAbad: 149,
    ghazniMazar: this.kabulGhazni + this.kabulMazar
}

btn.addEventListener("click",()=>{
    if(sorat.value !==""){
        let speed = parseFloat(sorat.value);
        if((city.value==="kabul" && maqsad.value ==="mazar") || (city.value ==="mazar" && maqsad.value==="kabul")){
            let time = fasilaha.kabulMazar/speed;
            showMessage.classList.remove("hidden");
            showMessage.textContent = `
            شما از${city.value}
            به طرف 
            ${maqsad.value}
            به سرعت 
            ${sorat.value}
            کیلومتر در ساعت 
            در حرکت استید شما نظر به سنجش در مدت 
            ${time.toString().substring(0,5)}
            ساعت خواهید رسید
            `
        }
        else if(
            (city.value ==="ghazni" && maqsad.value ==="kabul") ||
            (city.value ==="kabul" && maqsad.value ==="ghazni")
        ){
               let time = fasilaha.kabulGhazni/speed;
            showMessage.classList.remove("hidden");
            showMessage.textContent = `
            شما از${city.value}
            به طرف 
            ${maqsad.value}
            به سرعت 
            ${sorat.value}
            کیلومتر در ساعت 
            در حرکت استید شما نظر به سنجش در مدت 
            ${time.toString().substring(0,5)}
            ساعت خواهید رسید
            ` 
        }
        
    }
})