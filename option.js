/* 
HTML DOM Option Object
Option Object
The Option object represents an HTML <option> element.

Access an Option Object
You can access an <option> element by using getElementById():

Example
var x = document.getElementById("myOption");
Tip: You can also access an Option object by searching through the elements collection of a form, or the options collection of a drop-down list.

Create an Option Object
You can create an <option> element by using the document.createElement() method:

Example
var x = document.createElement("OPTION");
Option Object Properties
Property	Description
defaultSelected	Returns the default value of the selected attribute
disabled	Sets or returns whether an option is disabled, or not
form	Returns a reference to the form that contains the option
index	Sets or returns the index position of an option in a drop-down list
label	Sets or returns the value of the label attribute of an option in a drop-down list
selected	Sets or returns the selected state of an option
text	Sets or returns the text of an option
value	Sets or returns the value of an option to be sent to the server
Standard Properties and Events
The Option object also supports the standard properties and events.
*/