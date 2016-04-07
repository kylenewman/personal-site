  
$(document).ready(function() {
  
  var mainNav = $(".mainNav");
  var heroHeight = $('#hero').height();
  
  $(window).scroll(function() {
    if ( $(this).scrollTop() > heroHeight ) {
      mainNav.addClass("navStick");
    }
    else {
      mainNav.removeClass("navStick"); 
    }
  });
});