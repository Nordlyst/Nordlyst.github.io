$(document).ready(function() {

    $('.menuIcon').click(function() {
        $('nav ul').slideToggle(500);
    });
    $(window).resize(function() {
        if ($(window).width() > 480 ) {
            $('nav ul').removeAttr('style');
        }
    });
});