const apiUrl = "https://api.noroff.dev/api/v1/square-eyes";

const movieCardsContainer = document.getElementById("movie-cards");
const movieIds = movieCardsContainer.getElementsByClassName("card");


async function fetchList () {
    
    const respone = await fetch(apiUrl);
    const result = await respone.json();

    for (let i = 0; i < result.length; i++) {
      const card = movieIds[i];
      const image = card.querySelector(`img`);
      const movie = result[i];

      image.src = movie.image;

      card.addEventListener("click",() => {
        window.location.href = `onceupon.html?id=${movie.id}&title=${movie.title}&released=${movie.released}&rating=${movie.rating}&price=${movie.price}&onsale=${movie.onSale}&favorite=${movie.favorite}&genre=${movie.genre}$description=${movie.description}&image=${movie.image}`;
    })


      card.querySelector(`h1`).textContent = movie.title;
      card.querySelector(`p`).textContent = `${movie.price},-`;
      card.querySelector(`button`).textContent = `Add to cart`;
      

    }
}

fetchList();