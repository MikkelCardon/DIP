// bubbleSort.js
let list = ["Karl", "Flemming", "Kurt", "Ole", "Aursula"];

function sort(list, comparator){
    for (let i = list.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (list[j] > list[j + 1]) {
                swap(list, i, j)
            }
        }
    }
}

function swap(list, i, j){
    let temp = list[j];
    list[j] = list[j+1];
    list[j+1] = temp;
}

function findCandidate(list, candidate){
    let left = 0, right = list.length-1;
    let candidateIndex = -1;

    while(left < right){
        let middel = Math.round(left + (right - left) / 2);

        if(list[middel] == candidate){
            candidateIndex = middel;
            break;
        }
        if(candidate < list[middel]){
            right = middel -1;
        }
        if(candidate > list[middel]){
            left = middel + 1;
        }
    }
    return candidateIndex;
}

sort(list);
console.log(list);
console.log(findCandidate(list, "Flemming"));