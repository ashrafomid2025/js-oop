// oop (object oriented programming) what is it?
// way to write your code 
// product: name, color, price, quatity, quality
// class => 



//class =>  instance of an object

class Mobile{
    tilte;
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

const productList = {
    products: [
        new Mobile("Iphone 13","../public/images/iphone13.jpeg","1300","New Model Of Apple Mobile")
       ,
       new Mobile("Iphone 13","../public/images/iphone13.jpeg","1300","New Model Of Apple Mobile")
       ,
       new Mobile("Iphone 13","../public/images/iphone13.jpeg","1300","New Model Of Apple Mobile")
       ,
       new Mobile("Iphone 13","../public/images/iphone13.jpeg","1300","New Model Of Apple Mobile")
       ,
       new Mobile("Iphone 13","../public/images/iphone13.jpeg","1300","New Model Of Apple Mobile")
       ,
       new Mobile("Iphone 13","../public/images/iphone13.jpeg","1300","New Model Of Apple Mobile")
       ,
    ],
   showMobiles(){
      const divParent = document.getElementById("app");
    //   for of 
    this.products.forEach((mobile)=>{
       const divChild=  document.createElement("div");
       divChild.className = "div";
       divChild.innerHTML = `
       <h1>${mobile.title}</h1>
       <img src = "${mobile.imgUrl}" class ="img">
       <h2>${mobile.price}</h2>
       <p>${mobile.description} </p>
       `
       divParent.append(divChild);
    })
    }
}

productList.showMobiles();