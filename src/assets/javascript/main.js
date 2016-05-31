$(document)
    .ready(function() {

        // fix main menu to page on passing
        $('.main.menu').visibility({
            type: 'fixed'
        });
        // $('.ui.sticky').sticky({
        //         offset: 80,
        //         bottomOffset: 80,
        //         context: '#context'
        //         //pushing: true
        //         //observeChanges: true
        //     });
        // // $('.ui.sticky').visibility({
        // //     type: 'fixed',
        // //     offset: 80
        // // });

        // // lazy load images
        // $('.image').visibility({
        //     type: 'image',
        //     transition: 'vertical flip in',
        //     duration: 500
        // });

        // // show dropdown on hover
        // $('.main.menu  .ui.dropdown').dropdown({
        //     on: 'hover'
        // });
        $('.ui.accordion')
            .accordion();

        $('.button')
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
