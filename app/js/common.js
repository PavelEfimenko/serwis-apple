$(function() {

	// Custom JS

	$(".bottom-menu__main-item").hover(function () {

		$(this).addClass('active');
		$(this).next(".bottom-menu__dropdown").removeClass('disable').addClass('active');

	}, function () {

		$(this).removeClass('active');
		$(this).next(".bottom-menu__dropdown").stop().removeClass('active').addClass('disable');

	});

	$(".bottom-menu__dropdown").hover(function () {

		$(this).siblings(".bottom-menu__main-item").addClass('active');
		$(this).removeClass('disable').addClass('active');

	}, function () {

		$(this).siblings(".bottom-menu__main-item").removeClass('active');
		$(this).stop().removeClass('active').addClass('disable');

	});



	$(".choiser__main-item").on( "click", function(e) {

		e.preventDefault();

		var choiserMainItemData = $(this).data('choise');
		var $choiserMainItem = $(".choiser__main-item");

		var $appleChoiser = $(this).closest('.apple-choiser');
		var $appleChoiserLvl2 = $appleChoiser.find('.apple-choiser__lvl-2');
		var $appleChoiserLvl3 = $appleChoiser.find('.apple-choiser__lvl-3');
		var $choiserSlider = $appleChoiserLvl3.find('.choiser-slider');

		var $choiserLists = $appleChoiserLvl2.find('.choiser__list');
		var $choise = $appleChoiserLvl2.find("[data-choise-list='" + choiserMainItemData + "']");

		var choiseHeight = $choise.height();



		$appleChoiserLvl2.removeClass('disable');
		$choiserMainItem.removeClass('selected no-selected');
		$choiserLists.removeClass('active');
		$choiserSlider.removeClass('active');
		$appleChoiserLvl3.removeClass('active').addClass("disable").height("0");


		$appleChoiserLvl2.addClass('active').height(choiseHeight);
		$choiserMainItem.addClass('no-selected');
		$(this).removeClass('no-selected').addClass('selected');
		
		$choise.addClass('active');


		//var y = $(window).scrollTop();
		//$("html, body").animate({ scrollTop: y + 400 }, 600);
		

	});

	$(".choiser__list-item").on( "click", function(e) {
		e.preventDefault();

		var $choiserItem = $(".choiser__main-item");
		var choiserItemData = $(this).data('choise-model');

		var $appleChoiser = $(this).closest('.apple-choiser');
		var $appleChoiserLvl3 = $appleChoiser.find('.apple-choiser__lvl-3');
		var $choiserSlider = $appleChoiserLvl3.find('.choiser-slider');

		var $slider = $appleChoiserLvl3.find("[data-choise-slider='" + choiserItemData + "']");

		var sliderHeight = $slider.height();

		$appleChoiserLvl3.removeClass('disable');
		$choiserItem.removeClass('current');
		$choiserSlider.removeClass('active');

		$appleChoiserLvl3.addClass('active').height(sliderHeight);
		$(this).addClass('current');
		$slider.addClass('active');
	
	});

	$('.choiser-slider').each(function () {

		$(this).slick({
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 4,
			dots: true
		});

	});


});
