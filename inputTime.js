/*
HTML DOM Input Time Object
Input Time Object
The Input Time object represents an HTML <input> element with type="time".

Note: <input type="time"> does not show as a proper time field in IE11, and earlier.

Access an Input Time Object
You can access an <input> element with type="time" by using getElementById():

Example
var x = document.getElementById("myTime");
Tip: You can also access <input type="time"> by searching through the elements collection of a form.

Create an Input Time Object
You can create an <input> element with type="time" by using the document.createElement() method:

Example
var x = document.createElement("INPUT");
x.setAttribute("type", "time");
ADVERTISEMENT

ADVERTISEMENT

Input Time Object Properties
Property	Description
autocomplete	Sets or returns the value of the autocomplete attribute of a time field
autofocus	Sets or returns whether a time field should automatically get focus when the page loads
defaultValue	Sets or returns the default value of a time field
disabled	Sets or returns whether a time field is disabled, or not
form	Returns a reference to the form that contains the time field
list	Returns a reference to the datalist that contains the time field
max	Sets or returns the value of the max attribute of the time field
min	Sets or returns the value of the min attribute of the time field
name	Sets or returns the value of the name attribute of a time field
readOnly	Sets or returns whether the time field is read-only, or not
required	Sets or returns whether the time field must be filled out before submitting a form
step	Sets or returns the value of the step attribute of the time field
type	Returns which type of form element the time field is
value	Sets or returns the value of the value attribute of a time field
Input Time Object Methods
Method	Description
select()	Selects the content of a time text field
stepDown()	Decrements the value of the time field by a specified number
stepUp()	Increments the value of the time field by a specified number
Standard Properties and Events
The Input Time object also supports the standard properties and events.
*/