// oop (object oriented programming) what is it?
// way to write your code 
// product: name, color, price, quatity, quality
// class => 
// api => application program interface
// html,css, js
// weather ap

// duplication 
// error, 





// functional based : code 
// functional based programming
// oop : object oriented programming
//class =>  instance of an object

class Mobile{
    title;
    imgUrl;
    price;
    description;
    constructor(title, imagUrl, price, description){
        this.title = title;
        this.imgUrl = imagUrl;
        this.price = price;
        this.description = description;
    }
}

class AddToCart{
    items = [];
    addProduct(product){
        this.items.push(product);
        this.totalOutput = `<h1>Total: ${2}</h1>`
    }
    showTotal(){

        const div = document.createElement("div");
        div.className = "divTotal";
        div.innerHTML = 
        `
        <h1>Total: ${0} </h1>
        <button class ="btn">Order Now!</button>
        `
        this.totalOutput = div.querySelector("h1");

        return div;
    }
}

class ShowSingleMobile{
    constructor(product){
        this.product = product;
    }
    addToCart(){
        console.log("add to Cart");
        console.log(this.product);

        // new AddToCart();
    }
    show(){
       const divChild = document.createElement("div");
       divChild.className = "div";
       divChild.innerHTML = `
       <h1> ${this.product.title}</h1>
       <img src = "${this.product.imgUrl}" class ="img">
       <h2>\$ ${this.product.price}</h2>
       <p>${this.product.description} </p>
       <button class= "btn">Add to Cart</button>`;
       const btn = divChild.querySelector("button");
       btn.addEventListener("click",this.addToCart.bind(this));
       return divChild;
    }
}

// oop oraganized, clean
class ProductList{
    products= [
        new Mobile("Iphone 13","../public/images/iphone13.jpeg","1300","New Model Of Apple Mobile")
       ,
       new Mobile("Iphone 15","../public/images/iphone15.jpeg","1300","New Model Of Apple Mobile")
       ,
       new Mobile("Iphone 16","../public/images/iphone16.jpeg","1300","New Model Of Apple Mobile")
       ,
       new Mobile("Iphone 10","../public/images/iphone10.jpeg","1300","New Model Of Apple Mobile")
       ,
       new Mobile("Samsung A 10S","../public/images/samsung-a10.jpeg","1300","New Model Of Apple Mobile")
       ,
       new Mobile("Samsung A21","../public/images/samsung-a21.jpeg","1300","New Model Of Apple Mobile")
       ,
    ];
    constructor(){

    }
   showMobiles(){
   const divChild = document.createElement("div");
   divChild.classList.add("divGeneral");
   for(let mobile of this.products){
    const singleMobile = new ShowSingleMobile(mobile);
    const div = singleMobile.show();

    divChild.append(div);
   }
   return divChild;
    }
}

class Page{
    
    showEntirePage(){
       const divParent = document.getElementById("app");
        const addTOCart =  new AddToCart();
       const divTotal = addTOCart.showTotal();
       divParent.append(divTotal);
       const proList = new ProductList();
       const divProducts =  proList.showMobiles();
       divParent.append(divProducts);
    }
}


class App{
    static init(){
        const shop = new Page();
        shop.showEntirePage();
    }
}
App.init();


