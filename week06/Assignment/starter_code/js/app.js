//wait for page elements to load before executing
jQuery(document).ready(function(){
  //prevent default action
  



// var citiesList = [
// 	["NYC","nyc.jpg"]
// 	["SF","sf.jpg"]
// 	["SYD","sydney.jpg"]
// 	["ATX","austin.jpg"]

// ]

var citiesList = ["NYC", "SF", "LA", "ATX", "SYD"];
var citiesBackgrounds = ["nyc.jpg","sf.jpg", "austin.jpg","sydney.jpg"];

for(q=0 q<citiesList.length;q++){
	jQuery('#city-type').append("<option value='" + citiesList[q] + "'>" + citiesList[q] + "</options">);
}

// jQuery.each(citiesList, function(index, value){
// 	jQuery("#city-type").append("<option value'"+citiesBackgrounds [index] + "'>"+value+"</options");

// });


jQuery("#city-type").on("change", function(){
	var fileName = jQuery("#city-type").val();

jQuery("body").css("background-image", "url(images/" + fileName + ")");

});
	