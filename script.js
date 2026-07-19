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

}
