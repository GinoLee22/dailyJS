/**
 * Try in Chrome to understand more in browser console
 */

const cat = {
  makeSound: function () {
    console.log(this.sound);
  }
}

/**
 * Self object creation
 */

function createObject(proto) {
  const obj = {};
  Object.setPrototypeOf(obj, proto);
  return obj;
}

const myCat = Object.create(cat);
myCat.sound = 'meow';
myCat.makeSound();

const myCat2 = Object.create(cat);
myCat2.sound = 'meow2';
myCat.makeSound();

console.log('Is myCat a cat?', cat.isPrototypeOf(myCat));

