
function clock(){
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var currentTime = [];
	var meridian = (hours >= 12) ? 'pm' : 'am';

	//make clock a 12 hour clock instead of 24 hour clock
	hours = (hours > 12) ? (hours - 12) : hours;

	//invokes function to make sure number has at least two digits
	hours = addZero(hours);
	minutes = addZero(minutes);
	seconds = addZero(seconds);

	//formats the time
	currentTime.push(hours, minutes, seconds);
	currentTime = currentTime.join(":") + " " + meridian;


	document.getElementsByClassName('hours')[0].innerHTML = hours;
	document.getElementsByClassName('minutes')[0].innerHTML = minutes;
	document.getElementsByClassName('seconds')[0].innerHTML = seconds;
	document.getElementsByClassName('meridian')[0].innerHTML = meridian;

	console.log(currentTime);
	console.log(hours);

}

//turns single digit numbers to two digit numbers by placing a zero in fornt
function addZero (val){
	if(val <= 9){
		val = "0" + val;
		return val;
	}else{
		return val;
	}
}



setInterval(clock, 1000);


