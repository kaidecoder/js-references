/*
HTML DOM Input URL Object
Input URL Object
The Input URL object represents an HTML <input> element with type="url".

Access an Input URL Object
You can access an <input> element with type="url" by using getElementById():

Example
var x = document.getElementById("myUrl");
Tip: You can also access <input type="url"> by searching through the elements collection of a form.

Create an Input URL Object
You can create an <input> element with type="url" by using the document.createElement() method:

Example
var x = document.createElement("INPUT");
x.setAttribute("type", "url");
ADVERTISEMENT

ADVERTISEMENT

Input URL Object Properties
Property	Description
autocomplete	Sets or returns the value of the autocomplete attribute of a URL field
autofocus	Sets or returns whether a URL field should automatically get focus when the page loads
defaultValue	Sets or returns the default value of a URL field
disabled	Sets or returns whether a URL field is disabled, or not
form	Returns a reference to the form that contains the URL field
list	Returns a reference to the datalist that contains the URL field
maxLength	Sets or returns the value of the maxlength attribute of a URL field
name	Sets or returns the value of the name attribute of a URL field
pattern	Sets or returns the value of the pattern attribute of a URL field
placeholder	Sets or returns the value of the placeholder attribute of a URL field
readOnly	Sets or returns whether the URL field is read-only, or not
required	Sets or returns whether the URL field must be filled out before submitting a form
size	Sets or returns the value of the size attribute of the URL field
type	Returns which type of form element the URL field is
value	Sets or returns the value of the value attribute of a URL field
Input URL Object Methods
Method	Description
blur()	Removes focus from a URL field
focus()	Gives focus to a URL field
select()	Selects the content of a URL text field
Standard Properties and Events
The Input URL object also supports the standard properties and events.
*/