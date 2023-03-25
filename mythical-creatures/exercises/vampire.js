function createVampire(name, pet = 'bat'){
  let vampire = {
    name: name,
    pet: pet,
    thirsty: true,
    ouncesDrank: 0,
  }
  return vampire;
}

function drink(vampire){
  if(vampire.ouncesDrank < 40){
    vampire.ouncesDrank += 10;
    return vampire;
  } 
  if(vampire.ouncesDrank === 40){
    vampire.ouncesDrank += 10;
    vampire.thirsty = false;
    return vampire;
  }
  return vampire
}

function encounterDeliciousVictim(vampire){
  if(vampire.thirsty){
    return 'I WANT TO SUCK YOUR BLOOD!'
  } else {
    return 'No thanks, I am too full.'
  }
}

function inquirePlace(locations, location){
  for(let i=0; i < locations.length; i++){
    if(locations[i] === location){
      return `Yes, I have spent some time in ${location}.`
    }
  }
  return `No, I have never been to ${location}.`
}

function findBatLovers(vampires){
  let lovers = [];
 for(let i=0; i < vampires.length; i++){
  if(vampires[i].pet === 'bat')
    lovers.push(vampires[i].name)
 }
 return lovers;
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace,
}