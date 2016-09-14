//wait for page elements to load before executing
jQuery(document).ready(function(){
  //prevent default action
  
    // Create a function that runs whenever the submit button is clicked
 	jQuery('#submit-btn').click(function(){
    //prevent the submit button from refreshing the page

    event.preventDefault();

	//Create a variable called cityValue and get the value of the #city-type  input
	var cityValue = jQuery("#city-type").val();

	//Correct for capitalization (bonus: spaces)
	cityValue = cityValue.toLowerCase().trim();

	// if the user "New York" or "New York City" or "NYC" change the CSS class to .nyc
	if (cityValue == "new york" || cityValue == "nyc" || cityValue == "new york city") {
		jQuery("body").attr("class","nyc");

	} else if
	// if the user inputs "San Francisco" or "SF" or "Bay Area" change the CSS class to .sf
	(cityValue == "san francisco" || cityValue == "sf" || cityValue == "bay area") {
		jQuery("body").attr("class","sf");
	} else if
	// if the user inputs Los Angeles" or "LA" or "LAX" change the CSS class to .la
	(cityValue == "los angeles" || cityValue == "la" || cityValue == "lax") {
		jQuery("body").attr("class","la");
	} else if
	// if the user inputs "Austin" or "ATX" change the css class to .austin
	(cityValue == "austin" || cityValue == "atx") {
		jQuery("body").attr("class","austin");
	} else if
	// if the user inputs "Sydney" or "SYD" change the CSS class to .sydney
	(cityValue == "sydney" || cityValue == "syd") {
		jQuery("body").attr("class","sydney");
	} else
	// else change the CSS class to .world
	{
		jQuery("body").attr("class","world");
	}
	//reset form after submit is clicked


	});

});