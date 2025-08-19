const boardSize = 8;
let boolSwitch = false;

for (let index = 0; index < 8; index++) {
    let toPrint = '';

    for (let x = 0; x < 8; x++) {
    
        toPrint += x % 2 == boolSwitch ? '#' : ' ';
    }
    console.log(toPrint);
    boolSwitch = !boolSwitch;
}