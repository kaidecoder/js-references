/*
HTML DOM Input Date Object
Input Date Object
The Input Date object represents an HTML <input> element with type="date".

Note: <input type="date"> does not show as a proper date field in IE11, and earlier.

Access an Input Date Object
You can access an <input> element with type="date" by using getElementById():

Example
var x = document.getElementById("myDate");
Tip: You can also access <input type="date"> by searching through the elements collection of a form.

Create an Input Date Object
You can create an <input> element with type="date" by using the document.createElement() method:

Example
var x = document.createElement("INPUT");
x.setAttribute("type", "date");
ADVERTISEMENT

ADVERTISEMENT

Input Date Object Properties
Property	Description
autocomplete	Sets or returns the value of the autocomplete attribute of a date field
autofocus	Sets or returns whether a date field should automatically get focus when the page loads
defaultValue	Sets or returns the default value of a date field
disabled	Sets or returns whether a date field is disabled, or not
form	Returns a reference to the form that contains the date field
list	Returns a reference to the datalist that contains the date field
max	Sets or returns the value of the max attribute of the date field
min	Sets or returns the value of the min attribute of the date field
name	Sets or returns the value of the name attribute of a date field
readOnly	Sets or returns whether the date field is read-only, or not
required	Sets or returns whether the date field must be filled out before submitting a form
step	Sets or returns the value of the step attribute of the date field
type	Returns which type of form element the date field is
value	Sets or returns the value of the value attribute of a date field
Input Date Object Methods
Method	Description
select()	Selects the content of a date text field
stepDown()	Decrements the value of the date field by a specified number
stepUp()	Increments the value of the date field by a specified number
Standard Properties and Events
The Input Date object also supports the standard properties and events.


*/