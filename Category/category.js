let fetchedData=[];
fetch("./product.json")
.then((responseObject) =>{
    return responseObject.json();
})
.then((acctualData) =>{
    fetchedData = acctualData;
    displayProducts(fetchedData);

})
.catch((error) =>{
    console.log(error);
})

function displayProducts(data){
    document.querySelector("#product-container").innerHTML=null;
    data.forEach((element) => {
        let card=document.createElement("div");
        let image=document.createElement("img");
        image.setAttribute("src",element.image);
        let price=document.createElement("h2");
        price.innerText=element.price;
        let name=document.createElement("h3");
        name.innerText=element.name;
        name.style.color="grey";
        let rating=document.createElement("h3");
        rating.innerText=element.rating;
        rating.style.color="orange";
        // let more= document.createElement("div");
        // let location=document.createElement("p");
        // location.innerText=element.location;
        // location.style.color="grey";
        // let day=document.createElement("p");
        // day.innerText=element.uploaded;
        // day.style.color="grey";
        // more.append(location,day);
        card.append(image,name,price,rating);
        document.querySelector("#product-container").append(card);

        // card.addEventListener("click",()=>{
        //     localStorage.setItem("product",JSON.stringify(element));
        //     window.location.href="./product.html";
        // })
    })
}