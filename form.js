/*
HTML DOM Form Object
Form Object
The Form object represents an HTML <form> element.

Access a Form Object
You can access a <form> element by using getElementById():

Example
var x = document.getElementById("myForm");
Tip: You can also access a <form> element by using the forms collection.

Create a Form Object
You can create a <form> element by using the document.createElement() method:

Example
var x = document.createElement("FORM");
Form Object Collections
Collection	Description
elements	Returns a collection of all elements in a form
ADVERTISEMENT

ADVERTISEMENT

Form Object Properties
Property	Description
acceptCharset	Sets or returns the value of the accept-charset attribute in a form
action	Sets or returns the value of the action attribute in a form
autocomplete	Sets or returns the value of the autocomplete attribute in a form
encoding	Alias of enctype
enctype	Sets or returns the value of the enctype attribute in a form
length	Returns the number of elements in a form
method	Sets or returns the value of the method attribute in a form
name	Sets or returns the value of the name attribute in a form
noValidate	Sets or returns whether the form-data should be validated or not, on submission
target	Sets or returns the value of the target attribute in a form
Form Object Methods
Method	Description
reset()	Resets a form
submit()	Submits a form
Standard Properties and Events
The Form object also supports the standard properties and events.


*/