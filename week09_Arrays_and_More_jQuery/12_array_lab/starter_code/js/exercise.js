function selectPet(petType){

    // Get the specific pet data set
    var thisPet = petData[petType];

    // Set the title
    jQuery(".petDisplayName").text(thisPet['displayName']);

    // Empty the specification data

    jQuery(".petsDataSpecs").empty();
    // Add the space required, size, weight
    jQuery(".petsDataSpecs").append( "<dt>Size</dt><dd>" + thisPet['size'] + "</dd>");
    jQuery(".petsDataSpecs").append( "<dt>Weight</dt><dd>" + thisPet['weight'] + "</dd>");
    jQuery(".petsDataSpecs").append( "<dt>Space Required</dt><dd>" + thisPet['spaceRequired'] + "</dd>");


    // Add logic to add the trainability and lap size images
    if(thisPet.fitsOnLap == true){
        jQuery(".petsDataSpecs") .append("<dt>Fits on Lap</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-default.svg.png' alt='yes'</dd>");
    }else{
        jQuery(".petsDataSpecs") .append("<dt>Fits on Lap</dt><dd><img class='checkmark'src='img/200px-Gnome-emblem-unreadable.svg.png' alt='no'</dd>");

    }
    
    if(thisPet.trainability == true){
        jQuery(".petsDataSpecs") .append("<dt>Trainable</dt><dd><img  class='checkmark' src='img/200px-Gnome-emblem-default.svg.png' alt='yes'</dd>");
    }else{
        jQuery(".petsDataSpecs") .append("<dt>Trainable</dt><dd><img  class='checkmark' src='img/200px-Gnome-emblem-unreadable.svg.png' alt='no' </dd>");
    }
    
    
    
    // Add the foods (may require loop)
    var foodsHTML = "";  

        for (var q= 0; q<thisPet['foods'].length; q++) {
        
            foodsHTML = foodsHTML + "<li>" + thisPet['foods'][q] + "</li>";

        }
        // Loop her
    
    jQuery(".petsDataSpecs").append("<dt>Foods</dt> <dd><ul>"+foodsHTML+ "</ul></dd>");
    // Update the images

        // Set the main image


        // Empty the thumbnails

        // Add the thumbnails



        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)


    // Empty the ideal for

    // Insert the ideal for


    // Empty the Adoption Groups

    // Add the adoption groups


}// end selectPet



jQuery(document).ready(function(){

  var targetPet = jQuery("#petType").val();
        
    selectPet(targetPet);
    // Initial run
    jQuery("#petType").on("change",function(){
        
        var targetPet = jQuery("#petType").val();

    selectPet(targetPet);
    });

    //Update whenever a new value is picked

});