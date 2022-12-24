const clock = document.querySelector(".clock");
const calender = document.querySelector(".calender");

/**************************/
/* draw timeCalender -----*/
/**************************/

timeCalender(); //initialization in HTML
setInterval(timeCalender, 1000); //call every 1000milisec(1sec)



/*************************/
/* event function -------*/
/*************************/

function timeCalender()
{
	const date = new Date();

	/* calender */
	const year = date.getFullYear().toString();
	const month = strMonth(date.getMonth());
	const day = date.getDate().toString().padStart(2, "0");

	/* clock */
	const hour = date.getHours().toString().padStart(2, "0");
	const min = date.getMinutes().toString().padStart(2, "0");
	const sec = date.getSeconds().toString().padStart(2, "0");

	calender.innerText = year + " " + month + " " + day;
	clock.innerText = hour + ":" + min + ":" + sec;
}

function strMonth(val)
{
	switch (val) {
		case 0 :
			return "Jan";
		case 1 :
			return "Feb";
		case 2 :
			return "Mar";
		case 3 :
			return "Apr";
		case 4 :
			return "May";
		case 5 :
			return "Jun";
		case 6 :
			return "Jul";
		case 7 :
			return "Aug";
		case 8 :
			return "Sep";
		case 9 :
			return "Oct";
		case 10 :
			return "Nov";
		case 11 :
			return "Dec";
	}
}
