let personer = [
    {
        "name":"Karsten",
        "alder":33,
        "mobilNummer": "11 11 11 11"
    },
    {
        "name":"Henrik",
        "alder":25,
        "mobilNummer": "99 99 99 99"
    },
    {
        "name":"Thomas",
        "alder":12,
        "mobilNummer": "33 33 33 33"
    }
]

//Find person med et bestemt mobilnummer
let person = personer.find(n => n.mobilNummer === '99 99 99 99')
console.log(person)

//Find den mindste alder
let mindsteAlder = personer.reduce((min, current) =>{
    return current.alder < min ? current.alder : min
}, 999);

console.log(mindsteAlder)

//Modificer arrayet med personer, så personerne nu får et fortløbende id
personer.forEach((current, id) => current.id = id + 1)
console.log(personer)

//Generer en tekststreng, der indeholder personernes navne – kommasepareret og i sorteret rækkefølge
let navneStreng = personer.sort((p1, p2) => p1.navn - p2.navn).map(p => p.name).reduce((concat, p) => concat+", "+p, "")
console.log(navneStreng)

//Generer et array med navn og mobilnummer på de personer, der er yngre end 30.
let nytArray = personer
    .filter(p => p.alder < 30)
    .map((p) =>{
        return {
            "name": p.name,
            "mobilnummer": p.mobilNummer
        }
    })

console.log(nytArray)