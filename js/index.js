const init = () => {
    const inputForm = document.getElementById('github-form');

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        getUserName(event.target.search.value)
    }) 
}

function getUserName(user){
    console.log(user)
    fetch(`https://api.github.com/search/users?q=${user}`)
    .then((result) => result.json())
    .then((data) => {
        displayUserInfo(data)
        console.log("data", data)
    })  
}    

function displayUserInfo(data) {
    const userList = document.getElementById('user-list')
    data.items.forEach(element => {
        const li = document.createElement('li')
        li.innerHTML = element.login + "<br>" + element.url + "<br>" + element.avatar_url;
        // creat const divs and para then append to li might be better
        li.addEventListener('click', (event) => getRepos(event, element.login))
        userList.appendChild(li)
    })
}


function getRepos(event, userName) { 
    console.log(userName)
    fetch (`https://api.github.com/users/${userName}/repos`)
    .then((result) => result.json())
    .then((repos) => {
        console.log("repos", repos)
        renderRepos(repos)
    })
}


function renderRepos(repos) {
    const repoList = document.getElementById('repos-list')
    repoList.innerHTML = ""
    // console.log("repos", repos)
    repos.forEach(repo => {
        // renderOneName("repo", repo.name))
        const li = document.createElement('li')
        li.innerHTML = repo.name
        repoList.appendChild(li)
        console.log("repolist", repoList)
    })
}    
// 
// before rendering repos in UL, make sure all repos cleared and then add new repos
// userList.appendChild(li);




document.addEventListener('DOMContentLoaded', init)

        
