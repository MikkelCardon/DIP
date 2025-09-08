 let array = [];

 array.max = function(array){
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

array.contains = function(toFind){
    for (let item of this) {
        if(item === toFind){
            return true;
        }
    
    }
    return false;
}

array.contains2 = toFind => array.includes(toFind);



array.sum = function(){
    let sum = 0;

    for(let item of this){
        sum += item;
    }
    return sum;
}

array.push(1);
array.push(3);
array.push(4)

console.log(array.contains2(1));