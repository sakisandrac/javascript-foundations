function createElevator(building, floors, currFloor, passengers){
    let elevator = {
        building: building,
        floors: floors,
        currentFloor: currFloor,
        passengers: passengers
    }
    return elevator;
}

function changeFloors(elevator, floor){
    if (floor === elevator.currentFloor){
        return `You're already on floor ${floor}!`;
    } else if (elevator.floors < floor) {
        return `Floor ${floor} does not exist!`;
    } else {
        return `Taking you to floor ${floor}!`;
    }
}

function dropOffPassenger(elevator, passenger){
        let index = elevator.passengers.indexOf(passenger)
        elevator.passengers.splice(index, 1)
        return elevator.passengers
}

module.exports = { 
    createElevator,
    changeFloors,
    dropOffPassenger 
};
