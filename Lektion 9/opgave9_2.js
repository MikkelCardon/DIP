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


//Definer en compareSort funktion, der tager en compare funktion som parameter og returnerer en sort
//funktion, der bruger denne compare funktion til at sortere et array af strenge.
function compareSort(compareFunc){
    return function(arr) {
        return arr.sort(compareFunc);
    };
}

let decending = (o1, o2) => o2.name.localeCompare(o1.name)

const sortByDescendingName = compareSort(decending); //vi bruger compareSort metoden, som forventer en function
sortByDescendingName(personer) //Vi kalder vores nye funktion der forventer et array. Retunerer arr.sort(compareFunc)

console.log(personer)

//Brug compareSort funktionen til at generere en lenSort og en ignoreCaseSort funktion, der bruger
//compareLen hhv. compareIgnoreCase fra opgave 2.3.
let stringArray = ["123", "123456", "0", "99", "987654", "9123"]

let lenSort = (o1, o2) => o1.length - o2.length
const sortByLength = compareSort(lenSort)

sortByLength(stringArray)
console.log(stringArray)

