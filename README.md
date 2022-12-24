# jsChromeApp
simple chrome app using js

1. login function
In /login , it has login function.
It uses the local strorage of the web browser.
localStorage has some methods like,
	- getItem()
	- setItem()
	- removeItem() ...

this also has hidden class defined in /login/loginStyle.css
It simply uses
```
display : none;
```
2. clock function
In /clock , calender and clock function is added.
This function is made using new Date(); constructor.
And setInterval() for calling timeCalender func every 1 sec.
