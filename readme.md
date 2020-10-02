# Born Again Media - Adrian Halaburda

#### Ad System for WordPress

#### Installation
Download the latest tagged archive (choose the "zip" option) or clone this repository.
Unzip the archive if you downloaded.
Copy the folder **bam_ad_system** to your /wp-content/plugins/ directory.
Go to the Plugins screen look for "Ad System for WordPress" and click **Activate**.
Just now you need to put in a post or a page the shortcode
```sh
[ad_system]
```
and Congrats!.

You can change the data by default setting a new value. This is the list of all the variables, is easy you just need to add to the shortcode the name of the argument next to the value wanted.

- **title**                     "Name of the advertisement"
- **type**                      "Type of the advertisement" 
- **template**                  "Name of the template" 
- **backgroundColor**           "If you want to change the default value of the background, need to be in hex example: #CCCCCC" 
- **url_image**                 "Image at the left section"
- **countdown_days**            "Days remaining" 
- **countdown_hours**           "Hours remaining" 
- **countdown_minutes**         "Minutes remaining"
- **countdown_seconds**         "Seconds remaining" 
- **ad_info**                   "Principal phrase at the center section" 
- **ad_message**                "Little message at the bottom of the center section" 
- **button_name**               "Button content at the right section" 
- **button_phrase**             "Phrase after the button at the right section"

#### Example:
```sh
[ad_system title="Spurs bet", type="NBA", ad_info="SPURS +1.5, hurry!"].
```
###SCREENSHOTS
```sh
[ad_system].
```
![Image of NFL]
(https://github.com/ahalaburda/bam_ad_plugin/blob/master/bam_ad_system/public/images/Screenshot_NFL.png)
```sh
[ad_system title="Spurs bet", type="NBA", ad_info="Our NBA Pick: Spurs +3"]
```
![Image of NBA]
(https://github.com/ahalaburda/bam_ad_plugin/blob/master/bam_ad_system/public/images/Screenshot_NBA.png)
```sh
[ad_system title="mlb bet", type="MLB", ad_info="Our MLB Pick: Dodgers +3"].
```
![Image of MLB]
(https://github.com/ahalaburda/bam_ad_plugin/blob/master/bam_ad_system/public/images/Screenshot_MLB.png)
