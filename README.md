Welcome to my Website Optimization project. 
===========================================
To view the project's webpage, please go to the following link:

http://amashamdan.github.io/P4-website-optimization/

===========================================
Optimizations made in the project:

main.js:
	1. Changed function changePizzaSizes (acheived time to resize is around 0.5 ms) tp remove FSL.
	2. Added an array "i5" containing all possible results of (i % 5). Inside the updatePositions() function,
		the value of (i % 5) is replaced by an element from the i5 array with the help of a counter. i5 array
		has 5 possible values (0 to 4) which avoids calculating (i % 5) repeatedly when the outcome only has
		5 possible values.
	3. The querySelectAll(".mover") was moved to the end the file (in "DOMContentLoaded" handler), changed to getElementsByClassName(),
		and declared as global variable.
		It was moved to the handler so that it would only be called once instead of calling it at each scroll event.
		It was changed to getElementsByClassName() because this method is a lot faster than querySelectAll().
	4. Inside updatePositions() function and inside the for loop. "document.body.scrollTop / 1250" was taken out of the for loop and evaluated only once for each
		scroll event. The result stored in the variable location. This way we avoid triggering layout repeatedly for each sliding pizza element before
		triggering style.
	5. The variable "phase" is calculated from the varialbe location and the element retreived from the array i5.
	6. the propoerty backface-visibility: hidden was added to the class ".mover" in the style section in pizza.html. This forces the browser to
		have a seperate layer for the sliding pizzas which avoids repainting the whole screen during scrolling.
	7. window.pizzaLength = items.length; was introduced inside the sliding pizzas generator function. This variable is used as a condition in the for loop
		inside the updatePositions() function. Instead of repeatedly calling items.length in the for loop. This variable has the number of sliding piizas
		and is called instead of items.length.

index.html, project-2048.html, project-mobile.html, project-webperf.html:
	1. Removed link to google fonts.
	2. Added media = "print" to print.css.
	3. Minified print.css
	4. Inlined css from style.css.
	5. Set google-analytics JavaScript as async.
	6. Minified perfmatters.js
	7. Compressed profile picutre.
	8. Resized and Compressed Pizzeria picture.
	
pizza.html:
	1. Inlined css from views/css/style.css
	2. Minified bootstrap-grid.css.
	3. Resized and compressed pizzeria image.
	4. Minified main.js.