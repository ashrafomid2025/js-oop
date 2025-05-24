// oop (object oriented programming) what is it?
// way to write your code 
// product: name, color, price, quatity, quality
// class => 


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

class AddtoCart{
    constructor(){

    }
    showAddToCart(){
        const div = document.createElement("div");
        div.className = "divTotal";
        div.innerHTML = 
        `
        <span> Total: </span>
        <span>  $1400 </span>
        `
        return div;
    }
}

class ShowSingleMobile{
    constructor(product){
        this.product = product;
    }
    show(){
     const divChild=  document.createElement("div");
       divChild.className = "div";
       divChild.innerHTML = `
       <h1>${this.product.title}</h1>
       <img src = "${this.product.imgUrl}" class ="img">
       <h2>${this.product.price}</h2>
       <p>${this.product.description} </p>
       <button class= "btn">Add to Cart</button>`;
       const btn = divChild.querySelector("button");
       btn.addEventListener("click",()=>{
        console.log("Adding to cart....");
        console.log(this.product);
       })
       return divChild;
    }
}

// oop oraganized, clean
const productList = {
    products: [
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
    ],
   showMobiles(){
      const divParent = document.getElementById("app");
     const addtoCart =  new AddtoCart();
     const div = addtoCart.showAddToCart();
     divParent.append(div);
    this.products.forEach((mobile)=>{
       const singleMobile =  new ShowSingleMobile(mobile);
        const div = singleMobile.show();
       divParent.append(div);
    })
    }
}

productList.showMobiles();