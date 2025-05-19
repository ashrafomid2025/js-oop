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
    addToCart(){
        console.log("adding to cart....");
        console.log(this.product);
    }
    showSingleProduct(){
        const divChild = document.createElement("div");
        divChild.className = "div";
        divChild.innerHTML = `
        <img src ="${this.product.imgUrl}" class="img">
        <h1>${this.product.name}</h1>`;

       return divChild;
    }
}

class ProductList {
    products =  [
        new Product("Refrigrator","https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/3-door-french-door/05232024/RF32CG5900SR_01_Stainless_Steel_SCOM.jpg?$product-details-jpg$")
        ,
         new Product("Fan","https://izone.com.pk/wp-content/uploads/2022/04/IZONE-PEDISTAL-FAN-AB-24COPR-HVY-DUTY-Black-min-scaled.jpg")
        ,
         new Product("Window AC","https://livpure.com/cdn/shop/articles/family-spending-time-together-outside_23-2148659464_e0d1fe68-5a26-488e-a17e-c1486f0d3d89-131818.jpg?v=1726725415")
         ,
          new Product("Wifi Router","https://www.batna24.com/img2/1000/134667_1.webp")
          ,
          new Product("Water Cleaner","https://m.media-amazon.com/images/I/71VR+yJUxIL._AC_UF1000,1000_QL80_.jpg")
          ,
           new Product("Laptop Desktop","https://media.wired.com/photos/629a5c0d3131584d31836046/master/pass/Laptop-Second-Display-Gear-GettyImages-1367337688.jpg")
    
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
