/*
HTML DOM Input Password Object
Input Password Object
The Input Password object represents an HTML <input> element with type="password".

Access an Input Password Object
You can access an <input> element with type="password" by using getElementById():

Example
var x = document.getElementById("myPsw");
Tip: You can also access <input type="password"> by searching through the elements collection of a form.

Create an Input Password Object
You can create an <input> element with type="password" by using the document.createElement() method:

Example
var x = document.createElement("INPUT");
x.setAttribute("type", "password");
ADVERTISEMENT

ADVERTISEMENT

Input Password Object Properties
Property	Description
autocomplete	Sets or returns the value of the autocomplete attribute of a password field
autofocus	Sets or returns whether a password field should automatically get focus when the page loads
defaultValue	Sets or returns the default value of a password field
disabled	Sets or returns whether the password field is disabled, or not
form	Returns a reference to the form that contains the password field
maxLength	Sets or returns the value of the maxlength attribute of a password field
name	Sets or returns the value of the name attribute of a password field
pattern	Sets or returns the value of the pattern attribute of a password field
placeholder	Sets or returns the value of the placeholder attribute of a password field
readOnly	Sets or returns whether a password field is read-only, or not
required	Sets or returns whether the password field must be filled out before submitting a form
size	Sets or returns the value of the size attribute of a password field
type	Returns which type of form element a password field is
value	Sets or returns the value of the value attribute of the password field
Input Password Object Methods
Method	Description
select()	Selects the content of a password field
Standard Properties and Events
The Input Password object also supports the standard properties and events.
*/