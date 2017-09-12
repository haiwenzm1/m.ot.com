$(function () {
    $('.banner').eq(0).addClass('active').show();
    $('.banner1 .slide').eq(0).addClass('active').fadeIn();


    var startX;
    $('.banner').on('touchstart', function (e) {
        var _touch = e.originalEvent.targetTouches[0];
        startX = _touch.pageY;
    });

    $('.banner').on('touchend', function (e) {
        var _touch = e.originalEvent.changedTouches[0];
        if (_touch.pageY - startX > 30) {
            if ($(this).prev('.banner').length != 0) {
                before();
                $(this).prev('.banner').addClass('active').fadeIn(1000);
                $(this).prev('.banner').siblings().removeClass('active').fadeOut(1000);
                after();
            }
        } else if (startX - _touch.pageY > 30) {
            if ($(this).next('.banner').length != 0) {
                before();
                $(this).next('.banner').addClass('active').fadeIn(1000);
                $(this).next('.banner').siblings().removeClass('active').fadeOut(1000);
                after();
            }
        }
    });

    function after() {
        var index = $('.banner').index($('.banner.active'));
        if (index == 0) {
            $('.banner1 .slide').eq(0).addClass('active').show();
        }

        if (index == 1) {
            $('.banner2 .slide').eq(0).addClass('active').show();
        }

        if (index == 2) {
            $('.banner3 .slide').eq(0).addClass('active').show();
        }
    }

    function before() {
        var index = $('.banner').index($('.banner.active'));
        if (index == 0) {
            $('.banner1 .slide').removeClass('active').hide();
        }

        if (index == 1) {
            $('.banner2 .slide').removeClass('active').hide();
        }

        if (index == 2) {
            $('.banner3 .slide').removeClass('active').hide();
        }
    }

    $('.banner1 .left-arrow').on('click', function () {
        var e = $('.banner1 .slide.active');
        if (e.prev('.slide').length) {
            e.prev('.slide').addClass('active').fadeIn(1000);
            e.prev('.slide').siblings('.slide').removeClass('active').fadeOut(1000);
        }
    });

    $('.banner1 .right-arrow').on('click', function () {
        var e = $('.banner1 .slide.active');
        if (e.next('.slide').length) {
            e.next('.slide').addClass('active').fadeIn(1000);
            e.next('.slide').siblings('.slide').removeClass('active').fadeOut(1000);
        }
    });


    $('.banner2 .left-arrow').on('click', function () {
        var e = $('.banner2 .slide.active');
        if (e.prev('.slide').length) {
            e.prev('.slide').addClass('active').fadeIn(1000);
            e.prev('.slide').siblings('.slide').removeClass('active').fadeOut(1000);
        }
    });

    $('.banner2 .right-arrow').on('click', function () {
        var e = $('.banner2 .slide.active');
        if (e.next('.slide').length) {
            e.next('.slide').addClass('active').fadeIn(1000);
            e.next('.slide').siblings('.slide').removeClass('active').fadeOut(1000);
        }
    });

    $('.banner3 .left-arrow').on('click', function () {
        var e = $('.banner3 .slide.active');
        if (e.prev('.slide').length) {
            e.prev('.slide').addClass('active').fadeIn(1000);
            e.prev('.slide').siblings('.slide').removeClass('active').fadeOut(1000);
        }
    });

    $('.banner3 .right-arrow').on('click', function () {
        var e = $('.banner3 .slide.active');
        if (e.next('.slide').length) {
            e.next('.slide').addClass('active').fadeIn(1000);
            e.next('.slide').siblings('.slide').removeClass('active').fadeOut(1000);
        }
    });
});