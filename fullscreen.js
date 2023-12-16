/*
JavaScript Fullscreen API
The Fullscreen API
The Fullscreen API has methods and properties to handle HTML elements in full-screen.

Example
Show a <video> element in fullscreen mode:

/* Get the element you want to display in fullscreen */
var elem = document.getElementById("myvideo");

/* Execute the openFullscreen() function to open the video in fullscreen. Include prefixes for browsers that do not support the requestFullscreen property */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen){  /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen){  /* IE11 */
    elem.msRequestFullscreen();
  }
}
/*
Fullscreen Properties and Methods
Property/Method	Description
exitFullscreen()	Cancels the element in fullscreen mode
fullscreenElement	Returns the element that is in full-screen mode,
fullscreenEnabled()	Returns true if the document can be viewed in fullscreen mode
requestFullscreen()	Opens an element in fullscreen mode
*/
