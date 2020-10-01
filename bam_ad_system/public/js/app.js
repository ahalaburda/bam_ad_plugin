// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown
// Update the count down every 1 second
var x = setInterval(function() {

	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var days_remaining = document.getElementById('days_remaining');
	var countDownDate = new Date().getTime() - 0;

	// Find the distance between now and the count down date
	var now = new Date().getTime();
	var remaining = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(remaining / (1000 * 60 * 60 * 24));
	var hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((remaining % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	document.getElementById("days_remaining").innerHTML = days + "d ";
	document.getElementById("hours_remaining").innerHTML = hours + "d ";
	document.getElementById("minutes_remaining").innerHTML = minutes + "d ";
	document.getElementById("seconds_remaining").innerHTML = seconds + "d ";

  // If the count down is over, write some text 
  if (remaining < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);