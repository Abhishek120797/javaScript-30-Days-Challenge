const searchInput = document.getElementById("searchMovie");
const movieContainer = document.querySelector(".container");
const apiKey = "";

// request OMDB API

searchInput.addEventListener("input", fetchData);

async function fetchData() {
  let movieResponse;
  let movies;
  try {
    movieResponse = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput.value}`
    );

    movies = await movieResponse?.json();
  } catch (error) {
    console.log(`Error : ${error}`);
  }

  displayMovies(movies["Search"]);
}

function displayMovies(movies) {
  let html = "";

  movies?.forEach((element) => {
    html += `
                <div class="movie">
                    <img src="${element.Poster}" alt="">
                    <h3>${element.Title}</h3>
                    <p>${element.Year}</p>
                    <button><a href="detail.html?id=${element.imdbID}" target="_blank">view more</a></button>
                </div>
                `;
  });

  movieContainer.innerHTML = html;
}
