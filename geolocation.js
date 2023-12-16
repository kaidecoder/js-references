/*
Geolocation API
The Geolocation Object
The Geolocation object allows the user to provide their location to web applications. For privacy reasons, the user is asked for permission to report location information.

Note: This feature is available only in secure contexts (HTTPS).

Note: Geolocation is most accurate for devices with GPS, like iPhone.

The Geolocation API is published through the navigator.geolocation object.

Geolocation Object Properties
Property	Description
coordinates	Returns the position and altitude of the device on Earth
position	Returns the position of the concerned device at a given time
positionError	Returns the reason of an error occurring when using the geolocating device
positionOptions	Describes an object containing option properties to pass as a parameter of Geolocation.getCurrentPosition() and Geolocation.watchPosition()
Geolocation Object Methods
Method	Description
clearWatch()	Unregister location/error monitoring handlers previously installed using Geolocation.watchPosition()
getCurrentPosition()	Returns the current position of the device
watchPosition()	Returns a watch ID value that then can be used to unregister the handler by passing it to the Geolocation.clearWatch() method
*/