/*
HTML DOM Input Radio Object
Input Radio Object
The Input Radio object represents an HTML <input> element with type="radio".

Access an Input Radio Object
You can access an <input> element with type="radio" by using getElementById():

Example
var x = document.getElementById("myRadio");
Tip: You can also access <input type="radio"> by searching through the elements collection of a form.

Create an Input Radio Object
You can create an <input> element with type="radio" by using the document.createElement() method:

Example
var x = document.createElement("INPUT");
x.setAttribute("type", "radio");
Input Radio Object Properties
Property	Description
autofocus	Sets or returns whether a radio button should automatically get focus when the page loads
checked	Sets or returns the checked state of a radio button
defaultChecked	Returns the default value of the checked attribute
defaultValue	Sets or returns the default value of a radio button
disabled	Sets or returns whether the radio button is disabled, or not
form	Returns a reference to the form that contains the radio button
name	Sets or returns the value of the name attribute of a radio button
required	Sets or returns whether the radio button must be checked before submitting a form
type	Returns which type of form element the radio button is
value	Sets or returns the value of the value attribute of the radio button
Standard Properties and Events
The Input Radio object also supports the standard properties and events.


*/