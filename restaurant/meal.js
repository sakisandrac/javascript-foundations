function createMeal(name, requests, table) {
    let meal = {
        name: name,
        specialRequests: requests,
        tableNumber: table,
        complete: false
    }
    return meal;
}

function getMade(meal) {
    meal.complete = true;
    return meal;
}

function announceMeal(meal) {
    if (meal.complete){
        return `Order up - ${meal.name} for table ${meal.tableNumber}!`;
    } else {
        return `This ${meal.name} is not completed yet`;
    };
}

function createOrder(orders) {
    let order = {
        tableNumber: orders.tableNumber,
        meals: orders.meals,
        completedMeals: []
    }
    return order;
}

function cookMeal(order, meal) {
   if (order.tableNumber === meal.tableNumber) {
    for (let i=0; i < order.meals.length; i++){
        if (order.meals[i].name === meal.name){
            order.completedMeals.push(meal.name)
        }
    }
   }
   return order;
}

function listOrders(order) {
    let meal = [];
    for (let i=0; i < order.meals.length; i++){
        meal.push(order.meals[i].name)
    }
    return meal
}

module.exports = {
    createMeal,
    getMade,
    announceMeal,
    createOrder,
    cookMeal,
    listOrders
};

