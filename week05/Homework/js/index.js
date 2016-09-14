jQuery(document).ready(function(){
// when I click the readmore class run a function
	/*jQuery(".readmore").on("click",function() {
		// Prevent a link execution with the ```event.preventDefault()``` function
		 event.preventDefault();
		 // remove hide class from html .post *
		jQuery(".post *").removeClass("hide");
	//  target .readmore and add hide class
		jQuery(".readmore").addClass("hide");
	});
	
	jQuery(".readless").on("click",function() {
		// Prevent a link execution with the ```event.preventDefault()``` function
		 event.preventDefault();
		 // remove hide class from html .post *
		jQuery("#show-this-on-click").addClass("hide");
	//  target .readmore and add hide class
		jQuery(".readmore").removeClass("hide");
		jQuery(".readless").addClass("hide");
	});*/
	jQuery(".readmore").on("click",function() {
		event.preventDefault();
		jQuery("#show-this-on-click").slideDown();
		jQuery(".readmore").addClass("hide");
		jQuery(".readless").removeClass("hide");

	});

	/*jQuery(".readmore").on("click",function() {
		event.preventDefault();
		jQuery("#show-this-on-click").slideDown();
		jQuery(".readmore").hide();
		jQuery(".readless").show();

	});*/

	jQuery(".readless").on("click",function(){
		event.preventDefault();
		jQuery("#show-this-on-click").slideUp(400, function(){
			jQuery(".readmore").removeClass("hide");

			});
		
		jQuery(".readless").addClass("hide");
		/*jQuery(".readmore").removeClass("hide");*/
	});

	jQuery(".learnmore").on("click",toggleMore);
		

		function toggleMore (){
			// Prevent a link execution with the ```event.preventDefault()``` function
			 event.preventDefault();
			 // remove hide class from  id learnmoretext*
			jQuery("#learnmoretext").toggleClass("hide");
		//  target .learnmore and add hide class
			jQuery(".learnmore").toggleClass("hide");

		}



/*jQuery(".readmore").on("click",toggleMore);
	
	jQuery(".readless").on("click",toggleMore);


	function toggleMore (){
		// Prevent a link execution with the ```event.preventDefault()``` function
		 event.preventDefault();
		 // remove hide class from html .post *
		jQuery("#show-this-on-click").toggleClass("hide");
	//  target .readmore and add hide class
		jQuery(".readmore").toggleClass("hide");
		jQuery(".readless").toggleClass("hide");

	}*/





});
