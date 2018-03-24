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



	$(".choiser__main-item").on( "click", function(e) {

		e.preventDefault();

		var choiserMainItemData = $(this).data('choise');
		var $choiserMainItem = $(".choiser__main-item");

		var $appleChoiser = $(this).closest('.apple-choiser');
		var $appleChoiserLvl2 = $appleChoiser.find('.apple-choiser__lvl-2');
		var $choiserLists = $appleChoiserLvl2.find('.choiser__list');
		var $choise = $appleChoiserLvl2.find("[data-choise-list='" + choiserMainItemData + "']");

		var choiseHeight = $choise.height();

		//console.log(choiseHeight);


		$appleChoiserLvl2.removeClass('disable');
		$choiserMainItem.removeClass('current');
		$choiserLists.removeClass('active');


		$appleChoiserLvl2.addClass('active').height(choiseHeight);
		$(this).addClass('current');
		$choise.addClass('active');


		//var y = $(window).scrollTop();
		//$("html, body").animate({ scrollTop: y + 400 }, 600);
		

	});


});
