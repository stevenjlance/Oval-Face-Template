//Everyone in your break out room will be working on this OVAL face shape. 

//Feel free to style the face template and add to it, but don't change or move the base face oval - you'll see why tomorrow.

//Pick a different emotion/mood/character for everyone in your group to create and then fork this project and get started. :)

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  text(mouseX + ", " + mouseY, 20,20)

  //base face shape
  ellipse(200,200,200,350)

}