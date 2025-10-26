// opgave11.2.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}


let button = document.getElementById("userButton")
button.addEventListener("click", loadUsers)

async function loadUsers(){
    console.log("Clicked");
    let users = await get("https://jsonplaceholder.typicode.com/users")
    let userList = document.getElementById("userList")

    users.forEach(user => {
        let newUser = new User(user.name, user.id)

        let newDiv = document.createElement("li")
        newDiv.onclick = () => loadPosts(newUser.id);


        newDiv.textContent = newUser.toString()

        userList.append(newDiv)
    });
}

async function loadPosts(id){
    console.log("loading posts");
    
    let postsJson = await get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

    let postList = document.getElementById("userPosts")
    postList.innerHTML = ""

    postsJson.forEach(post =>{
        let postDiv = document.createElement("div")
        postDiv.classList.add("post")

        let titel = document.createElement("h3")
        titel.textContent = post.title;

        let body = document.createElement("p")
        body.textContent = post.body

        postDiv.append(titel, body)
        postList.append(postDiv)
    })
}




 class User {
    constructor(navn, id) {
        this.navn = navn;
        this.id = id;
    }
    toString() { return `User: ${this.navn} - id: ${this.id}`}

    equals(p){return p.constructor === this.constructor && p.navn === this.navn}
    static compare(p1, p2){return p1.navn === p2.navn}
}