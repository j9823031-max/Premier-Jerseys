// PREMIER SOCCER STORE ⚽
// Product Database


const products = [

{
name:"Real Madrid Jersey",
image:"images/clubs/real-madrid.jpg",
category:"club"
},

{
name:"Barcelona Jersey",
image:"images/clubs/barcelona.jpg",
category:"club"
},

{
name:"Manchester City Jersey",
image:"images/clubs/man-city.jpg",
category:"club"
},

{
name:"Manchester United Jersey",
image:"images/clubs/man-united.jpg",
category:"club"
},

{
name:"Liverpool Jersey",
image:"images/clubs/liverpool.jpg",
category:"club"
},

{
name:"Arsenal Jersey",
image:"images/clubs/arsenal.jpg",
category:"club"
},

{
name:"Chelsea Jersey",
image:"images/clubs/chelsea.jpg",
category:"club"
},

{
name:"Bayern Munich Jersey",
image:"images/clubs/bayern.jpg",
category:"club"
},

{
name:"Borussia Dortmund Jersey",
image:"images/clubs/dortmund.jpg",
category:"club"
},

{
name:"PSG Jersey",
image:"images/clubs/psg.jpg",
category:"club"
},

{
name:"Juventus Jersey",
image:"images/clubs/juventus.jpg",
category:"club"
},

{
name:"AC Milan Jersey",
image:"images/clubs/ac-milan.jpg",
category:"club"
},

{
name:"Inter Milan Jersey",
image:"images/clubs/inter-milan.jpg",
category:"club"
},

{
name:"Napoli Jersey",
image:"images/clubs/napoli.jpg",
category:"club"
},

{
name:"Atletico Madrid Jersey",
image:"images/clubs/atletico-madrid.jpg",
category:"club"
},



// RETRO JERSEYS 🕰️


{
name:"Manchester United 1999 Retro Jersey",
image:"images/retro/man-united-1999.jpg",
category:"retro"
},

{
name:"Brazil 2002 Retro Jersey",
image:"images/retro/brazil-2002.jpg",
category:"retro"
},

{
name:"Argentina 1986 Retro Jersey",
image:"images/retro/argentina-1986.jpg",
category:"retro"
},

{
name:"France 1998 Retro Jersey",
image:"images/retro/france-1998.jpg",
category:"retro"
},

{
name:"Italy 2006 Retro Jersey",
image:"images/retro/italy-2006.jpg",
category:"retro"
},

{
name:"AC Milan 2007 Retro Jersey",
image:"images/retro/ac-milan-2007.jpg",
category:"retro"
},

{
name:"Barcelona 2009 Retro Jersey",
image:"images/retro/barcelona-2009.jpg",
category:"retro"
},

{
name:"Real Madrid 2002 Retro Jersey",
image:"images/retro/real-madrid-2002.jpg",
category:"retro"
}

];



// DISPLAY PRODUCTS


let shop = document.querySelector(".products");


products.forEach(product => {


shop.innerHTML += `

<div class="card">


<img src="${product.image}" alt="${product.name}">


<h3>${product.name}</h3>



<select>
<option>Home Jersey</option>
<option>Away Jersey</option>
<option>Third Jersey</option>
<option>Retro Jersey</option>
</select>



<select>
<option>Small</option>
<option>Medium</option>
<option>Large</option>
<option>XL</option>
<option>XXL</option>
</select>



<input placeholder="Player Name">



<select>
<option>No Badge</option>
<option>Champions League Badge</option>
<option>League Badge</option>
</select>



<p>Jersey Only - $60</p>

<p>Name + Badge - $70</p>

<p>Retro Jersey - $75</p>



<button onclick="addToCart('${product.name}')">
Add To Cart 🛒
</button>


</div>

`;

});




// CART SYSTEM


let cart = [];


function addToCart(item){

cart.push(item);

updateCart();

}



function updateCart(){


let cartBox = document.getElementById("cartItems");


cartBox.innerHTML="";


cart.forEach((item,index)=>{


cartBox.innerHTML += `

<p>
${item}

<button onclick="removeFromCart(${index})">
❌
</button>

</p>

`;

});


}



function removeFromCart(index){

cart.splice(index,1);

updateCart();

}





// SEARCH SYSTEM


function searchProducts(){


let search =
document.getElementById("search")
.value
.toLowerCase();



let cards =
document.getElementsByClassName("card");



for(let i=0;i<cards.length;i++){


let name =
cards[i].innerText.toLowerCase();



if(name.includes(search)){

cards[i].style.display="block";

}

else{

cards[i].style.display="none";

}


}


}
