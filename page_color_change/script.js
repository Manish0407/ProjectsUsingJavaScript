
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#"
    for(let i=0; i<3; i++){
        const value = Math.floor(Math.random() * 128);
        color += value.toString(16).padStart(2, '0');
    }
    return color
}
let setIntervalId;
function startChangingColor(){
    if (!setIntervalId){
        setIntervalId = setInterval(changeBgColor, 1000)
    }
};

function changeBgColor(){
    document.body.style.backgroundColor = randomColor()
}
function stopChangingColor(){
    clearInterval(setIntervalId)
    setIntervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)
