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
    try {
      const loadingSpinner = document.getElementById('loading-spinner');
      if (loadingSpinner) {
        loadingSpinner.style.display = 'block'; 
      }
  
      setTimeout(async () => {
        const response = await fetch(url);
        const results = await response.json();
  
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
      }, 1500); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  squareEyes();
  


