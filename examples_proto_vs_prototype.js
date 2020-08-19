/**
 * This piece of code is all about difference between 'prototype' and '__proto__'
 * 'prototype': attribute only in a function declaration. 
 * After setting, all instance of new funcContructor will have '__proto__' to be set
 *
 * Try in chrome to see the result
 */
function Dog() { };
Dog.prototype.breed = 'corgi';
let myDog = new Dog();

console.log('interesting factor', myDog.__proto__ === Dog.prototype);