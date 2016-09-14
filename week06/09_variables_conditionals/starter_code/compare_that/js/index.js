
//On Page Load/Ready
jQuery(document).ready(function(){

// on click of #submit
	jQuery("#submit").on("click",function(){

		// Get value of #a
		var a = parseFloat(jQuery("#a").val());

		// Get value of #b
		var b = parseFloat(jQuery("#b").val());

		// If a > b
		if (a > b){
			jQuery("#comparison").text(">");
		// If a == b
		}else if(a == b){
			jQuery("#comparison").text("=");

			// If a < b		
		}else if(a < b){
			jQuery("#comparison").text("<");

		}else {
			jQuery("#comparison").text("N/A");

		}
		

	});




});

	
