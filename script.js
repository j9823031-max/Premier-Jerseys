// CART SYSTEM

let cart = [];



function addToCart(product) {

    cart.push(product);

    updateCart();

}



function updateCart() {

    let cartBox = document.getElementById("cartItems");


    if(cart.length === 0){

        cartBox.innerHTML = "Cart is empty";

        return;

    }


    cartBox.innerHTML = "";


    cart.forEach(function(item, index){

        cartBox.innerHTML +=
        `
        <p>
        ${item}
        <button onclick="removeFromCart(${index})">
        Remove
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

    let searchText = 
    document.getElementById("search").value.toLowerCase();


    let products = 
    document.getElementsByClassName("card");


    for(let i = 0; i < products.length; i++){


        let productName =
        products[i].innerText.toLowerCase();


        if(productName.includes(searchText)){

            products[i].style.display="block";

        }

        else{

            products[i].style.display="none";

        }


    }

}const jerseys = [
    {
        name: "Real Madrid Jersey",
        image: "images/clubs/real-madrid.jpg",
        price: "$60"
    },
    {
        name: "Barcelona Jersey",
        image: "images/clubs/barcelona.jpg",
        price: "$60"
    },
    {
        name: "Manchester City Jersey",
        image: "images/clubs/man-city.jpg",
        price: "$60"
    },
    {
        name: "Manchester United Jersey",
        image: "images/clubs/man-united.jpg",
        price: "$60"
    },
    {
        name: "Liverpool Jersey",
        image: "images/clubs/liverpool.jpg",
        price: "$60"
    },
    {
        name: "Arsenal Jersey",
        image: "images/clubs/arsenal.jpg",
        price: "$60"
    },
    {
        name: "Bayern Munich Jersey",
        image: "images/clubs/bayern.jpg",
        price: "$60"
    },
    {
        name: "PSG Jersey",
        image: "images/clubs/psg.jpg",
        price: "$60"
    },
    {
        name: "Juventus Jersey",
        image: "images/clubs/juventus.jpg",
        price: "$60"
    },
    {
        name: "AC Milan Jersey",
        image: "images/clubs/ac-milan.jpg",
        price: "$60"
    },
    {
        name: "Inter Milan Jersey",
        image: "images/clubs/inter-milan.jpg",
        price: "$60"
    }
];


let productArea = document.querySelector(".products");


jerseys.forEach(jersey => {

    productArea.innerHTML += `

    <div class="card">

    <img src="${jersey.image}">

    <h3>${jersey.name}</h3>

    <select>
    <option>Home Jersey</option>
    <option>Away Jersey</option>
    <option>Third Jersey</option>
    </select>

    <select>
    <option>Small</option>
    <option>Medium</option>
    <option>Large</option>
    <option>XL</option>
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


    <button onclick="addToCart('${jersey.name}')">
    Add To Cart 🛒
    </button>


    </div>

    `;

});
