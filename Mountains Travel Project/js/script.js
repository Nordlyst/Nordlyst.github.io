$(document).ready(function(){
    02
        $("#menu").on("click","a", function (event) {
    03
            //отменяем стандартную обработку нажатия по ссылке
    04
            event.preventDefault();
    05
            //забираем идентификатор блока с атрибута href
    07
            var id  = $(this).attr('href'),
    09
            //узнаем высоту от начала страницы до блока на который ссылается якорь
    10
                top = $(id).offset().top;
    12
            //анимируем переход на расстояние - top за 1500 мс
    13
            $('body,html').animate({scrollTop: top}, 1500);
    14
        });
    15
    });
    