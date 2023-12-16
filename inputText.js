/*
HTML DOM Input Text Object
Input Text Object
The Input Text object represents an HTML <input> element with type="text".

Access an Input Text Object
You can access an <input> element with type="text" by using getElementById():

Example
var x = document.getElementById("myText");
Tip: You can also access <input type="text"> by searching through the elements collection of a form.

Create an Input Text Object
You can create an <input> element with type="text" by using the document.createElement() method:

Example
var x = document.createElement("INPUT");
x.setAttribute("type", "text");
Input Text Object Properties
Property	Description
autocomplete	Sets or returns the value of the autocomplete attribute of a text field
autofocus	Sets or returns whether a text field should automatically get focus when the page loads
defaultValue	Sets or returns the default value of a text field
disabled	Sets or returns whether the text field is disabled, or not
form	Returns a reference to the form that contains the text field
list	Returns a reference to the datalist that contains the text field
maxLength	Sets or returns the value of the maxlength attribute of a text field
name	Sets or returns the value of the name attribute of a text field
pattern	Sets or returns the value of the pattern attribute of a text field
placeholder	Sets or returns the value of the placeholder attribute of a text field
readOnly	Sets or returns whether a text field is read-only, or not
required	Sets or returns whether the text field must be filled out before submitting a form
size	Sets or returns the value of the size attribute of a text field
type	Returns which type of form element a text field is
value	Sets or returns the value of the value attribute of the text field
Input Text Object Methods
Method	Description
blur()	Removes focus from a text field
focus()	Gives focus to a text field
select()	Selects the content of a text field
Standard Properties and Events
The Input Text object also supports the standard properties and events.


*/