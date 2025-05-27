// property => the things you have name, age, height, gender
// method=> the things you can do walk(), run(), sleep(), eat()
// js => prototype

// class Animal {
//     name;
//     age;
//     wiedth;
//     constructor(name, age, wiedth){
//         this.name =name;
//         this.age = age;
//         this.wiedth = wiedth;
//     }

//     eat(){
//         console.log(this.name + " can eat");
//     }
// }
// remove the duplication 
// parent, super
// derived, child
// class Cat extends Animal{

// }
// const newCat =  new Cat("My baby cat",2, "4Kg");
// newCat.eat();









// encapsulation
class Person{
    age;
    admin = false;
    constructor(){
        let name,age;
    }
    setAge(age){
        
        this.age = age; 
    }
    getAge(){
        console.log("you are "+this. age+ " years old");
    }
    // setter 
    setName(name){
        if(name.length>2){
            this.name = name
        }
        else{
            this.name = "Mohammad Hussain";
        }
        
    }
    getName(){
        if(this.admin){
        console.log(this.name);
        }
        else{
            console.log("شما اجازه دانستن نام شخص را ندارید")
        }
    }
}










