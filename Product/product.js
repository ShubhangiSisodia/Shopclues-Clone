let p = JSON.parse(localStorage.getItem("product"))

console.log(p)
let Prod = document.querySelector("#section1")
renderProduct()

function renderProduct(){
    Prod.innerHTML = 
    `
    <div id="productimg">
            <img src='${p.image}' alt="">
            <i class="fa-regular fa-heart"></i>
        </div>

        <div id="prodDesc">
            <h3>${p.name}</h3>
            <p>Venerate Product Id: 152689876</p>
            <p id="rating">2.6 &nbsp;&nbsp;<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                &nbsp;&nbsp;
                (69) | 2 Reviews
            </p>
            <div class="flexit">
                <h2 0id="price">₹${p.price}</h2>
                <p class="lighttext">MRP:$<del>₹1,999</del></p>
                <h3 class="colortext">87% off</h3>
            </div>
                <p>Inclusive of all taxes</p>
            <div><img src="./superDiscount.png" alt=""></div>
            <p class="totheleft">*All discounts can be availed in the cart page</p>
            <div id="Extras">
                <h4><img src="https://images.shopclues.com/images/ui/loyalty_diamond.png" alt=""> Extra CluesBucks+</h4>
                <p class="lighttext">only on VIP Club.</p>
                <p class="colortext">Join Now</p>
            </div>
            <div class="flexit">
                <ul>
                    <li>Warranty Type : No Warranty</li>
                    <li>Warranty Duration : No Warranty</li>
                </ul>
            </div>
            <h3 class="offers"><i class="fa-solid fa-tag"></i> 1 offers Available for you </h3>
            <div><img src="./offers.png" alt=""></div>
            <div id="type">
                <h3>Type 7</h3>
                <div class="flextit">
                    <button>Type 2</button>
                    <button>Type 4</button>
                    <button>Type 7</button>
                    <button>Type 9</button>
                    <button>Type 11</button>
                    <button>Type 13</button>
                </div>
            </div>
            <div id="cartbtns">
               <a href=""> <button> ADD TO CART</button></a>
               <a href=""> <button>BUY NOW </button></a>
            </div>
            <div id="pincode">
                <input type="search" placeholder="Enter pincode for delivery">
                <button>Check</button>
            </div>
            <div id="checkdel">
                <p><i class="fa-sharp fa-solid fa-xmark"></i> COD <b>Not Available</b></p>
                <p><i class="fa-solid fa-check"></i> Free Shipping</p>
                <p> <i class="fa-solid fa-check"></i>Delivered <b>2-5 Business Days</b></p>
            </div>
            <div id="policy">
                <p><i class="fa-solid fa-rotate-left"></i> No Returns & Replacement</p>
                <p><i class="fa-regular fa-credit-card"></i> Payment Options: (Credit Card , Debit Card , Net Banking , Wallets )</p>
            </div>
        </div> 

        <div id="solddetail">
            <p>SOLD BY :</p>
            <p><b>BEST_BUYAXZ</b></p>
            <p>Bangalore , Karnataka</p>
            <p class="colortext">Visit Seller Store ></p>
            <img src="./ratedMerch.png" alt="">
        </div>
    `
        
}


















let PUrl = "https://6399cde016b0fdad7749cc55.mockapi.io/products"
let Pimg = [
    "https://cdn.shopclues.com/images1/thumbnails/116880/320/320/153292170-116880835-1673879505.jpg",
    "https://cdn.shopclues.com/images1/thumbnails/116880/320/320/153292172-116880843-1673879513.jpg",
    "https://cdn.shopclues.com/images1/thumbnails/116880/320/320/153292171-116880838-1673879508.jpg",
    "https://cdn.shopclues.com/images1/thumbnails/116880/320/320/153292169-116880834-1673879504.jpg",
    "https://cdn.shopclues.com/images1/thumbnails/116880/320/320/153292168-116880828-1673879498.jpg"
]


fetchAndRenderProdCard()

function fetchAndRenderProdCard(){
    fetch(PUrl)
    .then((res)=>{return res.json()})
    .then((data)=>{
        console.log(data)

        renderPCards(data)
    })
}

function renderPCards(data){

    document.querySelector("#prodCards").innerHTML=""
    data.forEach(function(elem, i){
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = Pimg[i];
        let title = document.createElement("p");
        title.innerText = elem.name;
        let price = document.createElement("h3");
        price.innerText = "₹"+elem.price;

        div.append(image,title, price)
        document.querySelector("#prodCards").append(div)
    })
}




// 3rd div js

let Head1 = document.querySelector("#one");
let paragraph = document.querySelector("#para")
Head1.addEventListener("click",()=>{
   paragraph.innerHTML = `
   <p>
   Venerate Headphone Stand Headset Holder Earphone Stand with Aluminum Supporting Bar, the colour of the stand is black . Headphone stand is made of Aluminium, ABS & Flexible TPU|Flexible headrest made with elastic TPU rubber, can support a variety of sizes of headphones|Headphones are shown just for illustration and is not included with the package|Dimension : 10 x 10x 22 cm
   </p>
   `
})

let Head3 = document.querySelector("#three");
Head3.addEventListener("click",()=>{
    paragraph.innerHTML = `
    <p>
    <b> More Details</b> <br><br>
    Maximum Retail Price (inclusive of all taxes)	:   Rs.1999 <br><br>
    Common or Generic Name	:   Holder and Stand <br><br>
    Net Contents / Net Quantity	:   1 <br><br>
    Manufacturer's Name and Address	: BVPL & No 645, 12th cross, 5th main, MC Layout,Govindarajanagar,Bengaluru,560040 <br><br>
    Packer's Name and Address	:  BVPL & No 645, 12th cross, 5th main, MC Layout,Govindarajanagar,Bengaluru,560040 <br><br>
    Marketer's name and Address	:   BVPL & No 645, 12th cross, 5th main, MC Layout,Govindarajanagar,Bengaluru,560040 <br><br>
    Importer's Name and Address	:  BVPL & No 645, 12th cross, 5th main, MC Layout,Govindarajanagar,Bengaluru,560040 <br><br>
    Country of Origin / Manufacture / Assembly	:   China
    </p>
    `
 })