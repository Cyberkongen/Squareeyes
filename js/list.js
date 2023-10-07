const apiUrl = "https://api.noroff.dev/api/v1/square-eyes";

const movieCardsContainer = document.getElementById("movie-cards");
const movieIds = movieCardsContainer.getElementsByClassName("card");

let productsInCart = [];


async function fetchList () {
    
    const respone = await fetch(apiUrl);
    const result = await respone.json();

    result.forEach((product, index) => {
      const card = movieIds[index];
      const image = card.querySelector(`img`);
      const movie = result[index];
      movie.inCart = 0;

      image.src = movie.image;

      image.addEventListener("click",() => {
        window.location.href = `onceupon.html?id=${movie.id}&title=${movie.title}&released=${movie.released}&rating=${movie.rating}&price=${movie.price}&onsale=${movie.onSale}&favorite=${movie.favorite}&genre=${movie.genre}$description=${movie.description}&image=${movie.image}`;
    })
    

      card.querySelector(`h1`).textContent = movie.title;
      card.querySelector(`p`).textContent = `${movie.price},-`;
      card.querySelector(`button`).textContent = `Add to cart`;


      const addToCartButton = card.querySelector(".cart");

      addToCartButton.addEventListener("click", () => {
        if (!productIsInCart(product)) {
          product.inCart = 1;
          productsInCart.push(product);
          updateCartCount();
          console.log(productsInCart);

          localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
        }
      });
    })
}


function productIsInCart(product) {
  return productsInCart.some((item) => item.id === product.id);
}

const cartElement = document.querySelector(".shopCart");

function updateCartCount() {
  if (Array.isArray(productsInCart) && productsInCart.length > 0) {
    const numberOfItemsInCart = productsInCart.length;
    cartElement.textContent = `Cart (${numberOfItemsInCart})`;
  } else {
    cartElement.textContent = "0";
  }
}

const cartData = JSON.parse(localStorage.getItem("productsInCart"));
if (Array.isArray(cartData) && cartData.length > 0) {
  productsInCart = cartData;
  updateCartCount();
}



fetchList();


