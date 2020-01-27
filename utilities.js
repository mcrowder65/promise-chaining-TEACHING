function sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

function getDogBreeds() {
  return sleep(0).then(() => {
    return [
      {
        id: "2f349b0c",
        name: "Golden Retriever"
      },
      {
        id: "ea382216",
        name: "Corgi"
      },
      {
        id: "6f0e0d6e",
        name: "Yellow Lab"
      },
      {
        id: "e6450423",
        name: "Pit Bull"
      },
      {
        id: "2641706a",
        name: "German Shepherd"
      }
    ]
  })
}

module.exports = {
  getDogBreeds
}
