let para = document.querySelectorAll("p");

for (const element of para) {
    element.style.color = "red";
}

let docuChild = document.querySelectorAll("li");

let id = 1;
for (let item of docuChild) {
    item.style.color = id++ % 2 === 0 ? "brown" : "grey";
}

let headers = document.querySelectorAll("h1");

for (const header of headers) {
    let headerSibling = header.nextElementSibling;
    let siblingText = headerSibling.textContent;
    
    headerSibling.outerHTML = `<h2> ${siblingText}</h2>`;
}

let headerId = 1;
for (const header of headers) {
    header.id = "id"+headerId++;
}

let headerSection = document.getElementsByTagName("header");
for (const header of headers){
    let newItem = document.createElement("a")
    newItem.href = "#" + header.id;
    newItem.innerText = "#"+header.id;
    headerSection[0].append(newItem)
}


