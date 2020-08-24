/**
 * class is just a thin layer around function. 
 * So no private fields etc. Convension is `_field`
 */
class Mammal {
  constructor(sound) {
    this.sound = sound;
  }

  talk() {
    return this.sound;
  }
}

class Dog extends Mammal {
  constructor() {
    super('wolve');
  }
}

let fluffykins = new Dog();
let x = fluffykins.talk();
