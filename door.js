function openDoor () {
    document.getElementById("door").src="images/OpenDoor.jpg";
    document.getElementById("header").innerHTML ="Good luck!";
}

function closeDoor (){
    document.getElementById("door").src="images/ClosedDoor.jpg";
    document.getElementById("header").innerHTML ="Open for Good luck!";
}