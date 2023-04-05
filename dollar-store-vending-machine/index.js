function createItemStock(name = 'unknown', quantity = 0, price = 1.00) {
    let stock = {
        name: name,
        quantity: quantity,
        price: price
    }
    return stock
}
    

function makePurchase(item, money) {
    if (item.price > money){
        return `Sorry, you need at least $${item.price} to make that purchase`
    } if (item.quantity === 0){
        return `Sorry, there are none left`
    } else {
        return `Here are your ${item.name}`
    }
}

function collectChange(change) {
    let sum = 0
  for (let i = 0; i < change.length; i++){
    sum = sum + change[i]
  } 

  return sum
}


module.exports = {
    createItemStock,
    makePurchase,
    collectChange

}
