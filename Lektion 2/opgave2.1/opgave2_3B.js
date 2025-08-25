function compare(s1, s2){
    if(s1 === s2) return 0;

    return s1 > s2 ? 1 : -1;
}

function compareLen(s1, s2){
    return s1.length - s2.length;
}

function compareIgnoreCase(s1, s2){
    let string1 = s1.toLowerCase();
    let string2 = s2.toLowerCase();
    if(string1 === string2) return 0;

    return string1 > string2 ? 1 : -1;
}

let list = ["Karl", "Flemming", "Kurt", "Ole", "Aursula"];

function sort(list, comparator){
    for (let i = list.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (comparator(list[j], list[j+1]) > 0) {
                swap(list, j, j+1)
            }
        }
    }
}

function swap(list, i, j){
    let temp = list[j];
    list[j] = list[i];
    list[i] = temp;
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

console.log(list);
sort(list, compare);

console.log(list);