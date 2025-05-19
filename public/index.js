// oop (object oriented programming) what is it?
// way to write your code 
// product: name, color, price, quatity, quality
// class => 

class Product{
    name;
    price;
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

const produtList = {
    products: [
    new Product("Pen",100),
     new Product("Book",300),
      new Product("Notebook",10),
       new Product("Marker",20),
        new Product("Board",1000),
         
],
 showList(){
    // for of
   const div = document.getElementById("app")
    // for each
    for(let item of this.products){
       const h1 =  document.createElement("h1");
       h1.textContent = `The product is ${item.name} and it's price is \$ ${item.price}`;
        div.appendChild(h1);
    }
}

}
produtList.showList();



// human: walk(), eat(), sleep(), work(), runing(), name, lastName, age, gender
class Human{
    name;
    lastName; 
    age;
    gender;
    constructor(name, lastName, age, gender){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender
    }

    walk(){
        console.log("I am walking");
    }
    work(){
        console.log("I am working");
    }
    running(){
        console.log("I am running");
    }
}


const fawzia = new Human("Fawzia","Hussaini",19,"Female");
