var heroHeight = $('#hero').height();
    
$(window).scroll(function() {
	if ( $(window).scrollTop() > heroHeight ) {
		$('a.toTop').fadeIn('slow');
	} else {
		$('a.toTop').fadeOut('slow');
	}
});

