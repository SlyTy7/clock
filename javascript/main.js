//invokes functions as soon as window loads
window.onload = function(){
	clock();
	setInterval(clock, 1000);
};

//gets current time and changes html to reflect it
function clock(){
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var meridian = (hours >= 12) ? 'pm' : 'am';

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
	document.getElementsByClassName('meridian')[0].innerHTML = meridian;
	
}

//turns single digit numbers to two digit numbers by placing a zero in front
function addZero (val){
	return (val <= 9 && "0" + val) || val;
}


