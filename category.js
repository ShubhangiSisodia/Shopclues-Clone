
// fetch("./product.json")
// .then((responseObject) =>{
//     return responseObject.json();
// })
// .then((acctualData) =>{
//     fetchedData = acctualData;
//     displayProducts(fetchedData);

// })
// .catch((error) =>{
//     console.log(error);
// })
// async function loadProducts() {
//     try{
//         const response = await fetch('./product.json');
//         let fetchedData = await response.json();
//         displayProducts(fetchedData);
//     }catch(error){
//         console.log(error);
//     }
// }
// loadProducts();
// import fetchedData from './product.json' assert { type: 'JSON' };

// let fetchedData=require('./product.json');
// displayProducts(fetchedData);
let fetchedData=[
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/56557/280/1/112420283-56557499-1653567129.jpg",
        "price":90,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white",
        "location":"ABC",
        "seller":"XYZ"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":300,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":150,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/56557/320/320/112420146-56557496-1653737317.jpg",
        "price":80,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/56557/280/1/112420283-56557499-1653567129.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white",
        "location":"ABC",
        "seller":"XYZ"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/56557/320/320/112420146-56557496-1653737317.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/56557/280/1/112420283-56557499-1653567129.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white",
        "location":"ABC",
        "seller":"XYZ"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/56557/320/320/112420146-56557496-1653737317.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/56557/280/1/112420283-56557499-1653567129.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white",
        "location":"ABC",
        "seller":"XYZ"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/56557/320/320/112420146-56557496-1653737317.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/56557/280/1/112420283-56557499-1653567129.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white",
        "location":"ABC",
        "seller":"XYZ"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/56557/320/320/112420146-56557496-1653737317.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/56557/280/1/112420283-56557499-1653567129.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white",
        "location":"ABC",
        "seller":"XYZ"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/56557/320/320/112420146-56557496-1653737317.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/56557/280/1/112420283-56557499-1653567129.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white",
        "location":"ABC",
        "seller":"XYZ"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/56557/320/320/112420146-56557496-1653737317.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/56557/280/1/112420283-56557499-1653567129.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white",
        "location":"ABC",
        "seller":"XYZ"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/56557/320/320/112420146-56557496-1653737317.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/56557/280/1/112420283-56557499-1653567129.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white",
        "location":"ABC",
        "seller":"XYZ"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":450,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":100,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/56557/320/320/112420146-56557496-1653737317.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/56557/280/1/112420283-56557499-1653567129.jpg",
        "price":350,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white",
        "location":"ABC",
        "seller":"XYZ"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":400,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":250,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black",
        "location":"ABC",
        "seller":"XYZ"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/56557/320/320/112420146-56557496-1653737317.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red",
        "location":"ABC",
        "seller":"XYZ"
    }
];

document.querySelectorAll('.prices').forEach(x => {
    x.addEventListener('click', () => {
        let checkbox=x.value;
        let filtered = fetchedData.filter((element) =>{
            if(element.price<=checkbox && element.price>checkbox-100){
                return true;
            }else{
                return false;
            }
        })
        displayProducts(filtered);
    });
});

document.querySelectorAll('.colour').forEach(x => {
    x.addEventListener('click', () => {
        let checkbox=x.value;
        let filtered = fetchedData.filter((element) =>{
            if(element.color===checkbox){
                return true;
            }else{
                return false;
            }
        })
        displayProducts(filtered);
    });
});

document.querySelectorAll('.type').forEach(x => {
    x.addEventListener('click', () => {
        let checkbox=x.value;
        let filtered = fetchedData.filter((element) =>{
            if(element.type===checkbox){
                return true;
            }else{
                return false;
            }
        })
        displayProducts(filtered);
    });
});

document.querySelectorAll('.size').forEach(x => {
    x.addEventListener('click', () => {
        let checkbox=x.value;
        let filtered = fetchedData.filter((element) =>{
            if(element.size===checkbox){
                return true;
            }else{
                return false;
            }
        })
        displayProducts(filtered);
    });
});

document.querySelector("#resetsort").addEventListener("click",()=>{
    displayProducts(fetchedData);
})

function sortPrice(){
    let sortedProducts = fetchedData.sort(
        (p1, p2) => (p1.price > p2.price) ? 1 : (p1.price < p2.price) ? -1 : 0);
    displayProducts(sortedProducts);
}
function sortRating(){
    let sortedProducts = fetchedData.sort(
        (p1, p2) => (p1.rating < p2.rating) ? 1 : (p1.rating > p2.rating) ? -1 : 0);
    displayProducts(sortedProducts);
}

displayProducts(fetchedData);



function displayProducts(data){
    document.querySelector("#product-container").innerHTML=null;
    let count=0;
    data.forEach((element) => {

        let card=document.createElement("div");
        let image=document.createElement("img");
        image.setAttribute("src",element.image);
        let price=document.createElement("h2");
        price.innerText=`₹${element.price}`
        let name=document.createElement("h3");
        name.innerText=element.name;
        name.style.color="grey";
        // let more= document.createElement("div");
        let rating=document.createElement("h3");
        rating.innerText=`★${element.rating}`;
        rating.style.color="orange";
        // let star=document.createElement("img");
        // star.src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Orange_star.svg/1200px-Orange_star.svg.png";
        // let location=document.createElement("p");
        // location.innerText=element.location;
        // location.style.color="grey";
        let fs=document.createElement("p");
        fs.innerText="Free Shipping";
        fs.style.color="grey";
        // more.append(star,rating);
        card.append(image,name,price,rating,fs);
        document.querySelector("#product-container").append(card);
        card.addEventListener("mouseover",()=>{
            card.style.borderColor="blue";
            card.style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px";
            setTimeout(()=>{
                card.style.borderColor="";
                card.style.boxShadow="";
            },1000)
        },false)

        card.addEventListener("click",()=>{
            localStorage.setItem("product",JSON.stringify(element));
            window.location.href="./product.html";
        })
        count++;
    })
    document.querySelector("#total").innerText=count;
}