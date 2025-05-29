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
// 
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

// inheritance 
// encapsulation
// 
// poly=> many
// morph => form

// abstraction

function Employees(name, job, salary){
    this.name = name;
    this.job = job;
    this.salary = salary;
    let bonus = 450;
    this.getDetails = function(){
        console.log(`I am ${this.name}, I am ${this.job} and I earn ${this.salary}`);
        calculateSalary();
    }
    let calculateSalary = function(){
        let finalSalary = salary + bonus;
        console.log("My net salary is "+ finalSalary);
    }
}

const ali = new Employees("Ali","Teacher",9000);
ali.getDetails();
// class Animal{
//     name;
//     age;
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     eats(){
//         console.log(this.name+" can eat meat");
//     }

// }
// class Sheep extends Animal{
//     eats(){
      
//         console.log(this.name +" can eat grain grass");
//     }
// }
// const newSheep = new Sheep("My new Sheep",4);
// newSheep.eats();
















// function Animal(age, gender){
//     this.age = age;
//     this.gender = gender;
//     let name = "Cat";
//     this.getDetails = function(){
//         console.log(`Hi my pet name is ${name} and he/she is ${this.gender} and he/she is ${this.age} years old` );
//     }
// }
// const newCat = new Animal(2,"Female");
// newCat.gender = "male";
// newCat.name = "Dog";
// newCat.getDetails();








