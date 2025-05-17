class Product{
    name= "Defaul Name";
    imgUrl ="";
    constructor(name,imgUrl){
        this.name = name;
        this.imgUrl = imgUrl
    }
}

class SingleProduct {
    constructor(pro){
        this.product = pro;
    }
    showSingleProduct(){
        const divChild = document.createElement("div");
        divChild.className = "div";
        divChild.innerHTML = `
        <img src ="${this.product.imgUrl}" class="img">
        <h1>${this.product.name}</h1>
        `
       return divChild;
    }
}

class ProductList {
    products =  [
        new Product("Bike","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRyANT0TS-3KAXPlkdbDMDX1WncFqVdSrjrvaXIUE31vusdjsef1N22MZVHBktlyNBDA&usqp=CAU")
        ,
        new Product("Race","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYG3VcZRb1ksgWwgeTtmZvgB1y1PGkX9XBqQaPHF3cLMhv7YTMu9Bn3y7jcvrMlVpFwGY&usqp=CAU")
        ,
        new Product("Race","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYG3VcZRb1ksgWwgeTtmZvgB1y1PGkX9XBqQaPHF3cLMhv7YTMu9Bn3y7jcvrMlVpFwGY&usqp=CAU")
        , 
        new Product("Race","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYG3VcZRb1ksgWwgeTtmZvgB1y1PGkX9XBqQaPHF3cLMhv7YTMu9Bn3y7jcvrMlVpFwGY&usqp=CAU")
        , 
        new Product("Race","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYG3VcZRb1ksgWwgeTtmZvgB1y1PGkX9XBqQaPHF3cLMhv7YTMu9Bn3y7jcvrMlVpFwGY&usqp=CAU")
        , 
        new Product("Race","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYG3VcZRb1ksgWwgeTtmZvgB1y1PGkX9XBqQaPHF3cLMhv7YTMu9Bn3y7jcvrMlVpFwGY&usqp=CAU")
        , 
        new Product("Race","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYG3VcZRb1ksgWwgeTtmZvgB1y1PGkX9XBqQaPHF3cLMhv7YTMu9Bn3y7jcvrMlVpFwGY&usqp=CAU")
        , 
    ];

constructor(){}
render(){
    const div = document.getElementById("app");
    for(let pro of this.products){
        const singlePro = new SingleProduct(pro);
        const divChild = singlePro.showSingleProduct();
        div.append(divChild);
    }
}
}








const productList = new ProductList();
productList.render();



// class human
class Human{
    constructor(name,lastName, age, gender){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    thinking(){
        console.log("I am thinking....");
    }
    walking(){
        console.log("I am walking");
    }
    eating(){
        console.log("I am eating something.....");
    }
    talking(){
        console.log("I am talking");
    }
}

const Person1 = new Human("Ali","Ahmadi",34,"male");
Person1.lastName;
const person2 = new Human("Layla","Sharifi",23,"Female");
