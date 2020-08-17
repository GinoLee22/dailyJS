/**
 * Random code
 */
let dog = {
  sound: 'woof',
  talk: function () {
    console.log(this.sound);
  }
}

dog.talk();   // 'woof'
let talkFunction = dog.talk;
talkFunction();   // undefine

let boundTalkFunction = dog.talk.bind(dog);
boundTalkFunction();    // 'woof'

/**
 * Weird behavior of bind.
 */
let talk = function () {
  console.log('talk', this.sound);
}
// This will never work because during bind `this` is  the global this
let boromir = {
  test: function () {
    console.log('what is this:', this);
  },
  sound: 'haha',
  talk: talk.bind(this),
}

boromir.test();   // 'boromir' object
boromir.talk();   // undefined. I don't know what's wrong

// Best usage of function `bind`. During initializing, this is an object already
class TestClass {
  talk = talk.bind(this);
  sound = 'testClass';
}

let testClass = new TestClass();
testClass.talk();