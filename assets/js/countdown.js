document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const date = document.getElementById('timer').dataset.date;

    const updateTimer = () => {
        const endTime = new Date(date).getTime();
        const now = new Date().getTime();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('timer').innerHTML = `
                <div class="date-box">
                    <div class="numbers">00</div><div class="text">days</div>
                </div>
                <div class="date-box">
                    <div class="numbers">00</div><div class="text">hours</div>
                </div>
                <div class="date-box">
                    <div class="numbers">00</div><div class="text">minutes</div>
                </div>
                <div class="date-box">
                    <div class="numbers">00</div><div class="text">seconds</div>
                </div>`;
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        hours = hours < 10 ? `0${hours}` : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        document.getElementById('timer').innerHTML = `
            <div class="date-box">
                <div class="numbers">${days}</div><div class="text">days</div>
            </div>
            <div class="date-box">
                <div class="numbers">${hours}</div><div class="text">hours</div>
            </div>
            <div class="date-box">
                <div class="numbers">${minutes}</div><div class="text">minutes</div>
            </div>
            <div class="date-box">
                <div class="numbers">${seconds}</div><div class="text">seconds</div>
            </div>`;
    };

    const timer = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call to display the countdown immediately
});
