$(function () {
    $('.banner').eq(0).addClass('active').show();
    $('.banner0 .slide').eq(0).addClass('active').show();

    var startX;
    $('.banner').on('touchstart', function (e) {
        var _touch = e.originalEvent.targetTouches[0];
        startX = _touch.pageY;
    });

    $('.banner').on('touchend', function (e) {
        var _touch = e.originalEvent.changedTouches[0];
        if (_touch.pageY - startX > 10) {
            if ($(this).prev('.banner').length != 0) {
                before();
                $(this).prev('.banner').addClass('active').fadeIn(1000);
                $(this).prev('.banner').siblings('.banner').removeClass('active').fadeOut(1000);
                after();
            }
        } else if (startX - _touch.pageY > 10) {
            if ($(this).next('.banner').length != 0) {
                before();
                $(this).next('.banner').addClass('active').fadeIn(1000);
                $(this).next('.banner').siblings('.banner').removeClass('active').fadeOut(1000);
                after();
            }
        }
    });

    function after() {
        var index = $('.banner').index($('.banner.active'));

        if (index == 1) {
            $('.banner0 .slide').eq(0).addClass('active').show();
        }

        if (index == 1) {
            $('.banner1 .slide').removeClass('active').eq(0).addClass('active');
            $('.banner1-content').css({ transition: "all 700ms ease", transform: "translate3d(0px, 0px, 0px)" });
        }

        if (index == 2) {
            $('.banner2 .slide').eq(0).addClass('active').show();
        }

        if (index == 3) {
            $('.banner3 .slide').eq(0).addClass('active').show();
        }

        if (index == 4) {
            $('.arrow').hide();
        }
    }

    function before() {
        var index = $('.banner').index($('.banner.active'));

        if (index == 0) {
            $('.banner0 .slide').removeClass('active').hide();
        }

        if (index == 1) {
            $('.banner1 .slide').removeClass('active');
            $('.banner1-content').css({ transition: "all 700ms ease", transform: "translate3d(0px, 0px, 0px)" });
        }

        if (index == 2) {
            $('.banner2 .slide').removeClass('active').hide();
        }

        if (index == 3) {
            $('.banner3 .slide').removeClass('active').hide();
        }

        if (index == 4) {
            $('.arrow').show();
        }
    }

    $('.banner0 .left-arrow').on('click', function () {
        var e = $('.banner0 .slide.active');
        if (e.prev('.slide').length) {
            e.prev('.slide').addClass('active').fadeIn(1000);
            e.prev('.slide').siblings('.slide').removeClass('active').fadeOut(1000);
        }
    });

    $('.banner0 .right-arrow').on('click', function () {
        var e = $('.banner0 .slide.active');
        if (e.next('.slide').length) {
            e.next('.slide').addClass('active').fadeIn(1000);
            e.next('.slide').siblings('.slide').removeClass('active').fadeOut(1000);
        }
    });


    $('.banner1 .left-arrow').on('click', function () {
        var e = $('.banner1 .slide.active');
        if (e.prev('.slide').length) {
            e.prev('.slide').addClass('active');
            e.prev('.slide').siblings('.slide').removeClass('active');
            var w = 0 - $('.banner1').width() * $('.banner1-content .slide').index($('.banner1 .slide.active'));
            $('.banner1-content').css({ transition: "all 700ms ease", transform: "translate3d(" + w + "px, 0px, 0px)" });
        }
    });

    $('.banner1 .right-arrow').on('click', function () {
        var e = $('.banner1 .slide.active');
        if (e.next('.slide').length) {
            e.next('.slide').addClass('active');
            e.next('.slide').siblings('.slide').removeClass('active');
            var w = 0 - $('.banner1').width() * $('.banner1-content .slide').index($('.banner1 .slide.active'));
            $('.banner1-content').css({ transition: "all 700ms ease", transform: "translate3d(" + w + "px, 0px, 0px)" });
        } else {
            $('.banner1 .slide').removeClass("active").eq(0).addClass('active');
            $('.banner1-content').css({ transition: "all 700ms ease", transform: "translate3d(0px, 0px, 0px)" });
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

    $(document).on('click', '#banner3-vedio', function () {
        $('#banner3-vedio-wrap').show();
        var myPlayer = videojs('my-video');
        videojs("my-video").ready(function () {
            var myPlayer = this;
            myPlayer.play();
        });
    });

    $(document).on('click', '#banner3-vedio-close', function () {
        var myPlayer = videojs('my-video');
        videojs("my-video").ready(function () {
            var myPlayer = this;
            myPlayer.pause();
        });
        $('#banner3-vedio-wrap').hide();
    })
});