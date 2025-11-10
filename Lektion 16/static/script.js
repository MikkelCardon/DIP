const navn = document.querySelector('#navn');
const password = document.querySelector('#password');
const login = document.querySelector('#login');
const fejl = document.querySelector('#fejl');

async function POST(url, data){
    console.log(data);
    

    return await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json"},
        body: JSON.stringify(data)
    })
}


login.onclick = async () => {
try {
const svar = await POST("/login",
{navn: navn.value, password: password.value});
if (svar.ok) {
window.location.href = "/session";
}
else {
password.value = "";
fejl.innerHTML = "Forkert password!";
}
} catch (e) {
fejl.innerHTML = e.name + ": " + e.message;
}
};