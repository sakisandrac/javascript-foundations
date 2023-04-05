function issueCard(name, age) {
    let child;
    if (age < 12){
        child = true
    } else {
        child = false
    }

    let card = {
        name: name,
        age: age,
        numBooksCheckedOut: 0,
        isChild: child
    }

    return card
}

function searchByAuthor(collection, author) {
    let found = [];
    for (let i=0; i < collection.length; i++){
        if (collection[i].author === author){
            found.push(collection[i]);
        }
    } 
    if (found.length > 0) {
        return found
    } else {
        return `No book found for search criteria`
    }
}

module.exports = {
    issueCard,
    searchByAuthor
};