let text = "([[]]){()}";


function valid(text){  
    let stack = [];

    for (let element of text) {
        if(element == "(" || element == "[" || element == "{"){
            stack.push(element);
        }
        else {
            if(reverse(element) !== stack.pop()){
              return false;
            }
        }
    }
    return stack.length == 0;
}



function reverse(element){
    switch(element){
        case ")": return "(";
        case "]": return "[";
        case "}": return "{";
    } 
}

let isValid = valid(text);
console.log(isValid);