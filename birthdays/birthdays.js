function createBirthday(name, month, day){
    let bday = {
        name: name,
        month: month,
        day: day,
    }
    return bday;
}

function celebrateBirthday(bday){
    return `Today is ${bday.month}/${bday.day}! Happy birthday, ${bday.name}!`
}

function countBirthdays(birthdays, month){
    let bdays = 0;
    for(let i=0; i < birthdays.length; i++){
        if(birthdays[i].month === month){
            bdays++;
        }
    } 
    return bdays
}

module.exports = { 
    createBirthday,
    celebrateBirthday,
    countBirthdays,
 };