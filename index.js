const utilities = require("./utilities")

function getDogNames(dogBreeds) {
  return dogBreeds.map(dogBreed => dogBreed.name)
}

utilities
  .getDogBreeds()
  .then(getDogNames)
  .then(value => {
    console.log(value)
    return "Thinkster rules!"
  })
  .then(value => {
    console.log(value)
  })
