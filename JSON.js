/*
JSON (JavaScript Object Notation)
JSON is a format for storing and transporting data.

JSON is text, and text can be transported anywhere, and read by any programming language.

JavaScript Objects can be converted into JSON, and JSON can be converted back into JavaScript Objects.

This way we can work with the data as JavaScript objects, with no complicated parsing or translations.

Example
Sending JSON:

// a JavaScript object...:
var myObj = { "name":"John", "age":31, "city":"New York" };

// ...converted into JSON:
var myJSON = JSON.stringify(myObj);

// send JSON:
window.location = "demo_json.php?x=" + myJSON;
For a tutorial about JSON, read our JSON Tutorial.

JSON Methods
Method	Description
parse()	Parses a JSON string and returns a JavaScript object
stringify()	Convert a JavaScript object to a JSON string
Valid Data Types
In JSON, values must be one of the following data types:

a string
a number
an object (containing valid JSON values)
an array
a boolean
null
JSON values cannot be one of the following data types:

a function
a date
undefined
More Examples
Example
Receiving JSON:

// myJSON is text received in JSON format.
// Convert JSON into a JavaScript object:
var myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name;
Example
Storing data as JSON, using localStorage

// Storing data:
myObj = { "name":"John", "age":31, "city":"New York" };
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;

*/