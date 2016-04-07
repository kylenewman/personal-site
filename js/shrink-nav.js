$(document).ready( function() {  
  
 var topOfOthDiv = $("#pageTop").offset().top;
 var heroHeight = $("#hero").height();
 var mainNav = $(".mainNav");  
  
   $(window).scroll(function() {
    if ( $(this).scrollTop() > topOfOthDiv ) {
      mainNav.addClass("navShrink", 1000);
    }
    else {
      mainNav.removeClass("navShrink", 1000); 
    }
  });
});


  