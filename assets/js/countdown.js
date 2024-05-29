$(document).ready(function () {
    'use strict';
    /*========== Countdown start ================*/
    var date = $('#timer').data('date');

    // countdown
    let timer = setInterval(function () {
        const endTime = new Date(date);
        // console.log(endTime);
        endTime = Date.parse(endTime) / 1000;

        let now = new Date();
        now = Date.parse(now) / 1000;

        let timeLeft = endTime - now;

        // math
        const days = Math.floor(timeLeft / 86400);
        const hours = Math.floor((timeLeft - days * 86400) / 3600);
        const minutes = Math.floor(
            (timeLeft - days * 86400 - hours * 3600) / 60
        );
        const seconds = Math.floor(
            timeLeft - days * 86400 - hours * 3600 - minutes * 60
        );

        if (hours < '10') {
            hours = '0' + hours;
        }
        if (minutes < '10') {
            minutes = '0' + minutes;
        }
        if (seconds < '10') {
            seconds = '0' + seconds;
        }

        // display
        document.getElementById('timer').innerHTML = `<div class="date-box">
			<div class="numbers">${days}</div>
			<div class="text">days</div>
		</div> 
		<div class="date-box">
			<div class="numbers">${hours}</div>
			<div class="text">hours</div>
		</div>
		<div class="date-box">
			<div class="numbers">${minutes}</div>
			<div class="text">minutes</div>
		</div>
		<div class="date-box">
			<div class="numbers">${seconds}</div>
			<div class="text">seconds</div>
		</div>`;
    }, 100);

    const d = new Date();
    const curr_date = d.getDate();
    const curr_month = d.getMonth() + 1;
    const curr_year = d.getFullYear();
});
