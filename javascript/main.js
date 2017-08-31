//invokes functions as soon as window loads
window.onload = function(){
	clock();
	ampm();
	setInterval(clock, 1000);
	setInterval(ampm, 1000);
};


//gets current time and changes html to reflect it
function clock(){
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	//make clock a 12 hour clock instead of 24 hour clock
	hours = (hours > 12) ? (hours - 12) : hours;

	//invokes function to make sure number has at least two digits
	hours = addZero(hours);
	minutes = addZero(minutes);
	seconds = addZero(seconds);

	//changes the html to match results
	document.getElementsByClassName('hours')[0].innerHTML = hours;
	document.getElementsByClassName('minutes')[0].innerHTML = minutes;
	document.getElementsByClassName('seconds')[0].innerHTML = seconds;
	
}

//turns single digit numbers to two digit numbers by placing a zero in front
function addZero (val){
	return (val <= 9) ? ("0" + val) : val;
}

//highlights either am or pm on clock
function ampm(){
	var date = new Date();
	var hours = date.getHours();
	var am = document.getElementsByClassName("am")[0].classList;
	var pm = document.getElementsByClassName("pm")[0].classList;
	

	(hours >= 12) ? pm.add("light-on") : am.add("light-on");
	(hours >= 12) ? am.remove("light-on") : pm.remove("light-on");
}

//highlights what day of the week it is