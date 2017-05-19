$(document).ready(function(){
   

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.mt-to-up').fadeIn('slow');

        }else{
            $('.mt-to-up').fadeOut('slow')
        }
    });


    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);
        
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

    lightbox.option({
        'wrapAround': true
    })


})