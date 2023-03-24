function createDragon(name, rider, temperment){
  let dragon = {
    name: name,
    rider: rider,
    temperment: temperment,
    timesEaten: 0,
    hungry: true,
  }
  return dragon
}

function greetRider(dragon){
  return `Hi, ${dragon.rider}!`
}

function eat(dragon) {
  if (dragon.timesEaten < 2) {
   dragon.timesEaten++
    return dragon
  } else {
    dragon.timesEaten++
    dragon.hungry = false
    return dragon
  }
 }

 function findFireBreathers(dragons){
  let fire = [];
  for (let i=0; i < dragons.length; i++){
    if(dragons[i].temperment === 'aggressive'){
      fire.push(dragons[i])
    } 
  } return fire
 }

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}