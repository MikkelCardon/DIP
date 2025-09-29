//Modificer compareSort funktionen, så den returnerede sort funktion nu validerer sin parameter.

function compareSort(compareFunc){
    if(typeof compareFunc !== "function") throw "Is not a function"
    if(typeof o1 !== o2) throw "object not of same type"

    return function(arr) {
        if(!Array.isArray(arr)) throw "is not an array"

        return arr.sort(compareFunc);
    };
}

let decending = (o1, o2) => o2.name.localeCompare(o1.name)

const sortByDescendingName = compareSort(decending);