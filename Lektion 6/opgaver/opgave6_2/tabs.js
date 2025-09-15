let headers = document.querySelectorAll("h1")

let spans = document.querySelectorAll("span")

for (const span of spans) {
    span.addEventListener("click", () => changeVisibility(span.id))
}


function changeVisibility(index){
    
    for (const header of headers) {
        header.classList.add("hidden")
    }
    let selectedHeader = headers[index];
    console.log(selectedHeader)
    selectedHeader.classList.remove("hidden")
}