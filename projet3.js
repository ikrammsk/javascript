

var rover = {
    direction: "N",
    x: 0,
    y: 0
}


function turnLeft(rover) {
    if (rover.direction == "N") {

        rover.direction = "W";
    }
    else if (rover.direction == "W") {

        rover.direction = "S";
    }
    else if (rover.direction == "S") {

        rover.direction = "E";
    }
    else {
        rover.direction = "N";

    }

}

turnLeft(rover);


function turnRight(rover) {

    if (rover.direction == "N") {

        rover.direction = "E";
    }
    else if (rover.direction == "W") {

        rover.direction = "N";
    }
    else if (rover.direction == "S") {

        rover.direction = "W";
    }
    else {
        rover.direction = "S";

    }

}
// turnRight(rover);


var grid = [
    [rover.direction, " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

console.table(grid);


function moveForward(rover) {
    if (rover.direction == "N") {
        rover.y--;

    } else if (rover.direction == "E") {
        rover.x++;

    } else if (rover.direction == "S") {
        rover.y++;

    } else {
        rover.x--;
    }
}


moveForward(rover);

function pilotRover(str){

}
