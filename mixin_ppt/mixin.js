// JavaScript doesn't support multiple inheritence. 
// But sometimes there is a need to add functionality of 2 classes to a single object. 
// Mixin is a way properties are added to objects without using inheritance.

// For example, let's say we have a Person class. And we want people to be able to say Hi. 
// We can create a sayHiMixin and use it to make People say hi −

// -----------------
// The simplest way to implement a mixin in JavaScript is to make an object with useful methods, 
// so that we can easily merge them into a prototype of any class.



// 1. the mixin sayHiMixin is used to add some “speech” for User:

// mixin
let sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  }
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!




// 2. User가 아래 예시처럼 다른 클래스를 상속받는 동시에, 믹스인에 구현된 추가 메서드도 사용가능

class User extends Person {
  // ...
}

Object.assign(User.prototype, sayHiMixin);





// 3. 믹스인 안에서 믹스인을 상속받는 것도 가능
// 아래 예시에서 sayHiMixin은 sayMixin을 상속받는다.

let sayMixin = {
  say(phrase) {
    console.log(phrase);
  }
};

let sayHiMixin = {
  __proto__: sayMixin, 

  sayHi() {
    // 부모 메서드 호출
    super.say(`Hello ${this.name}`); 
  },
  sayBye() {
    super.say(`Bye ${this.name}`);
  }
};

class User {
  constructor(name) {
    this.name = name;
  }
}

// 메서드 복사
Object.assign(User.prototype, sayHiMixin);

// 이제 User가 인사를 할 수 있다.
new User("Dude").sayHi(); // Hello Dude!