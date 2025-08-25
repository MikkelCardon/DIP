function compare(s1, s2){
    if(s1 === s2) return 0;

    return s1 > s2 ? 1 : -1;
}

console.log("COMPARE:")
console.log(compare("a", "c")); //-1
console.log(compare("d", "c")); //1
console.log(compare("a", "a")); //0
console.log(compare("Hello", "hello")); //-1
console.log(compare("TEST", "TEST")); //0
console.log(compare("a", "A")); //1 fordi små bogstaver er højere leksi tal end stort



function compareLen(s1, s2){
    return Math.abs(s1.length - s2.length);
}

console.log("CompareLength");
console.log(compareLen("123", "1")); //2
console.log(compareLen("123", "12345")); //2
console.log(compareLen("123 56", "12345")); //1

let s1 = "HELLO"

function compareIgnoreCase(s1, s2){
    let string1 = s1.toLowerCase();
    let string2 = s2.toLowerCase();
    if(string1 === string2) return 0;

    return string1 > string2 ? 1 : -1;
}

console.log("CompareIgnoreCase");
console.log(compareIgnoreCase("a", "A")); //0
console.log(compareIgnoreCase("b", "A")); //1
console.log(compareIgnoreCase("a", "B")); //-1
console.log(compareIgnoreCase("B", "A")); //1
console.log(compareIgnoreCase("B", "a")); //1
