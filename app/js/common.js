$(function() {

	// Custom JS

	$(".bottom-menu__main-item").hover(function () {
		$(this).next(".bottom-menu__dropdown").removeClass('disable').addClass('active');
	}, function () {
		$(this).next(".bottom-menu__dropdown").stop().removeClass('active').addClass('disable');
	});

	$(".bottom-menu__dropdown").hover(function () {
		$(this).removeClass('disable').addClass('active');
	}, function () {
		$(this).stop().removeClass('active').addClass('disable');
	});

});
