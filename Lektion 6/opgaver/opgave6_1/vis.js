/*Opgave 6.1 - Labels*/
let inputFields = document.querySelectorAll("input")
let inputDivs = document.querySelectorAll("div")

let index = 0
for (const inputField of inputFields) {
    let inputLabel = document.createElement("label")
    inputDivs[index++].insertBefore(inputLabel, inputField)


    inputLabel.textContent = inputField.name
    inputLabel.htmlFor = inputField.name

    console.log(inputField.name)
}

/*Opgave 6.1 - random Text onclick */
let labels = document.querySelectorAll("label")

for (const label of labels) {
    label.addEventListener("click", () =>{
        console.log("eventlistener entered")
        let randomNumber = Math.floor(Math.random() * 1000)
        
        let inputField = document.querySelector("#"+label.htmlFor)
        inputField.value = randomNumber
    });
}
