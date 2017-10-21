const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]


function theBeatlesPlay(musicians1,instruments1) {

var array = []
  for (var i = 0; i < musicians1.length; i++) {
    array.push( musicians1[i] +"plays"+ $instruments1[i])
  }
  return array
}
