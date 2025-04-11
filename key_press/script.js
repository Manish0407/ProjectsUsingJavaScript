const body = document.querySelector('body')

body.style.backgroundColor = '#414141'

let mytable = document.getElementById('mytable')
mytable.hidden = true;

window.addEventListener('keydown', (e) => {
    document.getElementById('key').innerText = ""
    mytable.hidden = false;

    let td1 = document.getElementById('td1')
    let td2 = document.getElementById('td2')
    let td3 = document.getElementById('td3')
    
    e.key === ' ' ? td1.innerText = "SPACE" : td1.innerText = e.key
    td2.innerText = e.keyCode
    td3.innerText = e.code
});
