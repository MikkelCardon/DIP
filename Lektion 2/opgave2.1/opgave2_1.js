let array = [16, 2, 3, 7.5, 6, 12, 56, 103, 101, 2, 1, 0];

function max(array){
    if(array.length === 0){
        return undefined;
    }

    let maxItem = array[0];

    for (let element of array){
        if(element > maxItem){
            maxItem = element;
        }
    }

    return maxItem;
}

let maxNumb = max(array);
console.log(maxNumb);