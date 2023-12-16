/*
HTML DOM Input Search Object
Input Search Object
The Input Search object represents an HTML <input> element with type="search".

Access an Input Search Object
You can access an <input> element with type="search" by using getElementById():

Example
var x = document.getElementById("mySearch");
Tip: You can also access <input type="search"> by searching through the elements collection of a form.

Create an Input Search Object
You can create an <input> element with type="search" by using the document.createElement() method:

Example
var x = document.createElement("INPUT");
x.setAttribute("type", "search");
ADVERTISEMENT

Input Search Object Properties
Property	Description
autocomplete	Sets or returns the value of the autocomplete attribute of a search field
autofocus	Sets or returns whether a search field should automatically get focus when the page loads
defaultValue	Sets or returns the default value of a search field
disabled	Sets or returns whether a search field is disabled, or not
form	Returns a reference to the form that contains the search field
list	Returns a reference to the datalist that contains the search field
maxLength	Sets or returns the value of the maxlength attribute of a search field
name	Sets or returns the value of the name attribute of a search field
pattern	Sets or returns the value of the pattern attribute of a search field
placeholder	Sets or returns the value of the placeholder attribute of a search field
readOnly	Sets or returns whether the search field is read-only, or not
required	Sets or returns whether the search field must be filled out before submitting a form
size	Sets or returns the value of the size attribute of the search field
type	Returns which type of form element the search field is
value	Sets or returns the value of the value attribute of a search field
Input Search Object Methods
Method	Description
blur()	Removes focus from a search field
focus()	Gives focus to a search field
select()	Selects the content of a search text field
Standard Properties and Events
The Input Search object also supports the standard properties and events.
*/