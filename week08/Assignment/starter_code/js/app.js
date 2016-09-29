// I tried using the method we used in class but failed to get the image to link, so ended up referring to solution for the JS.
/*$('.hamburger').on('click', function( event ){
 	event.preventDefault();
 	$('.navigation').toggleClass('mobileHidden');

});*/

$(document).ready(function() {
  $('header nav ul li:first-child').click(function(){
    $(this).parent().toggleClass('slideDown');
  });
});