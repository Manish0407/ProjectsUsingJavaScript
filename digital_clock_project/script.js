// digital clock logic

let clock = document.getElementById('clock')
let ukClock = document.getElementById('ukclock')
let usClock = document.getElementById('usclock')
let jpClock = document.getElementById('jpclock')

setInterval(function(){
    let date = new Date();
    // console.log(time.toLocaleTimeString)
    clock.innerHTML = date.toLocaleTimeString();
    ukClock.innerHTML = date.toLocaleTimeString("en-GB", {
        timeZone: "Europe/London",
        hour12: true
    }).toUpperCase();
    usClock.innerHTML = date.toLocaleTimeString("en-US", {
        timeZone: "America/New_York"
    });
    jpClock.innerHTML = date.toLocaleTimeString("en-JP", {
        timeZone: "Asia/Tokyo"
    });
}, 1000);