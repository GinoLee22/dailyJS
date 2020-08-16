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
 * Weird behavior of bind
 */
let talk = function () {
  console.log(this.sound);
}
let boromir = {
  talk: talk.bind(this),
  sound: 'haha',
  test: function() {
    console.log('what is this:', this);
  }
}
boromir.talk();   // undefined. I don't know what's wrong
boromir.test();   // 'boromir' object

console.log('function talk', boromir.talk);