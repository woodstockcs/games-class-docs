{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
       
            if(elevator.getPressedFloors().length > 0){
                elevator.goToFloor(elevator.getPressedFloors()[0]); 
            }

        });

        
        for (let floor of floors) {
            floor.on("up_button_pressed", function() {
                elevator.goToFloor(floor.floorNum())
            })
            floor.on("down_button_pressed", function() {
                elevator.goToFloor(floor.floorNum())
            }) 
        }
        
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
