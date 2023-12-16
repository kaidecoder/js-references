/*
HTML DOM Input FileUpload Object
Input FileUpload Object
The Input FileUpload object represents an HTML <input> element with type="file".

Access an Input FileUpload Object
You can access an <input> element with type="file" by using getElementById():

Example
var x = document.getElementById("myFile");
Tip: You can also access <input type="file"> by searching through the elements collection of a form.

Create an Input FileUpload Object
You can create an <input> element with type="file" by using the document.createElement() method:

Example
var x = document.createElement("INPUT");
x.setAttribute("type", "file");
ADVERTISEMENT

ADVERTISEMENT

Input FileUpload Object Properties
Property	Description
accept	Sets or returns the value of the accept attribute of the file upload button
autofocus	Sets or returns whether a file upload button should automatically get focus upon page load
defaultValue	Sets or returns the default value of the file upload button
disabled	Sets or returns whether the file upload button is disabled, or not
files	Returns a FileList object that represents the file or files selected with the file upload button
form	Returns a reference to the form that contains the file upload button
multiple	Sets or returns whether a user is allowed to select more than one file in the file upload field
name	Sets or returns the value of the name attribute of the file upload button
required	Sets or returns whether a file in the file upload field must be selected before submitting a form
type	Returns which type of form element the file upload button is
value	Returns the path or the name of the selected file
Standard Properties and Events
The Input FileUpload object also supports the standard properties and events.


*/