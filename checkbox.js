/*
HTML DOM Input Checkbox Object
Input Checkbox Object
The Input Checkbox object represents an HTML <input> element with type="checkbox".

Access an Input Checkbox Object
You can access an <input> element with type="checkbox" by using getElementById():

Example
var x = document.getElementById("myCheck");
Tip: You can also access <input type="checkbox"> by searching through the elements collection of a form.

Create an Input Checkbox Object
You can create an <input> element with type="checkbox" by using the document.createElement() method:

Example
var x = document.createElement("INPUT");
x.setAttribute("type", "checkbox");
Input Checkbox Object Properties
Property	Description
autofocus	Sets or returns whether a checkbox should automatically get focus when the page loads
checked	Sets or returns the checked state of a checkbox
defaultChecked	Returns the default value of the checked attribute
defaultValue	Sets or returns the default value of a checkbox
disabled	Sets or returns whether a checkbox is disabled, or not
form	Returns a reference to the form that contains the checkbox
indeterminate	Sets or returns the indeterminate state of the checkbox
name	Sets or returns the value of the name attribute of a checkbox
required	Sets or returns whether the checkbox must be checked before submitting a form
type	Returns which type of form element the checkbox is
value	Sets or returns the value of the value attribute of a checkbox
Standard Properties and Events
The Input Checkbox object also supports the standard properties and events.


*/