/*
HTML DOM Input Image Object
Input Image Object
The Input Image object represents an HTML <input> element with type="image".

Access an Input Image Object
You can access an <input> element with type="image" by using getElementById():

var x = document.getElementById("myImage");
Tip: You can also access <input type="image"> by searching through the elements collection of a form.

Create an Input Image Object
You can create an <input> element with type="image" by using the document.createElement() method:

var x = document.createElement("INPUT");
x.setAttribute("type", "image");
Input Image Object Properties
Property	Description
alt	Sets or returns the value of the alt attribute of an input image
autofocus	Sets or returns whether an input image should automatically get focus when the page loads
defaultValue	Sets or returns the default value of an input image
disabled	Sets or returns whether an input image is disabled, or not
form	Returns a reference to the form that contains the input image
formAction	Sets or returns the value of the formaction attribute of an input image
formEnctype	Sets or returns the value of the formenctype attribute of an input image
formMethod	Sets or returns the value of the formmethod attribute of an input image
formNoValidate	Sets or returns whether the form-data should be validated or not, on submission
formTarget	Sets or returns the value of the formtarget attribute an input image
height	Sets or returns the value of the height attribute of the input image
name	Sets or returns the value of the name attribute of an input image
src	Sets or returns the value of the src attribute of the input image
type	Returns which type of form element the input image is
value	Sets or returns the value of the value attribute of an input image
width	Sets or returns the value of the width attribute of the input image
Standard Properties and Events
The Input Image object also supports the standard properties and events.


*/