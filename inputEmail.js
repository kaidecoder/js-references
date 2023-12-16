/*
HTML DOM Input Email Object
Input Email Object
The Input Email object represents an HTML <input> element with type="email".

Access an Input Email Object
You can access an <input> element with type="email" by using getElementById():

Example
var x = document.getElementById("myEmail");
Tip: You can also access <input type="email"> by searching through the elements collection of a form.

Create an Input Email Object
You can create an <input> element with type="email" by using the document.createElement() method:

Example
var x = document.createElement("INPUT");
x.setAttribute("type", "email");
ADVERTISEMENT

ADVERTISEMENT

Input Email Object Properties
Property	Description
autocomplete	Sets or returns the value of the autocomplete attribute of an email field
autofocus	Sets or returns whether an email field should automatically get focus when the page loads
defaultValue	Sets or returns the default value of an email field
disabled	Sets or returns whether an email field is disabled, or not
form	Returns a reference to the form that contains the email field
list	Returns a reference to the datalist that contains the email field
maxLength	Sets or returns the value of the maxlength attribute of an email field
multiple	Sets or returns whether a user is allowed to enter more than one email address in the email field
name	Sets or returns the value of the name attribute of an email field
pattern	Sets or returns the value of the pattern attribute of an email field
placeholder	Sets or returns the value of the placeholder attribute of an email field
readOnly	Sets or returns whether the email field is read-only, or not
required	Sets or returns whether the email field must be filled out before submitting a form
size	Sets or returns the value of the size attribute of the email field
type	Returns which type of form element the email field is
value	Sets or returns the value of the value attribute of an email field
Input Email Object Methods
Method	Description
select()	Selects the content of an email text field
Standard Properties and Events
The Input Email object also supports the standard properties and events.


*/