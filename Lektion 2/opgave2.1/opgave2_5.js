let persons = [
        {
        navn: "Mikkel",
        "e-mail": "mik@mail.com",
        mobilnummer: "12345678"
        },
        {
        navn: "Fyn",
        "e-mail": "fyn@mail.com",
        mobilnummer: "8912367123"
        },
        {
        navn: "Flemming",
        "e-mail": "flen@mail.com",
        mobilnummer: "12345678"
        }
];

console.log(persons);

persons.unshift({nanv:"hans", "e-mail":"mail", movilnummer:123})

console.log(persons);

delete persons[0];

console.log(persons);