  class Person {
    constructor(navn) {
        this.navn = navn;
    }
    toString() { return this.navn; }

    equals(p){return p.constructor === this.constructor && p.navn === this.navn}
    static compare(p1, p2){return p1.navn === p2.navn}
}

let persons = []
/*
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => {
        json.forEach(person => {
            let newPerson = new Person(person.name)
            console.log(newPerson)
            persons.push(newPerson)
        }
    )
    })
console.log(persons);
*/

//with sync/await

let response = await fetch("https://jsonplaceholder.typicode.com/users")

if(response.ok){
    console.log(response);
    
    let json = await response.json()
    json.forEach(object => console.log(new Person(object.name)))
}



