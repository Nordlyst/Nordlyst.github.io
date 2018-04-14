
$(function(){
    'use strict';

    $('a[href^="#"]').click(function(){
        let target = $(this).attr('href');
        $('html, body').animate(
            {
                scrollTop:$(target).offset().top
            },
            900
        );
    });

    var offset = $('#bottomHeader').offset();

    $(window).scroll( function(){
        if ( $(window.innerWidth > 1024).scrollTop() > 1000 ) {
            $('#bottomHeader').addClass('fixedNav');
        } else {
            $('#bottomHeader').removeClass('fixedNav');
        }
    });

    if ( window.innerWidth > 1200 ) {
        $('#slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        });
    } else {
        $('#slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        });
    }

    $('#viewAllGallery').click(function(){
        let content = '<div class="galleryLine"><div class="gallImageBox gallImg1"><img src="img/palmsHouse.jpg"alt="palmsHouse"></div><div class="gallImageBox gallImg2"><img src="img/palmsInteri.jpg"alt="palmsInteri"></div></div><div class="lineDescr line4">Merry Palms / <span>South Miami Beach, FL 36128</span></div><div class="galleryLine"><div class="gallImageBox gallImg3"><img src="img/guestHouse.jpg"alt="guestHouse"></div><div class="gallImageBox gallImg4"><img src="img/guestInterier.jpg"alt="guestInterier"></div></div><div class="lineDescr">Guest House / <span>North Bay Road, FL 39666</span></div>';

        $('#galleryBox').append(content);
        $(this).remove();
    });

    $('#modalWindow, #blackField').hide();

    $('#call').click(function(){
        $('#modalWindow, #blackField').show();
    });

    $('#closeWindow, #blackField').click(function(){
        $('#modalWindow, #blackField').hide();
    });


});
