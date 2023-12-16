/*
HTML DOM Input Month Object
Input Month Object
The Input Month object represents an HTML <input> element with type="month".

Note: <input type="month"> does not show as a proper month/year field in IE11 or in Firefox.

Access an Input Month Object
You can access an <input> element with type="month" by using getElementById():

Example
var x = document.getElementById("myMonth");
Tip: You can also access <input type="month"> by searching through the elements collection of a form.

Create an Input Month Object
You can create an <input> element with type="month" by using the document.createElement() method:

Example
var x = document.createElement("INPUT");
x.setAttribute("type", "month");
Input Month Object Properties
Property	Description
autocomplete	Sets or returns the value of the autocomplete attribute of a month field
autofocus	Sets or returns whether a month field should automatically get focus when the page loads
defaultValue	Sets or returns the default value of a month field
disabled	Sets or returns whether a month field is disabled, or not
form	Returns a reference to the form that contains the month field
list	Returns a reference to the datalist that contains the month field
max	Sets or returns the value of the max attribute of the month field
min	Sets or returns the value of the min attribute of the month field
name	Sets or returns the value of the name attribute of a month field
readOnly	Sets or returns whether the month field is read-only, or not
required	Sets or returns whether the month field must be filled out before submitting a form
step	Sets or returns the value of the step attribute of the month field
type	Returns which type of form element the month field is
value	Sets or returns the value of the value attribute of a month field
Input Month Object Methods
Method	Description
select()	Selects the content of a month text field
stepDown()	Decrements the value of the month field by a specified number
stepUp()	Increments the value of the month field by a specified number
Standard Properties and Events
The Input Month object also supports the standard properties and events.
*/