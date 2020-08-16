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