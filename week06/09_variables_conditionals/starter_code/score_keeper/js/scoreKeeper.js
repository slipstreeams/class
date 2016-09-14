


//Create the varaible to store the score
var score = 0;


//On click of #add5,
	jQuery("#add5").on("click",function(){
		//add 5 to score
		score = score + 5;
		//update #result
		jQuery("#result").text(score);
	});
	


//On click of #add10, 
	jQuery("#add10").on("click",function(){
		//add 10 to score
		score = score + 10;
		//update #result
		jQuery("#result").text(score);
	});

	

//On click of #sub1,
	jQuery("#sub1").on("click",function(){
		//subtract 1 to score
		score = score - 1;
		//update #result
		jQuery("#result").text(score);
	});

//On click of #zero,
	jQuery("#zero").on("click",function(){
		//make score zero
		score = 0;
		//update #result
		jQuery("#result").text(score);

		if (score > 20){
			alert("You Win!");

	}
	});
	
