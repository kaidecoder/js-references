/*
HTML DOM Input Reset Object
Input Reset Object
The Input Reset object represents an HTML <input> element with type="reset".

Access an Input Reset Object
You can access an <input> element with type="reset" by using getElementById():

Example
var x = document.getElementById("myReset");
Tip: You can also access <input type="reset"> by searching through the elements collection of a form.

Create an Input Reset Object
You can create an <input> element with type="reset" by using the document.createElement() method:

Example
var x = document.createElement("INPUT");
x.setAttribute("type", "reset");
Input Reset Object Properties
Property	Description
autofocus	Sets or returns whether a reset button should automatically get focus when the page loads
defaultValue	Sets or returns the default value of a reset button
disabled	Sets or returns whether the reset button is disabled, or not
form	Returns a reference to the form that contains the reset button
name	Sets or returns the value of the name attribute of a reset button
type	Returns which type of form element the reset button is
value	Sets or returns the value of the value attribute of the reset button
Standard Properties and Events
The Input Reset object also supports the standard properties and events.
*/