
function createMeal(time, calories){
    let meal = {
        type: time,
        calorieGoal: calories,
        dishes: []
    }
    return meal;
}

function addDish(meal, name){
    if (meal.calorieGoal >= name.calories){
        meal.dishes.push(name);
        meal.calorieGoal = meal.calorieGoal - name.calories;
    }

    return meal
}

function calculateCalories(meal) {
    let sum = 0
    for (let i=0; i < meal.dishes.length; i++){
      sum += meal.dishes[i].calories
    }
    return `${meal.type} has a total of ${sum} calories.`
}

module.exports = { 
    createMeal,
    addDish,
    calculateCalories
}