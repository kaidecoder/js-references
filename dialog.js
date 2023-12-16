/*
HTML DOM Dialog Object
Dialog Object
The Dialog object represents an HTML <dialog> element.

Access a Dialog Object
You can access a <dialog> element by using getElementById():

Example
const element = document.getElementById("myDialog");
element.open = true;
Create a Dialog Object
You can create a <dialog> element by using the document.createElement() method:

Example
const dialog = document.createElement("DIALOG");
Dialog Object Properties
Property	Description
open	Sets or returns whether a dialog should be open or not
returnValue	Sets or returns the dialog's return value
Dialog Object Methods
Method	Description
close()	Closes the dialog
show()	Shows the dialog
showModal()	Shows the dialog and makes it the top-most modal dialog
Standard Properties and Events
The Dialog object also supports the standard properties and events.


*/