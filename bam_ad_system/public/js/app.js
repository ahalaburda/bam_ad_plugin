// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown
// Update the count down every 1 second
var days_remaining = document.getElementById('days_remaining').innerText;
var hours_remaining = document.getElementById('hours_remaining').innerText;
var minutes_remaining = document.getElementById('minutes_remaining').innerText;
var seconds_remaining = document.getElementById('seconds_remaining').innerText;
var days_remaining =  parseInt(days_remaining, 10);
var hours_remaining =  parseInt(hours_remaining, 10);
var minutes_remaining =  parseInt(minutes_remaining, 10);
var seconds_remaining =  parseInt(seconds_remaining, 10);
var days_remaining = days_remaining * 86400000;
var hours_remaining = hours_remaining * 3600000;
var minutes_remaining = minutes_remaining * 60000;
var seconds_remaining = seconds_remaining * 1000;
var total_time_get = days_remaining + hours_remaining + minutes_remaining + seconds_remaining;
var today = new Date().getTime();
var countDownDate = today + total_time_get;

var x = setInterval(function() {

var now = new Date().getTime();

// Find the distance between now and the count down date
var remaining =  countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(remaining / (1000 * 60 * 60 * 24));
var hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((remaining % (1000 * 60)) / 1000);

// Output the result in an element with id="demo"
document.getElementById("days_remaining").innerHTML = days;
document.getElementById("hours_remaining").innerHTML = hours;
document.getElementById("minutes_remaining").innerHTML = minutes;
document.getElementById("seconds_remaining").innerHTML = seconds;

// 	// If the count down is over, write some text 
	// if (remaining < 0) {
	// clearInterval(x);
	// document.getElementById("demo").innerHTML = "EXPIRED";
	// }
}, 1000);