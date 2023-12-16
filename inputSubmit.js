/*
HTML DOM Input Submit Object
Input Submit Object
The Input Submit object represents an HTML <input> element with type="submit".

Access an Input Submit Object
You can access an <input> element with type="submit" by using getElementById():

Example
var x = document.getElementById("mySubmit");
Tip: You can also access <input type="submit"> by searching through the elements collection of a form.

Create an Input Submit Object
You can create an <input> element with type="submit" by using the document.createElement() method:

Example
var x = document.createElement("INPUT");
x.setAttribute("type", "submit");
Input Submit Object Properties
Property	Description
autofocus	Sets or returns whether a submit button should automatically get focus when the page loads
defaultValue	Sets or returns the default value of a submit button
disabled	Sets or returns whether the submit button is disabled, or not
form	Returns a reference to the form that contains the submit button
formAction	Sets or returns the value of the formaction attribute of a submit button
formEnctype	Sets or returns the value of the formenctype attribute of a submit button
formMethod	Sets or returns the value of the formmethod attribute of a submit button
formNoValidate	Sets or returns whether the form-data should be validated or not, on submission
formTarget	Sets or returns the value of the formtarget attribute of a submit button
name	Sets or returns the value of the name attribute of a submit button
type	Returns which type of form element the submit button is
value	Sets or returns the value of the value attribute of the submit button
Standard Properties and Events
The Input Submit object also supports the standard properties and events.
*/