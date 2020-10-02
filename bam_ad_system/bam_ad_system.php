<?php 

/*
Plugin Name: Ad System for WordPress
Plugin URI: https://www.bornagainmedia.com/
Description: Basic Ad System for WordPress during  Full Stack Engineer (LATAM) interview process.
Author: Adrian Halaburda
Version: 0.1
Author URI: https://github.com/ahalaburda
*/


function ad_system($atts) {
	wp_enqueue_style('mystyle', plugins_url('/public/css/mystyle.css', __FILE__));
	wp_enqueue_script('app', plugins_url('/public/js/app.js', __FILE__), array('jquery'), null, true );
	

	$args = shortcode_atts(array(
		'title' => 'New Ad',
		'type' => 'default',
		'template' => 'default',
		'backgroundColor' => '#fff',
		'url_image' => 'https://images-na.ssl-images-amazon.com/images/I/61jq6q0FyJL._AC_SY679_.jpg',
		'countdown_days' => '00',
		'countdown_hours' => '04',
		'countdown_minutes' => '00',
		'countdown_seconds' => '00',
		'ad_info' => 'Our NFL Pick: Vikings +3',
		'ad_message' => 'Hurry up! 25 people have placed this bet',
		'button_name' => 'BET & WIN',
		'button_phrase' => 'Trusted Sportsbetting.ag',
		'' => '',
	),$atts);

	$ad_title = $args["title"];
	$ad_type = $args["type"];
	$ad_template = $args["template"];
	$ad_backgroundColor = $args["backgroundColor"];

	$countdown_days = $args["countdown_days"];
	$countdown_hours = $args["countdown_hours"];
	$countdown_minutes = $args["countdown_minutes"];
	$countdown_seconds = $args["countdown_seconds"];

	$url_image =  $args["url_image"];
	$remaining_time  =  $args["remaining_time"];
	$ad_message  =  $args["ad_message"];
	$ad_info  =  $args["ad_info"];
	$button_name  =  $args["button_name"];
	$button_phrase =  $args["button_phrase"];

		printf('
				<div class="BAM_ad">
					<div class="cell BAM_ad_left">
						<img src="%s">
					</div>
					<div class="cell BAM_ad_center">
						<div class="remaining_time" id="clock">
							<div>
							<div class="clock_text">Days</div>
							<span class="days" id="days_remaining" value="%s">%s</span>
							</div>
							<div>
							<div class="clock_text">Hours</div>
							<span class="hours" id="hours_remaining" value="%s">%s</span>
							</div>
							<div>
							<div class="clock_text">Minutes</div>
							<span class="minutes" id="minutes_remaining" value="%s">%s</span>
							</div>
							<div>
							<div class="clock_text">Seconds</div>
							<span class="seconds" id="seconds_remaining" value="%s">%s</span>
							</div>
						</div>
						<div class="title">
							<span> %s </span>
						</div>
						<div class="description">
							<span> %s </span>
						</div>
					</div>
					<div class="cell BAM_ad_right">
						<div class="">
							<button type="button" class="ad_button">%s</button>
						</div>
						<div class="button_ad_info">
							<span class="button_phrase">%s</span>
						</div>
					</div>
				</div>
				',
				$url_image,
				$countdown_days,
				$countdown_days,
				$countdown_hours,
				$countdown_hours,
				$countdown_minutes,
				$countdown_minutes,
				$countdown_seconds,
				$countdown_seconds,
				$ad_info,
				$ad_message,
				$button_name,
				$button_phrase
	);
}

add_shortcode("ad_system", "ad_system");
?>