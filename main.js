$(window).scroll(function() {

	if ($(window).scrollTop() > 800 ){

 		$('.nav-top').addClass('solid-nav');

  } else {

    $('.nav-top').removeClass('solid-nav');

 	};
});

$('.scroll').on('click', function(e){
		e.preventDefault()

  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});
