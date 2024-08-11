const movieDetailsContainer = document.getElementById("movie-details");

const apiKey = "";

async function fetchMovieDetails(imdbID) {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`
    );
    const movie = await response.json();
    displayMovieDetails(movie);
  } catch (error) {
    console.log(`Error : ${error}`);
  }
}

function displayMovieDetails(movie) {
  const html = `
    <div class="movie-details">
      <h2>${movie.Title}</h2>
      <img src="${movie.Poster}" alt="${movie.Title}">
      <p><strong>Year:</strong> ${movie.Year}</p>
      <p><strong>Genre:</strong> ${movie.Genre}</p>
      <p><strong>Director:</strong> ${movie.Director}</p>
      <p><strong>Actors:</strong> ${movie.Actors}</p>
      <p><strong>Plot:</strong> ${movie.Plot}</p>
      <p><strong>IMDB Rating:</strong> ${movie.imdbRating}</p>
    </div>
  `;
  movieDetailsContainer.innerHTML = html;
}

const urlParams = new URLSearchParams(window.location.search);
const imdbID = urlParams.get("id");

if (imdbID) {
  fetchMovieDetails(imdbID);
}
