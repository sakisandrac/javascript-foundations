function createAirport(name, airlines, gates){
  let airport = {
    name: name,
    airlines: airlines,
    availableGates: gates,
  }
  return airport;
}
function welcomeGuests(airport){
  return `Welcome to ${airport.name}!`
}

function landPlanes(airport, gates){
  airport.availableGates = airport.availableGates - gates
    if(airport.availableGates > 0){
      return `Success! Current availability is ${airport.availableGates}.`
    } else { 
      let overflow = -airport.availableGates
      airport.availableGates = 0;
      return `Oh no! Not enough gates available. Current overflow is ${overflow}.`
    }
  }

// function checkAirlineLocations(airports, airline){
//   let locations = airports
//   .filter((airport) => {
//     if(airport.airlines.includes(airline)){
//     return airport
//     }
//   })
//   .map((airport)=>{
//     return airport.name
//   })
//   return locations
// }

  function checkAirlineLocations(airports, airlines){
    let locations = [];
    for (let i=0; i < airports.length; i++){
      for (let j=0; j < airports[i].airlines.length; j++){
        if (airports[i].airlines[j].includes(airlines)){
          locations.push(airports[i].name)
          
        }
      }
    }
    return locations
  }

module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes,
  checkAirlineLocations
};