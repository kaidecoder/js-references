/*
Storage API
Storage Object
The Storage object of the Web Storage API provides access to the session storage or local storage for a particular domain. This allows you to read, add, modify, and delete stored data items.

Storage Object Properties and Methods
Property/Method	Description
clear()	Empty all key out of the storage
getItem()	Returns the value of the specified key name
key()	Returns the name of the nth key in the storage
length	Returns the number of data items stored in the Storage object
setItem()	Adds a key to the storage, or updates a key's value if it already exists
removeItem()	Removes a key from the storage
Related Pages for Web Storage API
Property	Description
window.localStorage	Allows to save key/value pairs in a web browser. Stores the data with no expiration date
window.sessionStorage	Allows to save key/value pairs in a web browser. Stores the data for one session
Cookies vs Local Storage
Cookies are for client-server (browser-server) applications.

Local storage are for client (browser) applications.

Cookies are associated with websites. If the data is for client use, sending cookies in every HTTP header is waste of bandwith.

Some users have cookies disabled as a rule in their browsers.

A Cookie has a size limit of 4 Kilobytes. Local Storage has a limit of 5 Megabytes per domain.

A Cookie have expiration date. Local Storage has not.
*/