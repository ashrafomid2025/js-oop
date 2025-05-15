class Product{
    name= "Defaul Name";
    imgUrl ="";
    constructor(name,imgUrl){
        this.name = name;
        this.imgUrl = imgUrl
    }
}



const productList = {
    products: [
        new Product("Bike","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRyANT0TS-3KAXPlkdbDMDX1WncFqVdSrjrvaXIUE31vusdjsef1N22MZVHBktlyNBDA&usqp=CAU")
        ,
        new Product("Race","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYG3VcZRb1ksgWwgeTtmZvgB1y1PGkX9XBqQaPHF3cLMhv7YTMu9Bn3y7jcvrMlVpFwGY&usqp=CAU")
        ,
       
],
render(){
    const div = document.getElementById("app");
    for(let pro of this.products){
        const divChild = document.createElement("div");
        divChild.className = "div";
        divChild.innerHTML = `
        <img src ="${pro.imgUrl}" class="img">
        <h1>${pro.name}</h1>
        `
        div.append(divChild);
    }
}
}
productList.render();