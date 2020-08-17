function talk() {
  console.log(this.sound);
}

let animal = {
  talk,
}
let dog = {
  sound: 'woof!',
}
let prairieDog = {
  howl: function () {
    console.log(this.sound.toUpperCase());
  },
}
Object.setPrototypeOf(dog, animal);
// prototype is about 'delegate'
animal.talk = function() {
  console.log('I am a little teapot' + this.sound);
}
dog.talk();
Object.setPrototypeOf(prairieDog, dog);
prairieDog.howl();