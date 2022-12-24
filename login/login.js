/* select tag object */
const loginForm = document.querySelector(".login");
const loginInput = loginForm.querySelector("input");
const loginBttn = loginForm.querySelector("button");
const greetMsg = document.querySelector(".greetMsg");

/*************************/
/* login page logic -----*/
/*************************/

/* Default page */
//case by case : logined or not logined
const localStorageUserName = localStorage.getItem("userName");
if ( localStorageUserName === null)
{
	loginForm.classList.remove("hidden");
	loginBttn.addEventListener("click", onClickLoginBtn);
}
else
{
	loginForm.classList.add("hidden");
	greetMsg.classList.remove("hidden");
	greetMsg.innerText = "Hello " + localStorageUserName;
}




/*************************/
/* event function -------*/
/*************************/

function onClickLoginBtn(event)
{
	event.preventDefault(); //prevent window refresh
	const userName = loginInput.value;
	loginForm.classList.add("hidden"); //.hidden in loginStyle.css

	//show greeting message
	greetMsg.innerText = "Hello " + userName;
	greetMsg.classList.remove("hidden");

	//save userName in the local storage of the web browser
	localStorage.setItem("userName", userName);
}
