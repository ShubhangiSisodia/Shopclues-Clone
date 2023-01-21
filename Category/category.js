
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
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/16812/280/1/92241956-16812201-1653733393.jpg",
        "price":100,
        "name": "Nice White Shirt",
        "rating":4,
        "reviews":20,
        "size":"L",
        "type":"Formal",
        "color":"white"
    }, 
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/33951/280/1/108871142-33951722-1665562328.jpg",
        "price":200,
        "name": "Casual Blue Shirt",
        "rating":4.5,
        "reviews":30,
        "size":"M",
        "type":"Casual",
        "color":"blue"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/89621/280/1/139668135-89621182-1653750873.jpg",
        "price":300,
        "name": "Black Shirt",
        "rating":3.7,
        "reviews":15,
        "size":"S",
        "type":"Formal",
        "color":"black"
    },
    {
        "image": "https://cdn.shopclues.com/images1/thumbnails/109500/280/1/150659652-109500878-1660933448.jpg",
        "price":500,
        "name": "Red Shirt",
        "rating":2.8,
        "reviews":17,
        "size":"XL",
        "type":"Casual",
        "color":"red"
    }
];



displayProducts(fetchedData);



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
        // let more= document.createElement("div");
        let rating=document.createElement("h3");
        rating.innerText=element.rating;
        rating.style.color="orange";
        // let star=document.createElement("img");
        // star.src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Orange_star.svg/1200px-Orange_star.svg.png";
        // let location=document.createElement("p");
        // location.innerText=element.location;
        // location.style.color="grey";
        // let day=document.createElement("p");
        // day.innerText=element.uploaded;
        // day.style.color="grey";
        // more.append(star,rating);
        card.append(image,name,price,rating);
        document.querySelector("#product-container").append(card);
        })
    })
}