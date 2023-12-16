/* 
JavaScript Events
HTML events are "things" that happen to HTML elements.

When JavaScript is used in HTML pages, JavaScript can "react" on these events.

HTML Events
An HTML event can be something the browser does, or something a user does.

Here are some examples of HTML events:

An HTML web page has finished loading
An HTML input field was changed
An HTML button was clicked
Often, when events happen, you may want to do something.

JavaScript lets you execute code when events are detected.

HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

With single quotes:

<element event='some JavaScript'>
With double quotes:

<element event="some JavaScript">
In the following example, an onclick attribute (with code), is added to a <button> element:

Example
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
In the example above, the JavaScript code changes the content of the element with id="demo".

In the next example, the code changes the content of its own element (using this.innerHTML):

Example
<button onclick="this.innerHTML = Date()">The time is?</button>
JavaScript code is often several lines long. It is more common to see event attributes calling functions:

Example
<button onclick="displayDate()">The time is?</button>


Common HTML Events

Event	Occurs When	    Belongs To
abort	The loading of a media is aborted	UiEvent, Event
afterprint	A page has started printing	Event
animationend	A CSS animation has completed	AnimationEvent
animationiteration	A CSS animation is repeated	AnimationEvent
animationstart	A CSS animation has started	AnimationEvent
beforeprint	A page is about to be printed	Event
beforeunload	Before a document is about to be unloaded	UiEvent, Event
blur	An element loses focus	FocusEvent
canplay	The browser can start playing a media (has buffered enough to begin)	Event
canplaythrough	The browser can play through a media without stopping for buffering	Event
change	The content of a form element has changed	Event
click	An element is clicked on	MouseEvent
contextmenu	An element is right-clicked to open a context menu	MouseEvent
copy	The content of an element is copied	ClipboardEvent
cut	The content of an element is cut	ClipboardEvent
dblclick	An element is double-clicked	MouseEvent
drag	An element is being dragged	DragEvent
dragend	Dragging of an element has ended	DragEvent
dragenter	A dragged element enters the drop target	DragEvent
dragleave	A dragged element leaves the drop target	DragEvent
dragover	A dragged element is over the drop target	DragEvent
dragstart	Dragging of an element has started	DragEvent
drop	A dragged element is dropped on the target	DragEvent
durationchange	The duration of a media is changed	Event
ended	A media has reach the end ("thanks for listening")	Event
error	An error has occurred while loading a file	ProgressEvent, UiEvent, Event
focus	An element gets focus	FocusEvent
focusin	An element is about to get focus	FocusEvent
focusout	An element is about to lose focus	FocusEvent
fullscreenchange	An element is displayed in fullscreen mode	Event
fullscreenerror	An element can not be displayed in fullscreen mode	Event
hashchange	There has been changes to the anchor part of a URL	HashChangeEvent
input	An element gets user input	InputEvent, Event
invalid	An element is invalid	Event
keydown	A key is down	KeyboardEvent
keypress	A key is pressed	KeyboardEvent
keyup	A key is released	KeyboardEvent
load	An object has loaded	UiEvent, Event
loadeddata	Media data is loaded	Event
loadedmetadata	Meta data (like dimensions and duration) are loaded	Event
loadstart	The browser starts looking for the specified media	ProgressEvent
message	A message is received through the event source	Event
mousedown	The mouse button is pressed over an element	MouseEvent
mouseenter	The pointer is moved onto an element	MouseEvent
mouseleave	The pointer is moved out of an element	MouseEvent
mousemove	The pointer is moved over an element	MouseEvent
mouseover	The pointer is moved onto an element	MouseEvent
mouseout	The pointer is moved out of an element	MouseEvent
mouseup	A user releases a mouse button over an element	MouseEvent
mousewheel	Deprecated. Use the wheel event instead	WheelEvent
offline	The browser starts working offline	Event
online	The browser starts working online	Event
open	A connection with the event source is opened	Event
pagehide	User navigates away from a webpage	PageTransitionEvent
pageshow	User navigates to a webpage	PageTransitionEvent
paste	Some content is pasted in an element	ClipboardEvent
pause	A media is paused	Event
play	The media has started or is no longer paused	Event
playing	The media is playing after being paused or buffered	Event
popstate	The window's history changes	PopStateEvent
progress	The browser is downloading media data	Event
ratechange	The playing speed of a media is changed	Event
resize	The document view is resized	UiEvent, Event
reset	A form is reset	Event
scroll	An scrollbar is being scrolled	UiEvent, Event
search	Something is written in a search field	Event
seeked	Skipping to a media position is finished	Event
seeking	Skipping to a media position is started	Event
select	User selects some text	UiEvent, Event
show	A <menu> element is shown as a context menu	Event
stalled	The browser is trying to get unavailable media data	Event
storage	A Web Storage area is updated	StorageEvent
submit	A form is submitted	Event
suspend	The browser is intentionally not getting media data	Event
timeupdate	The playing position has changed (the user moves to a different point in the media)	Event
toggle	The user opens or closes the <details> element	Event
touchcancel	The touch is interrupted	TouchEvent
touchend	A finger is removed from a touch screen	TouchEvent
touchmove	A finger is dragged across the screen	TouchEvent
touchstart	A finger is placed on a touch screen	TouchEvent
transitionend	A CSS transition has completed	TransitionEvent
unload	A page has unloaded	UiEvent, Event
volumechange	The volume of a media is changed (includes muting)	Event
waiting	A media is paused but is expected to resume (e.g. buffering)	Event
wheel	The mouse wheel rolls up or down over an element	WheelEvent

JavaScript Event Handlers
Event handlers can be used to handle and verify user input, user actions, and browser actions:

Things that should be done every time a page loads
Things that should be done when the page is closed
Action that should be performed when a user clicks a button
Content that should be verified when a user inputs data
And more ...
Many different methods can be used to let JavaScript work with events:

HTML event attributes can execute JavaScript code directly
HTML event attributes can call JavaScript functions
You can assign your own event handler functions to HTML elements
You can prevent events from being sent or being handled

Event Objects
When an event occurs in HTML, the event belongs to a certain event object, like a mouse click event belongs to the MouseEvent object.

The Event Object
All event objects are based on the Event Object.

All event objects inherit the Event Object's properties and methods.

Object	Description
Event	The parent of all event objects
Event Objects
Object	Handles
AnimationEvent	CSS animations
ClipboardEvent	Modification of the clipboard
DragEvent	Drag and drop interaction
FocusEvent	Focus-related events
HashChangeEvent	Changes in the anchor part of an URL
InputEvent	User input
KeyboardEvent	Keyboard interaction
MouseEvent	Mouse interaction
PageTransitionEvent	Navigation between web pages
PopStateEvent	Changes in the page history
ProgressEvent	The progress of loading external files
StorageEvent	Changes in the Web Storage
TouchEvent	Touch interaction
TransitionEvent	CSS transitions
UiEvent	User interface interaction
WheelEvent	Mouse-wheel interaction


HTML Event Properties
HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document.

Events are normally used in combination with functions, and the function will not be executed before the event occurs (such as when a user clicks a button).

For a tutorial about Events, read our JavaScript Events Tutorial.


HTML DOM Event Properties
Property	Description	Belongs To
altKey	Returns whether the "ALT" key was pressed when the mouse event was triggered	MouseEvent
altKey	Returns whether the "ALT" key was pressed when the key event was triggered	KeyboardEvent, TouchEvent
animationName	Returns the name of the animation	AnimationEvent
bubbles	Returns whether or not a specific event is a bubbling event	Event
button	Returns which mouse button was pressed when the mouse event was triggered	MouseEvent
buttons	Returns which mouse buttons were pressed when the mouse event was triggered	MouseEvent
cancelable	Returns whether or not an event can have its default action prevented	Event
charCode	Deprecated (Avoid using it)
Use the key property instead	KeyboardEvent
changeTouches	Returns a list of all the touch objects whose state changed between the previous touch and this touch	TouchEvent
clientX	Returns the horizontal coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered	MouseEvent, TouchEvent
clientY	Returns the vertical coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered	MouseEvent, TouchEvent
clipboardData	Returns an object containing the data affected by the clipboard operation	ClipboardData
code	Returns the code of the key that triggered the event	KeyboardEvent
composed	Returns whether the event is composed or not	Event
ctrlKey	Returns whether the "CTRL" key was pressed when the mouse event was triggered	MouseEvent
ctrlKey	Returns whether the "CTRL" key was pressed when the key event was triggered	KeyboardEvent, TouchEvent
currentTarget	Returns the element whose event listeners triggered the event	Event
data	Returns the inserted characters	InputEvent
dataTransfer	Returns an object containing the data being dragged/dropped, or inserted/deleted	DragEvent, InputEvent
defaultPrevented	Returns whether or not the preventDefault() method was called for the event	Event
deltaX	Returns the horizontal scroll amount of a mouse wheel (x-axis)	WheelEvent
deltaY	Returns the vertical scroll amount of a mouse wheel (y-axis)	WheelEvent
deltaZ	Returns the scroll amount of a mouse wheel for the z-axis	WheelEvent
deltaMode	Returns a number that represents the unit of measurements for delta values (pixels, lines or pages)	WheelEvent
detail	Returns a number that indicates how many times the mouse was clicked	UiEvent
elapsedTime	Returns the number of seconds an animation has been running	AnimationEvent
elapsedTime	Returns the number of seconds a transition has been running	 
eventPhase	Returns which phase of the event flow is currently being evaluated	Event
getModifierState()	Returns an array containing target ranges that will be affected by the insertion/deletion	MouseEvent
inputType	Returns the type of the change (i.e "inserting" or "deleting")	InputEvent
isComposing	Returns whether the state of the event is composing or not	InputEvent, KeyboardEvent
isTrusted	Returns whether or not an event is trusted	Event
key	Returns the key value of the key represented by the event	KeyboardEvent
key	Returns the key of the changed storage item	StorageEvent
keyCode	Deprecated (Avoid using it)
Use the key property instead	KeyboardEvent
location	Returns the location of a key on the keyboard or device	KeyboardEvent
lengthComputable	Returns whether the length of the progress can be computable or not	ProgressEvent
loaded	Returns how much work has been loaded	ProgressEvent
metaKey	Returns whether the "META" key was pressed when an event was triggered	MouseEvent
metaKey	Returns whether the "meta" key was pressed when the key event was triggered	KeyboardEvent, TouchEvent
MovementX	Returns the horizontal coordinate of the mouse pointer relative to the position of the last mousemove event	MouseEvent
MovementY	Returns the vertical coordinate of the mouse pointer relative to the position of the last mousemove event	MouseEvent
newValue	Returns the new value of the changed storage item	StorageEvent
newURL	Returns the URL of the document, after the hash has been changed	HasChangeEvent
offsetX	Returns the horizontal coordinate of the mouse pointer relative to the position of the edge of the target element	MouseEvent
offsetY	Returns the vertical coordinate of the mouse pointer relative to the position of the edge of the target element	MouseEvent
oldValue	Returns the old value of the changed storage item	StorageEvent
oldURL	Returns the URL of the document, before the hash was changed	HasChangeEvent
onemptied	When something bad happens and the media file is suddenly unavailable (like unexpectedly disconnects)	 
pageX	Returns the horizontal coordinate of the mouse pointer, relative to the document, when the mouse event was triggered	MouseEvent
pageY	Returns the vertical coordinate of the mouse pointer, relative to the document, when the mouse event was triggered	MouseEvent
persisted	Returns whether the webpage was cached by the browser	PageTransitionEvent
propertyName	Returns the name of the CSS property associated with the animation or transition	AnimationEvent, TransitionEvent
pseudoElement	Returns the name of the pseudo-element of the animation or transition	AnimationEvent, TransitionEvent
region		MouseEvent
relatedTarget	Returns the element related to the element that triggered the mouse event	MouseEvent
relatedTarget	Returns the element related to the element that triggered the event	FocusEvent
repeat	Returns whether a key is being hold down repeatedly, or not	KeyboardEvent
screenX	Returns the horizontal coordinate of the mouse pointer, relative to the screen, when an event was triggered	MouseEvent
screenY	Returns the vertical coordinate of the mouse pointer, relative to the screen, when an event was triggered	MouseEvent
shiftKey	Returns whether the "SHIFT" key was pressed when an event was triggered	MouseEvent
shiftKey	Returns whether the "SHIFT" key was pressed when the key event was triggered	KeyboardEvent, TouchEvent
state	Returns an object containing a copy of the history entries	PopStateEvent
storageArea	Returns an object representing the affected storage object	StorageEvent
target	Returns the element that triggered the event	Event
targetTouches	Returns a list of all the touch objects that are in contact with the surface and where the touchstart event occured on the same target element as the current target element	TouchEvent
timeStamp	Returns the time (in milliseconds relative to the epoch) at which the event was created	Event
total	Returns the total amount of work that will be loaded	ProgressEvent
touches	Returns a list of all the touch objects that are currently in contact with the surface	TouchEvent
transitionend	A CSS transition has completed	TransitionEvent
type	Returns the name of the event	Event
url	Returns the URL of the changed item's document	StorageEvent
which	Deprecated (Avoid using it)
Use the button property instead	MouseEvent
which	Deprecated (Avoid using it)
Use the key property instead	KeyboardEvent
view	Returns a reference to the Window object where the event occurred	UiEvent
x	Alias for clientX	MouseEvent
y	Alias for clientY	MouseEvent


HTML Event Methods
HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document.

Events are normally used in combination with functions, and the function will not be executed before the event occurs (such as when a user clicks a button).

For a tutorial about Events, read our JavaScript Events Tutorial.


HTML DOM Event Methods
Method	Description	Belongs To
getModifierState()	Returns true if a specified key is activated	MouseEvent
getTargetRanges()	Returns an array containing target ranges that will be affected by the insertion/deletion	InputEvent
preventDefault()	Cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur	Event
stopImmediate
Propagation()	Prevents other listeners of the same event from being called	Event
stopPropagation()	Prevents further propagation of an event during event flow	Event



*/