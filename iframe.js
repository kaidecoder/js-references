/*
HTML DOM IFrame Object
IFrame Object
The IFrame object represents an HTML <iframe> element.

Access an IFrame Object
You can access an <iframe> element by using getElementById():

Example
var x = document.getElementById("myFrame");
Tip: You can also access an <iframe> element by using the window.frames property.

Create an IFrame Object
You can create an <iframe> element by using the document.createElement() method:

Example
var x = document.createElement("IFRAME");
IFrame Object Properties
Property	Description
align	Not supported in HTML5. Use style.cssFloat instead.
Sets or returns the value of the align attribute in an iframe
contentDocument	Returns the document object generated by an iframe
contentWindow	Returns the window object generated by an iframe
frameBorder	Not supported in HTML5. Use style.border instead.
Sets or returns the value of the frameborder attribute in an iframe
height	Sets or returns the value of the height attribute in an iframe
longDesc	Not supported in HTML5.
Sets or returns the value of the longdesc attribute in an iframe
marginHeight	Not supported in HTML5. Use style.margin instead.
Sets or returns the value of the marginheight attribute in an iframe
marginWidth	Not supported in HTML5. Use style.margin instead.
Sets or returns the value of the marginwidth attribute in an iframe
name	Sets or returns the value of the name attribute in an iframe
sandbox	Returns the value of the sandbox attribute in an iframe
scrolling	Not supported in HTML5.
Sets or returns the value of the scrolling attribute in an iframe
seamless	Sets or returns whether an iframe should look like it is a part of the containing document (no borders or scrollbars), or not
src	Sets or returns the value of the src attribute in an iframe
srcdoc	Sets or returns the value of the srcdoc attribute in an iframe
width	Sets or returns the value of the width attribute in an iframe
Standard Properties and Events
The IFrame object also supports the standard properties and events.
*/