
//Light Status
var myLights = 1;


//on click #light_switch

	//if lights are on
		/*jQuery("#light_switch").on("click",function(){
			if(myLights == 1){
			
			
				//turn off
				//set body background css
				jQuery("body").css("background","black");
				//set myLights 0
				myLights = 0;
			
			}else{
				//else
				//turn on
				//set body background css
				jQuery("body").css("background","white");
				//set myLights 1
				myLights = 1;
			
			}*/

		jQuery("#light_switch").on("click",function(){
			jQuery("body").toggleClass("nox");
		});

		// 

		} 

			







		});
		

	