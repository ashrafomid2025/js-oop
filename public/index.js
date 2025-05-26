// oop (object oriented programming) what is it?
// way to write your code 
// product: name, color, price, quatity, quality
// class => 

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
    showTotal(){
        const div = document.createElement("div");
        div.innerHTML = 
        `
        <h1>Total: ${0} </h1>
        <button>Order Now!</button>
        `
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
    
     const divchild = document.createElement("div");
     for(let item of this.products){
        const singleMobile = new ShowSingleMobile(item);
        const div = singleMobile.show();
        divchild.append(div);
     }
     return divchild;
    }
}

class Page{
    showEntirePage(){
       const divParent = document.getElementById("app");
       const addTOCart =  new AddToCart();
       const divTotal = addTOCart.showTotal();
       divParent.append(divTotal);
        const productList = new ProductList();
        const divProducts =  productList.showMobiles();
        console.log(productList.showMobiles());
        divParent.append(divProducts);
    }
}

const page = new Page();
page.showEntirePage();

