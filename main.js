var canvas = document.getElementById("canva");
var ctx = canvas.getContext("2d");

var rove_img = "rover.png";
var rove_height = 100;
var rove_width = 100;
var rove_x = 10;
var rove_y = 10;

var imagesofmars = ["1.jpeg", "2.jpeg", "3.jpg", "4.jpg", "5.jpeg"];

var randomimg = Math.floor(Math.random() * 5);

console.log(randomimg);

var back_img = imagesofmars[randomimg];

function add() {
    background_img = new Image();
    background_img.onload = background_upload;
    background_img.src = back_img;

    rover_img = new Image();
    rover_img.onload = rover;
    rover_img.src = rove_img;
}

function background_upload() {
    ctx.drawImage(background_img, 0, 0, 800, 600);
}

function rover() {
    ctx.drawImage(rover_img, rove_x, rove_y, rove_width, rove_height);
}

window.addEventListener("keydown", keyisdown);

function keyisdown(e) {
    key = e.keyCode;
    if (key == "37") {
        left();
        console.log("left");
    }
    if (key == "38") {
        up();
        console.log("up");
    }
    if (key == "39") {
        right();
        console.log("right");
    }
    if (key == "40") {
        down();
        console.log("down");
    }
}

function up() {
    if (rove_y >= 0) {
        rove_y = rove_y - 10;
        console.log("When up arrow is pressed, x = " + rove_x + " | y = " + rove_y);
        background_upload();
        rover();
    }
}

function down() {
    if (rove_y <= 500) {
        rove_y = rove_y + 10;
        console.log("When down arrow is pressed, x = " + rove_x + " | y = " + rove_y);
        background_upload();
        rover();
    }
}

function left() {
    if (rove_x >= 0) {
        rove_x = rove_x - 10;
        console.log("When left arrow is pressed, x = " + rove_x + " | y = " + rove_y);
        background_upload();
        rover();
    }
}

function right() {
    if (rove_x <= 700) {
        rove_x = rove_x + 10;
        console.log("When right arrow is pressed, x = " + rove_x + " | y = " + rove_y);
        background_upload();
        rover();
    }
}