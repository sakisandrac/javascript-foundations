function createFavoriteFood(dish) {
    let food = {
        name: dish.dish,
        ingredients: dish.ingredients,
        isSpicy: dish.isSpicy,
        timesOrdered: 0
    }

    return food
}

function createShoppingList(foods) {
 let ingredients = [];
    for (let i=0; i < foods.length; i++){
        for (let j=0; j < foods[i].ingredients.length; j++){
            ingredients.push(foods[i].ingredients[j])
        }
    }
    return ingredients
}

function commentOnSpiciness(food) {
 if(food.isSpicy){
    return `Wow, this ${food.name} is so spicy!`
 } else {
    return `Phew, this ${food.name} is not very spicy.`
 }
}

function orderFood(dish) {
    let counter = dish.timesOrdered
    counter ++
    dish.timesOrdered = counter
    return dish
}

module.exports = {
    createFavoriteFood,
    commentOnSpiciness,
    createShoppingList,
    orderFood
};