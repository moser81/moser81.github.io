/*
Everythin in between is a comment.
*/
//This is a comment
const myImage = document.querySelector("img");

myImage.onclick = () => {
	const mySrc	= myImage.getAttribute("src");
	if (mySrc === "images/galaxy.avif") {
		myImage.setAttribute("src", "images/supernovablue.jpeg");
	} else {
		myImage.setAttribute("src", "images/galaxy.avif");
	}
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Space is cool, ${myName}`;
  }
}

myButton.onclick = () => {
	setUserName();
};