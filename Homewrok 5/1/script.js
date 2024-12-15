class animal {
  constructor(name, kind, speak) {
    this.name = name;
    this.kind = kind;
    this.speak = speak;
  }

  animalPrint() {
    return `${this.name} ${this.kind} says: '${this.speak}'`;
  }
}

const name = prompt("Enter the animal's name:");
const kind = prompt("Enter the kind of animal:");
const speak = prompt("What does the animal say?");

const enterAnimal = new animal(name, kind, speak);

console.log(enterAnimal.animalPrint());
