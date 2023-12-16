/*
HTML DOM Input Datetime Object
Input Datetime Object
The Input Datetime object represents an HTML <input> element with type="datetime".

Access an Input Datetime Object
You can access an <input> element with type="datetime" by using getElementById():

Example
var x = document.getElementById("myDatetime");
Tip: You can also access <input type="datetime"> by searching through the elements collection of a form.

Create an Input Datetime Object
You can create an <input> element with type="datetime" by using the document.createElement() method:

Example
var x = document.createElement("INPUT");
x.setAttribute("type", "datetime");
ADVERTISEMENT

Input Datetime Object Properties
Property	Description
autocomplete	Sets or returns the value of the autocomplete attribute of a datetime field
autofocus	Sets or returns whether a datetime field should automatically get focus when the page loads
defaultValue	Sets or returns the default value of a datetime field
disabled	Sets or returns whether a datetime field is disabled, or not
form	Returns a reference to the form that contains the datetime field
list	Returns a reference to the datalist that contains the datetime field
max	Sets or returns the value of the max attribute of the datetime field
min	Sets or returns the value of the min attribute of the datetime field
name	Sets or returns the value of the name attribute of a datetime field
readOnly	Sets or returns whether the datetime field is read-only, or not
required	Sets or returns whether the datetime field must be filled out before submitting a form
step	Sets or returns the value of the step attribute of the datetime field
type	Returns which type of form element the datetime field is
value	Sets or returns the value of the value attribute of a datetime field
Input Datetime Object Methods
Method	Description
select()	Selects the content of a datetime text field
stepDown()	Decrements the value of the datetime field by a specified number
stepUp()	Increments the value of the datetime field by a specified number
Standard Properties and Events
The Input Datetime object also supports the standard properties and events.


*/