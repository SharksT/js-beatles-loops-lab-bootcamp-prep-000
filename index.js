const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function theBeatlesPlay(musicians1,instruments1) {

var array = []
  for (var i = 0; i < musicians1.length; i++) {
    array.push( musicians1[i] +" plays "+ instruments1[i])
  }
  return array
}

function johnLennonFacts(array) {

var i
  while (i < array.length) {

    array[i] = array[i] + "!!!"

    i++
  }
return array
}
