$(function () {
    //HEADER
    $(window).scroll(function () {
        if($(this).scrollTop() > 200) {
            if (!$('.main_header').hasClass('fixed')) {
                $('.main_header').stop().addClass('fixed').css('left', '-100%').animate(
                    {
                        'left': '0%'
                    }, 500);
            }
        } else {
            $('.main_header').removeClass('fixed');
        }
    });

    $('.contagem').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});
