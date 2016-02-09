$(document).ready(function(){
    $(".nav-toggle").click(function(){
        $(".nav-links").slideToggle(function() { 
			if (!$(this).is(":visible")) {
				$(this).removeAttr("style");
            }
        });
    });

    $(window).scroll(function(){

        var wScroll = $(this).scrollTop();
        var Headerheight = $('#home header').height();

        if (wScroll <= Headerheight) {
            $('.title-block').css({
                'transform' : 'translate(0px, '+ wScroll /3 +'%)',
                'opacity' : (1 - wScroll/(Headerheight/2))
            });
        }

        if ($( "#home" ).hasClass( "home" ) && (wScroll <= Headerheight/2)) {
            $('nav').addClass( "fade" );
        } else {
            $('nav').removeClass( "fade" );
        }
    });

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});



