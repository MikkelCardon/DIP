import { Person, Gruppe } from "./PersonOgGruppe.js";

const p1 = new Person("Mikkel");
const p2 = new Person("Flemming");

const g1 = new Gruppe("Studiegruppe");
const g2 = new Gruppe("Gaming gruppe");

// Tilføj personer til grupper
g1.addPerson(p1);
g1.addPerson(p2);
g2.addPerson(p1);

// Tjek dobbeltrettet association
console.log(p1.toString());
console.log(g1.toString());
console.log(g2.toString());

// Fjern en person
g1.removePerson(p1);
console.log(p1.toString());
console.log(g1.toString());
