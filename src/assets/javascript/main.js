$(document)
    .ready(function() {

        // fix main menu to page on passing
        $('.main.menu').visibility({
            type: 'fixed'
        });

        $('.ui.accordion')
            .accordion();

        $('.social-buttons a')
            .popup();

        $(function() {
            $('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top - 80
                        }, 1000);
                        return false;
                    }
                }
            });
        });

    });

$(window).on('load, resize', function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 991) {
        // $("#aside").removeClass("fixedsticky stick fixedsticky-on fixedsticky-off");
        $("#aside").fixedsticky("destroy");
    }
    if (viewportWidth > 991) {
        $("#aside").addClass("fixedsticky stick fixedsticky-on");
    }
});

