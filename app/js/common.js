$(function() {

	// Custom JS

	$('.bottom-menu__main-item').mouseenter(function() {

		$('.bottom-menu__dropdown').removeClass('active');

		$(this).next('.bottom-menu__dropdown').addClass('active');

		$('.bottom-menu__dropdown.active').mouseleave(function() {
			$(this).removeClass('active'); 
		});
	});


	

});
