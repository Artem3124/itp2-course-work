//global for the controls and input
var controls = null;
//store visualisations in a container
var vis = null;
//variable for the p5 sound object
var sound = null;
//variable for p5 fast fourier transform
var fourier;

function preload() {
    sound = loadSound("assets/stomper_reggae_bit.mp3");
    sound1 = loadSound("assets/High-Clover-COU024501.mp3");
    baseFont = loadFont("assets/Itim-Regular.ttf");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    //background(0);
    program = new Assemble([sound, sound1]);
}

function draw() {
    textFont(baseFont);
    background(43, 48, 55);
    stroke(94, 139, 172);
    program.run()
}

function mouseClicked() {
    this.program.mouseClicked();
}

function keyPressed() {
    this.program.buttonPressed();
}

function mouseDragged() { 
    this.program.mouseDragged();
}

//when the window has been resized. Resize canvas to fit
//if the visualisation needs to be resized call its onResize method
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    // create resize function in each Menu class that will
    // reculculate positions of the elements inside 
    this.program.resize(windowWidth, windowHeight);
}
