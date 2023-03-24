
function createHobbit(name, age){
  if(name && age <= 32){
  let hobbit = {
    name: name,
    age: age,
    isAdult: false,
    isOld: false,
    acquaintances: [],
  } 
  return hobbit
} 
if(name && age >= 33 && age < 101){
  let hobbit = {
    name: name,
    age: age,
    isAdult: true,
    isOld: false,
    acquaintances: [],
  } 
  return hobbit
} 
  if(name) {
  let hobbit = {
    name: name,
    age: 0,
    isAdult: false,
    isOld: false,
    acquaintances: [],
  } 
  return hobbit
} else {
  let hobbit = {
    name: 'unknown',
    age: 0,
    isAdult: false,
    isOld: false,
    acquaintances: [],
  } 
  return hobbit
}
}

function celebrateBirthday(hobbit){
  if(hobbit.age < 32){
    hobbit.age++;
    return hobbit
  }
  if(hobbit.age >= 32 && hobbit.age < 100){
    hobbit.age++;
    hobbit.isAdult = true;
    return hobbit
  }
  if(hobbit.age >= 100){
    hobbit.age++;
    hobbit.isOld = true;
    return hobbit
  }
}

function getRing(hobbit){
 if(hobbit.name === 'Frodo'){
  return `Here is the ring!`
 } else {
  return `You can't have it!`
 }
}

function meetPeople(hobbit, people){
  for (let i=0; i < people.length; i++){
    hobbit.acquaintances.push(people[i])
  }
  return hobbit
}

function findFriends(hobbit){
  let friends = [];
  for(let i=0; i < hobbit.acquaintances.length; i++){
    if(hobbit.acquaintances[i].relationship === 'friend'){ 
      friends.push(hobbit.acquaintances[i].name)
    } 
} 
return friends
}


module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}