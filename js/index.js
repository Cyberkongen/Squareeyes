const url = "https://api.noroff.dev/api/v1/square-eyes";
const movieIds = [
  "The-Mandalorian",
  "Hobbs-Shaw",
  "Godzilla",
  "Sweetheart",
  "The-Lion-King",
  "The-Batman",
  "Once-upon-a-time-in-Hollywood",
  "The-Addams-Family",
  "Scream",
  "Avengers-Endgame",
  "Joker",
  "The-Irishman"
];

async function squareEyes() {
  let results;

  try {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (loadingSpinner) {
      loadingSpinner.style.display = 'block'; 
    }

    const response = await fetch(url);
    results = await response.json();

    for (let i = 0; i < movieIds.length; i++) {
      const movie = results[i];
      const element = document.getElementById(movieIds[i]);

      if (element) {
        element.src = movie.image;
      }
    }

    if (loadingSpinner) {
      loadingSpinner.style.display = 'none';
    }

    const imageDiv = document.querySelector(".image-row");
    const imageLink = imageDiv.querySelectorAll("a");

    imageLink.forEach(function (link, index) {
      link.addEventListener("click", function() {
        const movie = results[index];
        window.location.href = `onceupon.html?id=${movie.id}&title=${movie.title}&released=${movie.released}&rating=${movie.rating}&price=${movie.price}&onsale=${movie.onSale}&favorite=${movie.favorite}&genre=${movie.genre}&description=${movie.description}&image=${movie.image}`;
      });
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

squareEyes();
