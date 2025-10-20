class StringStack{
    constructor(){
        this.stack = []
    }

    push(newString){
        if(typeof newString !== "string"){
            throw new Error("Only strings are allowed")
        }
        this.stack.push(newString)
    }

    pop(){
        if(this.stack.length === 0){
            throw new Error("Stakken er tom")
        }
        return this.stack.pop()
    }
}

let stack = new StringStack()

console.log(stack)

stack.push("Hello")
stack.push("My world")

console.log(stack)

stack.pop()

console.log(stack)