const newyear = document.getElementById("newyear");
const preview = document.getElementById("Preview");
let c = 0;
const button = document.getElementById("PreButton");
function updateTime(){
    const now = new Date();
    const newyeardate = new Date('January 1, 2025 00:00:00');
    const diff = newyeardate-now
    const days = Math.floor(diff/(1000*24*60*60))
    let x  = diff/(1000*24*60*60)
    let newdiff = (x-days)*24
    const hours = Math.floor(newdiff)
    newdiff = (newdiff-hours)*60
    const minutes = Math.floor(newdiff)
    newdiff = (newdiff-minutes)*60
    const seconds = Math.floor(newdiff)
    let str = "";
    if(days%10===days){
        str += "0"+ days +" days ";
    }else{
        str += days+" days "
    }

    if(hours%10===hours){
        str+= "0"+hours+":"
    }else{
        str+=hours+":"
    }

    if(minutes%10===minutes){
        str+= "0"+minutes+":"
    }else{
        str+= minutes+":"
    }

    if(seconds%10==seconds){
        str+= "0"+seconds
    }else{
        str+=seconds
    }

    newyear.innerHTML = str
}

updateTime()
setInterval(updateTime,1000);
function Click(){
    preview.style.display = "grid";
    document.getElementById("header").style.display = "none";
    document.getElementById("Main").style.display = "none";
}
function Prebut(){
    preview.style.display = "none";
    document.getElementById("header").style.display  = "grid";
    document.getElementById("Main").style.display = "flexbox";
}
