/*
HTML DOM Input Hidden Object
Input Hidden Object
The Input Hidden object represents an HTML <input> element with type="hidden".

Access an Input Hidden Object
You can access an <input> element with type="hidden" by using getElementById():

Example
var x = document.getElementById("myInput");
Tip: You can also access <input type="hidden"> by searching through the elements collection of a form.

Create an Input Hidden Object
You can create an <input> element with type="hidden" by using the document.createElement() method:

Example
var x = document.createElement("INPUT");
x.setAttribute("type", "hidden");
Input Hidden Object Properties
Property	Description
defaultValue	Sets or returns the default value of the hidden input field
form	Returns a reference to the form that contains the hidden input field
name	Sets or returns the value of the name attribute of the hidden input field
type	Returns which type of form element a hidden input field is
value	Sets or returns the value of the value attribute of the hidden input field
Standard Properties and Events
The Input Hidden object also supports the standard properties and events.
*/