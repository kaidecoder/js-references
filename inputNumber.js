/*
HTML DOM Input Number Object
Input Number Object
The Input Number object represents an HTML <input> element with type="number".

Access an Input Number Object
You can access an <input> element with type="number" by using getElementById():

Example
var x = document.getElementById("myNumber");
Tip: You can also access <input type="number"> by searching through the elements collection of a form.

Create an Input Number Object
You can create an <input> element with type="number" by using the document.createElement() method:

Example
var x = document.createElement("INPUT");
x.setAttribute("type", "number");
ADVERTISEMENT

ADVERTISEMENT

Input Number Object Properties
Property	Description
autocomplete	Sets or returns the value of the autocomplete attribute of a number field
autofocus	Sets or returns whether a number field should automatically get focus when the page loads
defaultValue	Sets or returns the default value of a number field
disabled	Sets or returns whether a number field is disabled, or not
form	Returns a reference to the form that contains the number field
list	Returns a reference to the datalist that contains the number field
max	Sets or returns the value of the max attribute of a number field
min	Sets or returns the value of the min attribute of a number field
name	Sets or returns the value of the name attribute of a number field
placeholder	Sets or returns the value of the placeholder attribute of a number field
readOnly	Sets or returns whether the number field is read-only, or not
required	Sets or returns whether the number field must be filled out before submitting a form
step	Sets or returns the value of the step attribute of a number field
type	Returns which type of form element the number field is
value	Sets or returns the value of the value attribute of a number field
Input Number Object Methods
Method	Description
select()	Selects the content of a number text field
stepDown()	Decrements the value of the input number by a specified number
stepUp()	Increments the value of the input number by a specified number
Standard Properties and Events
The Input Number object also supports the standard properties and events.


*/