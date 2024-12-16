{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
       
            if(elevator.getPressedFloors().length > 0){
                elevator.goToFloor(elevator.getPressedFloors()[0]); 
            }

        });

    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
