// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let allDirectors = moviesArray.map((eachMov)=>{
   return eachMov.director
  })
  return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let howMany = moviesArray.filter((eachMov)=>{
   
   if(eachMov.director === 'Steven Spielberg'){
    return eachMov.genre.includes('Drama')
   }
  })
  return howMany.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let sum = moviesArray.score.reduce((acc,eachMov)=>{
    return acc + eachMov.score
  },0)
  return sum / moviesArray.length
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let average = moviesArray.reduce((acc, eachMov)=>{
    if(eachMov.genre.includes('Drama') === 'Drama'){
      return  acc + eachMov.genre
    }
  },0)
   return average
  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let order = moviesArray.sort((elem1,elem2)=>{
    if (elem1.year > elem2.year) {
      return 1
      } else if (elem1.year < elem2.year) {
        return -1
      } else {
        return 0
      }
  })
  return order
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
let moviesCopie = JSON.parse( JSON.stringify(moviesArray) )
let resultado =  moviesArray.sort((elem1, elem2) => {
  return elem1.title.localeCompare(elem2.title)
})
return resultado
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
