export class Person {
    constructor(navn) {
        this.navn = navn;
        this.grupper = []
    }

    
    addGruppe(gruppe) {
        if (!this.grupper.includes(gruppe)) {
            this.grupper.push(gruppe);
            gruppe.addPerson(this); //dobbelt rettet
        }
    }

   
    removeGruppe(gruppe) {
        if (this.grupper.includes(gruppe)) {
            this.grupper.pop(gruppe);
            gruppe.removePerson(this); //dobbelt retter
        }
    }

    toString() {
        const gruppenavne = this.grupper.map(g => g.navn + ",");
        return `${this.navn} er medlem af: ${gruppenavne}`;
    }
}

export class Gruppe {
    constructor(navn) {
        this.navn = navn;
        this.medlemmer = new Set();
    }

    
    addPerson(person) {
        if (!this.medlemmer.has(person)) {
            this.medlemmer.add(person);
            person.addGruppe(this); //dobbelt retter
        }
    }

    
    removePerson(person) {
        if (this.medlemmer.has(person)) {
            this.medlemmer.delete(person);
            person.removeGruppe(this); //dobbelt retter
        }
    }

    toString() {
        const medlemnavne = [...this.medlemmer].map(p => p.navn).join(", ");
        return `Gruppe ${this.navn} har medlemmer: ${medlemnavne}`;
    }
}
