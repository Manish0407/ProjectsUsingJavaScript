const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give valid height`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give valid weight`
    } else{
        const meterHeight = height/100
        const sqHeight = (meterHeight * meterHeight)
        const bmi = (weight/sqHeight).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
    } 
})