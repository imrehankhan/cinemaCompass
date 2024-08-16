let searchBox = document.querySelector('.search-container input')
let searchBtn = document.querySelector('.search-container button')

async function getMovieData(movieName) {
    const response = await fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=f913485a`)
   var data = await response.json()

   console.log(data);

   document.querySelector('.movie-title').innerHTML = data.Title
   document.querySelector('.imdb-rating').innerHTML = data.imdbRating
   document.querySelector('.rated').innerHTML = data.Rated
   document.querySelector('.year').innerHTML = data.Year
   document.querySelector('.runtime').innerHTML = data.Runtime
   document.querySelector('.plot').innerHTML = data.Plot
   document.querySelector('.actors').innerHTML = data.Actors
   document.querySelector('.genre').innerHTML = data.Genre
   document.querySelector('.info img').src = data.Poster

}

searchBtn.addEventListener('click', ()=> {
    getMovieData(searchBox.value)
})

getMovieData()