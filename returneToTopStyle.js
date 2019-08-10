$(window).scroll(function() {
	if ($(this).scrollTop() > $(this).height()) {
		$('.returnToTop').addClass('active');
	} else {
		$('.returnToTop').removeClass('active');
	}
});

$('.returnToTop').click(function(){
	$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});