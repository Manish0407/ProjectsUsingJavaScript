const myButtonOne = document.getElementById('myButtonOne')
const myButtonTwo = document.getElementById('myButtonTwo')
const userName = document.getElementById('userName')
const userId = document.getElementById('userId')
const userPhoto = document.getElementById('userPhoto')

async function fetchData(url){
    try {
        const response = await fetch(url);
        const data = await response.json();

        userId.innerText = data.id;
        userName.innerText = data.name;
        userPhoto.src = data.avatar_url;
    } catch (error) {
        document.body.innerHTML = `<p style="color: red;">Something went wrong: ${error}</p>`;
    }
}

myButtonOne.addEventListener('click', function(){
    fetchData('https://api.github.com/users/manish0407');
})

myButtonTwo.addEventListener('click', function(){
    fetchData('https://api.github.com/users/hiteshchoudhary');
})

