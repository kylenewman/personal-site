$(document).ready( function() {  
  
 var topOfOthDiv = $("#pageTop").offset().top;
 var heroHeight = $("#hero").height();
 var mainNav = $(".mainNav");  
  
   $(window).scroll(function() {
    if ( $(this).scrollTop() > heroHeight) {
      mainNav.addClass("navShrink").fadeIn('slow');
    }
    else {
      mainNav.removeClass("navShrink"); 
    }
  });
});


  