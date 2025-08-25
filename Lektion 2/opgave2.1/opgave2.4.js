let text = `Lav en string variabel med en længere tekst
Anvend dernæst et objekt som en map til at beregne antallet af de forskellige ord i teksten.
Brug metoden split() til at opdele teksten i ord`;

let wordCounter = {};

let words = text.replace(/[.,]/g,"").replace(/\n/g, " ").split(" ");
let lowerCaseWords = words.map(word => word.toLowerCase());

for (let word of lowerCaseWords) {
    if(word in wordCounter){
        wordCounter[word] += 1;
    }else{
        wordCounter[word] = 1;
    }
}


console.log(wordCounter);

