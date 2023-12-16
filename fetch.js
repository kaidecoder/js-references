/*
JavaScript Fetch API
Examples
fetch(file)
.then(x => x.text())
.then(y => myDisplay(y));
Fetch is based on async and await. The example might be easier to understand like this:

async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
  myDisplay(y);
}
Use understandable names instead of x and y:

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  myDisplay(myText);
}
Description
The fetch() method starts the process of fetching a resource from a server.

The fetch() method returns a Promise that resolves to a Response object.

😀 No need for XMLHttpRequest anymore.

Syntax
fetch(file)
Parameters
Parameter	Description
file	Optional.
The name of a resource to fetch.
Return Value
Type	Description
Promise	A Promise that resolves to a Response object.
*/