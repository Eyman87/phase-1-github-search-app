const init = () => {
    const inputForm = document.getElementById('github-form');

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        getUserNames(event.target.search.value)
    }) 
}

function getUserNames(user){
    console.log(user)
    fetch(`https://api.github.com/search/users?q=${user}`)
    .then((result) => result.json())
    .then((data) => {
        displayUserInfo(data)
})

function displayUserInfo(data) {
    const userList = document.getElementById('user-list')
    data.items.forEach(element => {
        const li = document.createElement('li')
        li.innerHTML = element.login + "  " + element.url + "  " + element.avatar_url;
        // li.innerHTML = element.url
        // li.innerHTML = element.avatar_url
        userList.appendChild(li)
    })

}
li.addEventListener('click', (event) => getRepos(event))
userList.appendChild(li);

}

document.addEventListener('DOMContentLoaded', init)

        

