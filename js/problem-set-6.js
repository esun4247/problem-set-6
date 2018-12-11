/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */


function sayHello() {
  //Print Text
  let ctx = document.getElementById("canvas1").getContext("2d");
  ctx.clearRect(0, 0, 1024, 128);
  ctx.font = "48px sans-serif";
  ctx.strokeText("Hello, World!", 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  //Define variables
  let ctx = document.getElementById("canvas2").getContext("2d");
  let width = prompt("Enter a Width value");
  let height = prompt("Enter a Height value");
  let xcor = prompt("Enter a x coordinate");
  let ycor = prompt("Enter a y coordinate");

  //Check if values are valid and print rectangle
  let inval = 0;
  if(width > 1024 || height > 512 || xcor > 1000 || ycor > 500){
    alert("The rectangle will not fit on the canvas");
    ctx.clearRect(0, 0, 1024, 512);
  }else if(width < 1){
    alert("The width value is too low");
    ctx.clearRect(0, 0, 1024, 512);
  }else if(height < 1){
    alert("The height value is too low");
    ctx.clearRect(0, 0, 1024, 512);
  }else if(xcor < 5){
    alert("The x coordinate is too small");
    ctx.clearRect(0, 0, 1024, 512);
  }else if(ycor < 5){
    alert("The y coordinate is too small");
    ctx.clearRect(0, 0, 1024, 512);
  }else if(isNaN(width) || isNaN(height) || isNaN(xcor) || isNaN(ycor)){
    alert("One of your values is not a number");
    ctx.clearRect(0, 0, 1024, 512);
  }else{
    ctx.clearRect(0, 0, 1024, 512);
    ctx.strokeRect(xcor, ycor, width, height);
  }
}
/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  //Define variables
  let ctx = document.getElementById("canvas3").getContext("2d");
  let color = prompt("Enter a Color:")
  let inval = 0;

  //Determine Color and Print Rectangle
  if(color == "black" || color =="blue" || color == "green" || color == "orange" || color == "purple" || color == "red" || color == "yellow"){
    ctx.fillStyle = color;
    ctx.clearRect(0, 0, 1024, 128);
    ctx.fillRect(10, 10, 100, 50);
  }else{
    alert(color + " is not a supported color");
    ctx.clearRect(0, 0, 1024, 128);
  }
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  //Define variables
  let ctx = document.getElementById("canvas4").getContext("2d");
  let side1 = Number(prompt("Side 1:"));
  let side2 = Number(prompt("Side 2:"));
  let side3 = Number(prompt("Side 3:"));



  //Check validity of sides
  if(isNaN(side1) || isNaN(side2) || isNaN(side3)){
    alert("One of your inputs is not a number");
    ctx.clearRect(0, 0, 1024, 512);
  }else if(Math.pow(side1, 2) + Math.pow(side2, 2) !== Math.pow(side3, 2)){
    alert("Not a valid right triangle");
    ctx.clearRect(0, 0, 1024, 512);
  }else if(side1 > 512 || side2 > 1024){
    alert("One of your sides is too long")
    ctx.clearRect(0, 0, 1024, 512);
  }else{
    //Draw the triangle
    ctx.clearRect(0, 0, 1024, 512);
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(10, (10+side1));
    ctx.lineTo((10+side2), (10+side1));
    ctx.closePath();
    ctx.stroke();
  }
}


/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  //Define variables
  let ctx = document.getElementById("canvas5").getContext("2d");
  let radius = Number(prompt("Enter a valid radius:"));

  //Check validity and print face
  if(isNaN(radius)){
    alert("The radius is not a number");
    ctx.clearRect(0, 0, 1024, 512);
  }else if(radius > 200){
    alert("The radius is too large");
    ctx.clearRect(0, 0, 1024, 512);
  }else{
    ctx.clearRect(0, 0, 1024, 512);
    ctx.beginPath();
    ctx.arc(radius, radius, radius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.beginPath()
    ctx.arc(radius*1.4, radius*0.5, radius*0.1, 0, 2*Math.PI);
    ctx.stroke();
    ctx.beginPath()
    ctx.arc(radius*0.6, radius*0.5, radius*0.1, 0, 2*Math.PI);
    ctx.stroke();
    ctx.beginPath()
    ctx.arc(radius, radius, radius*0.7, 0, Math.PI);
    ctx.stroke();
  }
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  //Define variables
  let ctx = document.getElementById("canvas6").getContext("2d");
  let ourad = Number(prompt("Outer Radius:"));
  let inrad = Number(prompt("Inner Radius:"));
  let pi = Math.PI;

  //Check validity and print star
  if(isNaN(ourad) || isNaN(inrad)){
    alert("One of the radii is not a number");
    ctx.clearRect(0, 0, 1024, 512);
  }else if(ourad <= inrad){
    alert("The outer radius must be larger than the inner radius.")
    ctx.clearRect(0, 0, 1024, 512);
  }else{
    ctx.clearRect(0, 0, 1024, 512);
    ctx.beginPath();
    ctx.moveTo((ourad*Math.cos(1.5*pi)+125), (ourad*Math.sin(1.5*pi)+125));
    ctx.lineTo((inrad*Math.cos(1.7*pi)+125), (inrad*Math.sin(1.7*pi)+125));
    ctx.lineTo((ourad*Math.cos(1.9*pi)+125), (ourad*Math.sin(1.9*pi)+125));
    ctx.lineTo((inrad*Math.cos(0.1*pi)+125), (inrad*Math.sin(0.1*pi)+125));
    ctx.lineTo((ourad*Math.cos(0.3*pi)+125), (ourad*Math.sin(0.3*pi)+125));
    ctx.lineTo((inrad*Math.cos(0.5*pi)+125), (inrad*Math.sin(0.5*pi)+125));
    ctx.lineTo((ourad*Math.cos(0.7*pi)+125), (ourad*Math.sin(0.7*pi)+125));
    ctx.lineTo((inrad*Math.cos(0.9*pi)+125), (inrad*Math.sin(0.9*pi)+125));
    ctx.lineTo((ourad*Math.cos(1.1*pi)+125), (ourad*Math.sin(1.1*pi)+125));
    ctx.lineTo((inrad*Math.cos(1.3*pi)+125), (inrad*Math.sin(1.3*pi)+125));
    ctx.lineTo((ourad*Math.cos(1.5*pi)+125), (ourad*Math.sin(1.5*pi)+125));
    ctx.stroke();
  }
}
/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {

}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {

}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {

}
