$(document).ready(function () {
    $('.bg_home_parallax, .bg_about_parallax, .bg_work_parallax, .bg_contacts_parallax').mousemove(function (e) {
        let pageX;
        let pageY;
        let amountMovedX = (e.pageX * -1 / 10);
        let amountMovedY = (e.pageY * -1 / 10);
        $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
    });



    let $page = $('html, body');
    let overlayMenu = $('#header, #menu-nav');
    let menuIconLines = $('#menu-burger .menu-icon');
    $('#menu-nav a').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);

        overlayMenu.removeClass('open');
        menuIconLines.removeClass('open');
        menuBurger.removeClass('open');

        return false;
    });

    let menuBurger = $('#menu-burger').click(function() {
        if(overlayMenu.hasClass('open')) {
            overlayMenu.removeClass('open');
            menuIconLines.removeClass('open');
            menuBurger.removeClass('open');
        }else{overlayMenu.addClass('open');
            menuIconLines.addClass('open');
            menuBurger.addClass('open');
        }
    });

    let selectedClass = "";
    $(".portfolio-filter a").click(function(){
        selectedClass = $(this).attr("data-rel");
        $(".portfolio-gallery").fadeTo(100, 0.1);
        $(".portfolio-gallery div").not("."+selectedClass).fadeOut();
        setTimeout(function() {
            $("."+selectedClass).fadeIn();
            $(".portfolio-gallery").fadeTo(500, 1);
        }, 500);
    });
});