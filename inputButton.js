/*
HTML DOM Input Button Object
Input Button Object
The Input Button object represents an HTML <input> element with type="button".

Access an Input Button Object
You can access an <input> element with type="button" by using getElementById():

Example
var x = document.getElementById("myBtn");
Tip: You can also access <input type="button"> by searching through the elements collection of a form.

Create an Input Button Object
You can create an <input> element with type="button" by using the document.createElement() method:

Example
var x = document.createElement("INPUT");
x.setAttribute("type", "button");
Input Button Object Properties
Property	Description
autofocus	Sets or returns whether an input button should automatically get focus when the page loads
defaultValue	Sets or returns the default value of an input button
disabled	Sets or returns whether an input button is disabled, or not
form	Returns a reference to the form that contains the input button
name	Sets or returns the value of the name attribute of an input button
type	Returns which type of form element the input button is
value	Sets or returns the value of the value attribute of an input button
Standard Properties and Events
The Input Button object also supports the standard properties and events.


*/