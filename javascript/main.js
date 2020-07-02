(() => {
	const init = () => {
		updateClock();
		setInterval(() => {
			updateClock();
		}, 1000);
	};

	const updateClock = () => {
		resetClock();
		getCurrentTime();
		displayCurrentTime();
	};

	const getCurrentTime = () => {
		let date = new Date();
		let day = date.getDay();
		let	hours = date.getHours();
		let	minutes = date.getMinutes();
		let	seconds = date.getSeconds();
		let period = (hours >= 12) ? "pm" : "am";		

		window.clock = {};
		window.clock.time = {
			date: date,
			day: day,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
			period: period
		};
	};

	const displayCurrentTime = () => {
		let day = window.clock.time.day;
		let hours = window.clock.time.hours;
		let minutes = window.clock.time.minutes;
		let seconds = window.clock.time.seconds;
		let period = window.clock.time.period;

		//formats hours
		hours = (hours > 12) ? (hours - 12) : hours;
		hours = (hours === 0) ? 12 : hours;
		hours = (hours <= 9) ? ("0" + hours) : hours;
		//formats minutes
		minutes = (minutes <= 9) ? ("0" + minutes) : minutes;
		//formats seconds
		seconds = (seconds <= 9) ? ("0" + seconds) : seconds;

		// targets the html
		const hoursHtml = document.getElementsByClassName('hours')[0];
		const minutesHtml = document.getElementsByClassName('minutes')[0];
		const secondsHtml = document.getElementsByClassName('seconds')[0];
		const periodHtml = document.getElementsByClassName(period)[0];
		const dayHtml = document.getElementsByClassName("day")[day];

		//changes the html values
		hoursHtml.innerHTML = hours;
		minutesHtml.innerHTML = minutes;
		secondsHtml.innerHTML = seconds;
		periodHtml.classList.add("light-on");
		dayHtml.classList.add("light-on");
	};

	const resetClock = () => {
		const lights = document.querySelectorAll(".light-on");

		if(lights) {
			lights.forEach(item => {
				item.classList.remove("light-on")
			});
		}
	};

	return init();
})()
