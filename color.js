/*
HTML DOM Input Color Object
Input Color Object
The Input Color object represents an HTML <input> element with type="color".

Note: <input type="color"> is not supported in IE 11 and earlier versions, or in Safari 9.1 and earlier versions.

Access an Input Color Object
You can access an <input> element with type="color" by using getElementById():

Example
var x = document.getElementById("myColor");
Tip: You can also access <input type="color"> by searching through the elements collection of a form.

Create an Input Color Object
You can create an <input> element with type="color" by using the document.createElement() method:

Example
var x = document.createElement("INPUT");
x.setAttribute("type", "color");
Input Color Object Properties
Property	Description
autocomplete	Sets or returns the value of the autocomplete attribute of a color picker
autofocus	Sets or returns whether a color picker should automatically get focus when the page loads
defaultValue	Sets or returns the default value of a color picker
disabled	Sets or returns whether a color picker is disabled, or not
form	Returns a reference to the form that contains the color picker
list	Returns a reference to the <datalist> element that contains the color picker
name	Sets or returns the value of the name attribute of a color picker
type	Returns which type of form element the color picker is
value	Sets or returns the value of the value attribute of a color picker
Standard Properties and Events
The Input Color object also supports the standard properties and events.


*/