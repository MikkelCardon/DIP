// specialisering.js
class Person {
    constructor(navn) {
        this.navn = navn;
    }
    toString() { return this.navn; }

    equals(p){return p.constructor === this.constructor && p.navn === this.navn}
    static compare(p1, p2){return p1.navn === p2.navn}
}

class Studerende extends Person {
    constructor(navn, id) {
        super(navn);
        this.id = id;
    }
    toString() { return super.toString() + ": " + this.id; }

    equals(s) {
        return s.constructor === this.constructor && s.navn === this.navn && s.id === this.id
    }
}
let person = new Person("Viggo");
let studerende = new Studerende("Ida", 123);
console.log(person instanceof Person); // => true
console.log(person instanceof Studerende); // => false
console.log(studerende instanceof Person); // => true
console.log(studerende instanceof Studerende); // => true

const a = new Person("Mikkel");
const b = new Person("Mikkel");
const c = { navn: "Mikkel" };

console.log(a.equals(b));
console.log(a.equals(c));

console.log("comparing a and b:", Person.compare(a, c))