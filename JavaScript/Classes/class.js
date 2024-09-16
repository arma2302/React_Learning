// syntax
//
class classname {
  //members
  greet() {
    console.log("Hello", this.a, this.b);
  }

  addition(a, b) {
    return a + b;
  }

  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

// by creating the object we can acesses the properties of class

let classObj = new classname("Arma", "hiii");
let classObj2 = new classname("Addv", "applocum");
classObj.greet();
classObj2.greet();

// example2

class FirstClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let firstClassObj = new FirstClass("Arma", 22);
console.log(firstClassObj.name, firstClassObj.age);
