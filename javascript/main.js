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
		let fullDate = new Date();
		let month = fullDate.getMonth();
		let date = fullDate.getDate();
		let year = fullDate.getFullYear();
		let day = fullDate.getDay();
		let	hours = fullDate.getHours();
		let	minutes = fullDate.getMinutes();
		let	seconds = fullDate.getSeconds();
		let period = (hours >= 12) ? "pm" : "am";

		window.clock = {};
		window.clock.time = {
			fullDate: fullDate,
			month: month,
			date: date,
			year: year,
			day: day,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
			period: period
		};
	};

	const displayCurrentTime = () => {
		let day = window.clock.time.day;
		let month = window.clock.time.month;
		let date = window.clock.time.date;
		let year = window.clock.time.year;
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
		//formats day
		let days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
		let dayText = ``;
		if(days[day].length === 6) dayText = `<span style="color: #2b2828;">ooo</span>${days[day]}`;
		if(days[day].length === 7) dayText = `<span style="color: #2b2828;">oo</span>${days[day]}`;
		if(days[day].length === 8) dayText = `<span style="color: #2b2828;">o</span>${days[day]}`;
		if(days[day].length === 9) dayText = `<span style="color: #2b2828;"></span>${days[day]}`;
		//formats mobile day
		let mobileDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
		//formats month
		let months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
		//formats date
		date = (date <= 9) ? ("0" + date) : date;

		// targets the html
		const dayHtml = document.getElementsByClassName('day-alpha')[0];
		const mobileDayHtml = document.getElementsByClassName('day-alpha-mobile')[0];
		const monthHtml = document.getElementsByClassName('month-alpha')[0];
		const dateHtml = document.getElementsByClassName('date-number')[0];
		const yearHtml = document.getElementsByClassName('year-number')[0];
		const hoursHtml = document.getElementsByClassName('hours')[0];
		const minutesHtml = document.getElementsByClassName('minutes')[0];
		const secondsHtml = document.getElementsByClassName('seconds')[0];
		const periodHtml = document.getElementsByClassName(period)[0];

		// changes the html values
		dayHtml.innerHTML = dayText;
		mobileDayHtml.innerHTML = mobileDays[day];
		monthHtml.innerHTML = months[month];
		dateHtml.innerHTML = date;
		yearHtml.innerHTML = year;
		hoursHtml.innerHTML = hours;
		minutesHtml.innerHTML = minutes;
		secondsHtml.innerHTML = seconds;
		periodHtml.classList.add("light-on");
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
