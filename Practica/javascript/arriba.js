$(document).ready(function(){
	
	$('.icon-arrow-up').click(function(){
		
		$('body, html').animate({
			scrollTop: '0px'
		},300);
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('.icon-arrow-up').slideDown(300);
		}else{
			$('.icon-arrow-up').slideUp(300);
		}
	});

});
