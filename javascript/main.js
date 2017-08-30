
function clock(){
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var time = [];

	time.push(hours, minutes, seconds);
	time = time.join(":");

	console.log(time);
};

setInterval(clock, 1000);

