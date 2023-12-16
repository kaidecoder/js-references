/*
HTML DOM Input Range Object
Input Range Object
The Input Range object represents an HTML <input> element with type="range".

Access an Input Range Object
You can access an <input> element with type="range" by using getElementById():

Example
var x = document.getElementById("myRange");
Tip: You can also access <input type="range"> by searching through the elements collection of a form.

Create an Input Range Object
You can create an <input> element with type="range" by using the document.createElement() method:

Example
var x = document.createElement("INPUT");
x.setAttribute("type", "range");
ADVERTISEMENT

ADVERTISEMENT

Input Range Object Properties
Property	Description
autocomplete	Sets or returns the value of the autocomplete attribute of a slider control
autofocus	Sets or returns whether a slider control should automatically get focus when the page loads
defaultValue	Sets or returns the default value of a slider control
disabled	Sets or returns whether a slider control is disabled, or not
form	Returns a reference to the form that contains the slider control
list	Returns a reference to the datalist that contains the slider control
max	Sets or returns the value of the max attribute of the slider control
min	Sets or returns the value of the min attribute of the slider control
name	Sets or returns the value of the name attribute of a slider control
step	Sets or returns the value of the step attribute of the slider control
type	Returns which type of form element the slider control is
value	Sets or returns the value of the value attribute of a slider control
Input Range Object Methods
Method	Description
stepDown()	Decrements the value of the slider control by a specified number
stepUp()	Increments the value of the slider control by a specified number
Standard Properties and Events
The Input Range object also supports the standard properties and events.


*/