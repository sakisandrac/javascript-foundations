function createBarber(name, earnings =0 , cuts= []){
    let barber = {
        name: name,
        earnings: earnings,
        haircuts: cuts,
        knownCuts: cuts,
    }
    return barber;
}

function giveCompliment(cut){
   return `This ${cut.style} looks great!`
}

function cutHair(person, cut){
    person.haircuts.push(cut)
    person.earnings = person.earnings + cut.price
    return person
}

// function listStyles(person, style){
//     let styles = [];
//     for (i=0; i < person.knownCuts.length; i++){
//         if(person.knownCuts[i].hairLength === style)
//        styles.push(person.knownCuts[i].style);
//     }
//     return styles;
// } 

function listStyles(person, style){
    let cuts = person.knownCuts
    .filter((cut)=>{
        if(cut.hairLength === style)
        return cut
    })
    .map((cut)=>{
        return cut.style
    })
    return cuts
}

module.exports = {  
    createBarber,
    giveCompliment,
    cutHair,
    listStyles,
};

// mattCanDoMohawk = {
//     name: 'Matt',
//     earnings: 0,  
//     haircuts: [{ style: 'mohawk', hairLength: 'short', price: 11.00 }]
// }