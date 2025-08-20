let list1 = [2, 4, 6, 8, 10];
let list2 = [1, 3, 7, 9, 11];


let newList = [];

let index1 = 0, index2 = 0;
while(index1 < list1.length && index2 < list2.length){
    if(list1[index1] < list2[index2]){
        newList.push(list1[index1]);
        index1++;
    }
    if(list1[index1] > list2[index2]){
        newList.push(list2[index2]);
        index2++;
    }
}

while(index1 < list1.length){
    newList.push(list1[index1]);
        index1++;
}
while(index2 < list2.length){
    newList.push(list2[index2]);
        index2++;
}

console.log(newList);