# Problem Set 6
 Problem Set 6 is our first introduction to two-dimensional graphics using the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API). You'll be tasked with displaying various lines, shapes, and colors on the screen. While there is not an explicit check function for each exercise, there is an example that gives you a better idea what you're code should do. Some of these you'll likely find fairly easy, while others might leave you wanting to pull your hair out. That's alright, and it's kind of the point. Programming is an art that requires perseverance. Break each exercise down into smaller pieces, and use your mathematical reasoning to devise a solution before trying to write any code.
 ## Getting Started
 To get started, you'll need to create a [GitHub](https://github.com/) repository to store your Problem Set 6 code. After cloning my skeleton repository, you'll need to setup a remote to push your code to your repository instead of mine. Steps to accomplish this are outlined below.
 ### Setup
 01. Login to your [GitHub](https://github.com/) account and create a new repository named `problem-set-6`.
02. In GitBash, navigate to your `APCSP` folder.
03. Clone my skeleton repository from [GitHub](https://github.com/). This will make a copy of my repository and store it locally.
```
git clone git@github.com:rwilson-ucvts/principles-pset-6-skeleton.git
```
04. The cloning process will have created a folder named `principles-pset-6-skeleton`. Rename this folder to `pset6`.
```
mv principles-pset-6-skeleton pset6
```
05. Change directories to get into your `pset6` folder.
```
cd pset6
```
06. Originally, the remote will be pointing at my repository. We need to overwrite this.
```
git remote rename origin upstream
```
07. Lastly, we need to add a new remote that points at the repository you created earlier. Make sure you replace `YOUR-USERNAME` with your actual username.
```
git remote add origin git@github.com:YOUR-USERNAME/problem-set-6.git
```
08. Launch Atom and select `File > Add Project Folder...`.
09. Navigate to your `pset6` directory and click `Open`.
 ## Exercises
 Problem Set 6 contains 9 exercises, each of which will be written in separate functions. Point values typically reflect the perceived difficulty of each exercise.
 ### Exercise 1 (`Hello.`)
 Write a function that draws `Hello, World!` on the canvas. You should begin drawing at [10, 50], relative to the canvas, and your text should be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 You'll need to use the appropriate [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) methods to do this. If you're unsure what your code should do, click the `Example` button to see. When you click the `Hello` button, your output should match that of the example.
 ### Exercise 2 (`Rectangle.`)
 Write a function that draws a rectangle on the canvas. You should prompt the user for the height and width. You should also prompt the user for the X- and Y-coordinates of the top-left corner of the rectangle.
 You'll need to use the appropriate [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) methods to do this. If you're unsure what your code should do, click the `Example` button to see. When you click the `Rectangle` button, your output should match that of the example.
 Certain values, such as heights and widths that are logically too small or practically too large, should be prohibited. Check the example to see what your code should do in these instances.
 Here is a list of prohibited values:
* Width values less than 1
* Height values less than 1
* X- or Y- coordinates less than 5
* Combinations of heights/widths and X-/Y-coordinates that would make it impossible to draw the rectangle within the bounds of the canvas
 ### Exercise 3 (`Color.`)
 Write a function that draws a rectangle on the canvas. By default, the rectangle will have a height and width of 50px and 100px, respectively. It will be positioned at [10, 10] on the canvas. You'll need to prompt the user to enter a color for the rectangle.
 Support the following colors:
* black
* blue
* green
* orange
* purple
* red
* yellow
 You'll need to use the appropriate [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) methods to do this. If you're unsure what your code should do, click the `Example` button to see. When you click the `Color` button, your output should match that of the example.
 Check the example to see what your code should do if the user enters an unsupported color.
 ### Exercise 4 (`Triangle.`)
 Write a function that draws a right triangle on the canvas. The triangle should be outlined only, not filled. You'll need to prompt the user for the lengths of each of the sides. By default, position your triangle so that its left-most and top-most points have X- and Y-coordinates of 10.
 When drawing your right triangles, the left side shall be designated as the first side and will be smallest of the three side lengths. The bottom side shall be designated as the second side and will be second smallest of the three side lengths. The hypotenuse shall be designated as the third side and will be the largest of the three side lengths.
 You'll need to use the appropriate [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) methods to do this. If you're unsure what your code should do, click the `Example` button to see. When you click the `Triangle` button, your output should match that of the example.
 Certain values, such as side lengths that make it impossible to create a valid right triangle, should be prohibited. Check the example to see what your code should do in these instances.
 Here is a list of prohibited values:
* Combinations of side lengths that would make it impossible to draw a valid triangle
* Combinations of side lengths that would make it impossible to draw the triangle within the bounds of the canvas
 ### Exercise 5 (`Smile.`)
 Write a function that draws a smiley face on the canvas. The head should be a perfect circle with a radius specified by the user. The eyes should also be perfect circles with radii that are 10% of that of the head. The radius of the mouth should be 70% of that of the head. A nose is not required, and the position of the eyes and mouth are up to you (provided) they are on the face.
 You'll need to use the appropriate [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) methods to do this. If you're unsure what your code should do, click the `Example` button to see. When you click the `Smile` button, your output should match that of the example.
 Certain values, such as radii that are logically too small or practically too large, should be prohibited. Check the example to see what your code should do in these instances.
 ### Exercise 6 (`Star.`)
 Write a function that draws a five-point star on the canvas. Prompt the user for the outer radius (i.e., a circle that would connect each of the star's outer points) and inner radius (i.e., a circle that would connect each of the star's inner points). The center of the star should be placed at [125, 125].
 You'll need to use the appropriate [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) methods to do this. If you're unsure what your code should do, click the `Example` button to see. When you click the `Star` button, your output should match that of the example.
 Certain values, such as radii that are logically too small or practically too large, should be prohibited. Check the example to see what your code should do in these instances.
 ### Exercise 7 (`Stop Sign.`)
 Write a function that draws a stop sign. The stop sign should be outlined in black, but filled red. At the center of the stop sign, the same height as the length of the sides, should be the word STOP (all capitals, white). Each side length should be 80px.
 You'll need to use the appropriate [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) methods to do this. If you're unsure what your code should do, click the `Example` button to see. When you click the `Stop Sign` button, your output should match that of the example.
 The left-most and top-most sides should have X- and Y-coordinates of 10.
 ### Exercise 8 (`Pyramid.`)
 Write a function that draws a block pyramid, where the user specifies the side length of each block. By default, we'll draw a pyramid with a base of five blocks. Give the leftmost point of the pyramid an X-coordinates of 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the height of the canvas.
 You'll need to use the appropriate [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) methods to do this. If you're unsure what your code should do, click the `Example` button to see. When you click the `Pyramid` button, your output should match that of the example.
 Certain values, such as lengths that are logically too small or practically too large, should be prohibited. Check the example to see what your code should do in these instances.
 ### Exercise 9 (`House.`)
 Write a function that draws a two-story house. The house should have a rectangular frame, a front door, two square windows on the first floor, two square windows on the second floor, and a triangular roof. Your house and front door should be painted a solid color of the user's choice (these colors should be different). The windows should be light blue, and the roof should be gray. Give the leftmost point of your house an X-coordinate of 150, and the bottom of your house a Y-coordinate of 10 less than the height of the canvas.
 Support the following front door and/or house colors:
* blue
* brown
* green
* orange
* purple
* red
* yellow
 You'll need to use the appropriate [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) methods to do this. If you're unsure what your code should do, click the `Example` button to see. When you click the `House` button, your output should match that of the example.
 Check the example to see what your code should do if the user enters an unsupported color.
 ## Deadline
 Your Canvas submission is due at or before 11:59pm on Monday, December 17, 2018.
 ### Submission Requirements
 All that is required for submission is the public URL (i.e., the GitHub Pages URL) to your [GitHub](https://github.com/) repository for this problem set. If you forgot how to create a public URL for your repository, reread the [original instructions from Problem Set 3¾](https://canvas.instructure.com/courses/1408038/pages/github-pages?module_item_id=19614011).
