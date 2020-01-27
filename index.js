const utilities = require("./utilities")

// In the promise resolution of getDogBreeds,
// send those results into the getDogNames function,
// then output the result of getDogNames in another .then
function getDogNames(dogBreeds) {
  return dogBreeds.map(dogBreed => dogBreed.name)
}

utilities.getDogBreeds().then(console.log)
