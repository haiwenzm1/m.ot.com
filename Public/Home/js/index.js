$(function() {
    $('.banner').on({
        'swipeleft': function() {
            if ($(this).next('.banner').length != 0) {
                $(this).next('.banner').show();
                $(this).next('.banner').siblings().hide();
            }
        },
        'swiperight': function() {
            if ($(this).prev('.banner').length != 0) {
                $(this).prev('.banner').show();
                $(this).prev('.banner').siblings().hide();
            }
        }
    });


    $('.banner1 .slide').eq(0).addClass('active').fadeIn();

    $('.banner1 .left-arrow').on('tap', function() {
        var e = $('.banner1 .slide.active');
        if (e.prev('.slide').length) {
            e.prev('.slide').addClass('active').fadeIn();
            e.prev('.slide').siblings('.slide').removeClass('active').fadeOut();
        }
    })
    $('.banner1 .right-arrow').on('tap', function() {
        var e = $('.banner1 .slide.active');
        if (e.next('.slide').length) {
            e.next('.slide').addClass('active').fadeIn();
            e.next('.slide').siblings('.slide').removeClass('active').fadeOut();
        }
    })
});