class Animal {
  constructor(name, type, age, size, isEaten = false) {
    this._name = name;
    this._type = type;
    this._age = age;
    this._size = size;
    this._isEaten = isEaten;
  }

  eat(input) {
    if (input instanceof Animal) {
      if (this._type === `herbivore`) {
        console.log(
          `${this._name} is a herbivore and does not eat other animals. `
        );
      } else if (input._size < this._size / 2) {
        input._isEaten = true;
        console.log(`${this._name} ate ${input._name}.`);
      } else if (input._size >= this._size * 2) {
        console.log(
          `"The animal ${this._name} tried to eat ${input._name}, but it was too big."`
        );
      } else {
        console.log(`${this._name} is eating ${input._name}.`);
      }
    }
  }
}

const lion = new Animal(`Lion`, "carnivore", 6, 110);
const tiger = new Animal(`Tiger`, "carnivore", 5, 100);
const rabbit = new Animal("Rabbit", "herbivore", 2, 10);
const deer = new Animal("Deer", "herbivore", 4, 120);

lion.eat(rabbit);
rabbit.eat(lion);
deer.eat(lion);
lion.eat(deer);
lion.eat(tiger);
tiger.eat(lion);
