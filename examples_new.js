function Person(saying) {
  this.saying = saying;
}

Person.prototype.talk = function () {
  console.log('I say:', this.saying);
}

function selfNew(constructor) {
  /**
   * new contructor doing following things in sequence
   * 1. create a new object
   * 2. set the prototype
   * 3. execute constructor with `this`
   * 4. return the created object
   */
  var obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  var argsArray = Array.prototype.slice.apply(arguments);
  return constructor.apply(obj, argsArray.slice(1)) || obj;
}

var person = selfNew(Person, 'self new constructor');
person.talk();