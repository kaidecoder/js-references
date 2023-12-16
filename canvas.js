/*
Canvas API
The HTML <canvas> element is a bitmapped area in an HTML page.

The Canvas API allows JavaScript to draw graphics on the canvas.

The Canvas API can draw shapes, lines, curves, boxes, text, and images, with colors, rotations, transparencies, and other pixel manipulations.

Example
<canvas id="myCanvas" width="300" height="150"></canvas>
You access a <canvas> element with the HTML DOM method getElementById().

To draw in the canvas you need to create a 2D context object:

const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
Note
The HTML <canvas> element itself has no drawing abilities.

You must use JavaScript to draw any graphics.

The getContext() method returns an object with tools (methods) for drawing.

Paths
The common way to draw on the canvas is to:

Begin a Path - beginPath()
Move to a Point - moveTo()
Draw in the Path - lineTo()
Draw the Path - stroke()
Example

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(20, 100);
ctx.lineTo(70, 100);
ctx.stroke();
Complete Canvas API Reference
This reference covers all Properties and Methods of the getContext("2d") Object, used to draw text, lines, boxes, circles, pictures, and more on the canvas.

Drawing Methods
There are only 3 methods to draw directly on the canvas:

Method	Description
fillRect()	Draws a "filled" rectangle
strokeRect()	Draws a rectangle (with no fill)
clearRect()	Clears specified pixels within a rectangle
Path Methods
Method	Description
beginPath()	Begins a new path or resets the current path
closePath()	Adds a line to the path from the current point to the start
isPointInPath()	Returns true if the specified point is in the current path
moveTo()	Moves the path to a point in the canvas (without drawing)
lineTo()	Adds a line to the the path
fill()	Fills the current path
rect()	Adds a rectangle to the path
stroke()	Draws the current path
 	Circles and Curves
bezierCurveTo()	Adds a cubic Bézier curve to the path
arc()	Adds an arc/curve (circle, or parts of a circle) to the path
arcTo()	Adds an arc/curve between two tangents to the path
quadraticCurveTo()	Adds a quadratic Bézier curve to the path

Canvas API
The HTML <canvas> element is a bitmapped area in an HTML page.

The Canvas API allows JavaScript to draw graphics on the canvas.

The Canvas API can draw shapes, lines, curves, boxes, text, and images, with colors, rotations, transparencies, and other pixel manipulations.

Example
<canvas id="myCanvas" width="300" height="150"></canvas>
You access a <canvas> element with the HTML DOM method getElementById().

To draw in the canvas you need to create a 2D context object:

const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
Note
The HTML <canvas> element itself has no drawing abilities.

You must use JavaScript to draw any graphics.

The getContext() method returns an object with tools (methods) for drawing.

Paths
The common way to draw on the canvas is to:

Begin a Path - beginPath()
Move to a Point - moveTo()
Draw in the Path - lineTo()
Draw the Path - stroke()
Example

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(20, 100);
ctx.lineTo(70, 100);
ctx.stroke();
Complete Canvas API Reference
This reference covers all Properties and Methods of the getContext("2d") Object, used to draw text, lines, boxes, circles, pictures, and more on the canvas.

Drawing Methods
There are only 3 methods to draw directly on the canvas:

Method	Description
fillRect()	Draws a "filled" rectangle
strokeRect()	Draws a rectangle (with no fill)
clearRect()	Clears specified pixels within a rectangle
Path Methods
Method	Description
beginPath()	Begins a new path or resets the current path
closePath()	Adds a line to the path from the current point to the start
isPointInPath()	Returns true if the specified point is in the current path
moveTo()	Moves the path to a point in the canvas (without drawing)
lineTo()	Adds a line to the the path
fill()	Fills the current path
rect()	Adds a rectangle to the path
stroke()	Draws the current path
 	Circles and Curves
bezierCurveTo()	Adds a cubic Bézier curve to the path
arc()	Adds an arc/curve (circle, or parts of a circle) to the path
arcTo()	Adds an arc/curve between two tangents to the path
quadraticCurveTo()	Adds a quadratic Bézier curve to the path

Standard Properties and Events
The canvas object also supports the standard properties and events of the HTML DOM.

Text
Method/Prop	Description
direction	Sets or returns the direction used to draw text
fillText()	Draws "filled" text on the canvas
font	Sets or returns the font properties for text content
measureText()	Returns an object that contains the width of the specified text
strokeText()	Draws text on the canvas
textAlign	Sets or returns the alignment for text content
textBaseline	Sets or returns the text baseline used when drawing text
Colors, Styles, and Shadows
Method/Property	Description
addColorStop()	Specifies the colors and stop positions in a gradient object
createLinearGradient()	Creates a linear gradient (to use on canvas content)
createPattern()	Repeats a specified element in the specified direction
createRadialGradient()	Creates a radial/circular gradient (to use on canvas content)
fillStyle	Sets or returns the color, gradient, or pattern used to fill the drawing
lineCap	Sets or returns the style of the end caps for a line
lineJoin	Sets or returns the type of corner created, when two lines meet
lineWidth	Sets or returns the current line width
miterLimit	Sets or returns the maximum miter length
shadowBlur	Sets or returns the blur level for shadows
shadowColor	Sets or returns the color to use for shadows
shadowOffsetX	Sets or returns the horizontal distance of the shadow from the shape
shadowOffsetY	Sets or returns the vertical distance of the shadow from the shape
strokeStyle	Sets or returns the color, gradient, or pattern used for strokes
Transformations
Method	Description
scale()	Scales the current drawing bigger or smaller
rotate()	Rotates the current drawing
translate()	Remaps the (0,0) position on the canvas
transform()	Replaces the current transformation matrix for the drawing
setTransform()	Resets the current transform to the identity matrix. Then runs transform()
Image Drawing
Method	Description
drawImage()	Draws an image, canvas, or video onto the canvas
The ImageData Object / Pixel Manipulation
Method/Property	Description
createImageData()	Creates a new, blank ImageData object
getImageData()	Returns an ImageData object that copies the pixel data for the specified rectangle on a canvas
ImageData.data	Returns an object that contains image data of a specified ImageData object
ImageData.height	Returns the height of an ImageData object
ImageData.width	Returns the width of an ImageData object
putImageData()	Puts the image data (from a specified ImageData object) back onto the canvas
Compositing
Property	Description
globalAlpha	Sets or returns the current alpha or transparency value of the drawing
globalCompositeOperation	Sets or returns how a new image are drawn onto an existing image
Other Methods
Method	Description
clip()	Clips a region of any shape and size from the original canvas
save()	Saves the state of the current drawing context and all its atributes
restore()	Restores the previously saved state and attributes
createEvent()	 
getContext()	 
toDataURL()	 
Standard Properties and Events
The canvas object also supports the standard properties and events.


*/