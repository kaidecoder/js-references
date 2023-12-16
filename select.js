/*
HTML DOM Select Object
Select Object
The Select object represents an HTML <select> element.

Access a Select Object
You can access a <select> element by using getElementById():

Example
var x = document.getElementById("mySelect");
Tip: You can also access a Select object by searching through the elements collection of a form.

Create a Select Object
You can create a <select> element by using the document.createElement() method:

Example
var x = document.createElement("SELECT");
Select Object Collections
Collection	Description
options	Returns a collection of all the options in a drop-down list
ADVERTISEMENT

ADVERTISEMENT

Select Object Properties
Property	Description
autofocus	Sets or returns whether a drop-down list should automatically get focus when the page loads
disabled	Sets or returns whether the drop-down list is disabled, or not
form	Returns a reference to the form that contains the drop-down list
length	Returns the number of <option> elements in a drop-down list
multiple	Sets or returns whether more than one option can be selected from the drop-down list
name	Sets or returns the value of the name attribute of a drop-down list
selectedIndex	Sets or returns the index of the selected option in a drop-down list
size	Sets or returns the value of the size of a drop-down list
type	Returns which type of form element a drop-down list is
value	Sets or returns the value of the selected option in a drop-down list
Select Object Methods
Method	Description
add()	Adds an option to a drop-down list
checkValidity()	 
remove()	Removes an option from a drop-down list
Standard Properties and Events
The Select object also supports the standard properties and events.
*/