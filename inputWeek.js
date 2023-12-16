/*
Input Week Object
The Input Week object represents an HTML <input> element with type="week".

Note: <input type="week"> is not supported in IE11, Firefox, or Safari.

Access an Input Week Object
You can access an <input> element with type="week" by using getElementById():

Example
var x = document.getElementById("myWeek");
Tip: You can also access <input type="week"> by searching through the elements collection of a form.

Create an Input Week Object
You can create an <input> element with type="week" by using the document.createElement() method:

Example
var x = document.createElement("INPUT");
x.setAttribute("type", "week");
ADVERTISEMENT

ADVERTISEMENT

Input Week Object Properties
Property	Description
autocomplete	Sets or returns the value of the autocomplete attribute of a week field
autofocus	Sets or returns whether a week field should automatically get focus when the page loads
defaultValue	Sets or returns the default value of a week field
disabled	Sets or returns whether a week field is disabled, or not
form	Returns a reference to the form that contains the week field
list	Returns a reference to the datalist that contains the week field
max	Sets or returns the value of the max attribute of the week field
min	Sets or returns the value of the min attribute of the week field
name	Sets or returns the value of the name attribute of a week field
readOnly	Sets or returns whether the week field is read-only, or not
required	Sets or returns whether the week field must be filled out before submitting a form
step	Sets or returns the value of the step attribute of the week field
type	Returns which type of form element the week field is
value	Sets or returns the value of the value attribute of a week field
Input Week Object Methods
Method	Description
select()	Selects the content of a week text field
stepDown()	Decrements the value of the week field by a specified number
stepUp()	Increments the value of the week field by a specified number
Standard Properties and Events
The Input Week object also supports the standard properties and events.


*/