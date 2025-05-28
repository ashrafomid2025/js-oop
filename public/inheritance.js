// // oop
// // property => the things you have
// // methods=> the things you can do 
// // inheritance
// class Animal{
//     name;
//     constructor(name, age, gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     eat(){
//         console.log(this.name +" can eat food");
//     }
    
// }
// class Alligator extends Animal {
//     hunt(){
//        console.log(this.name +" can hunt other animals"); 
//     }
// }

// const newAlligator = new Alligator("Alligator",4,"male");
// newAlligator.eat();
// const myNewAlligator = new Alligator("My Pet",3,"Female");
// myNewAlligator.eat();
// myNewAlligator.hunt();
// prototype

// polymorphism 
// abstraction
// poly => many
// morph=> form 
// animal 
function Animal(age, gender){
    this.age = age;
    this.gender = gender;
    let name = "Cat";
    this.getDetails = function(){
        console.log(`Hi my pet name is ${name} and he/she is ${this.gender} and he/she is ${this.age} years old` );
    }
}
const newCat = new Animal(2,"Female");
newCat.gender = "male";
newCat.name = "Dog";
newCat.getDetails();








