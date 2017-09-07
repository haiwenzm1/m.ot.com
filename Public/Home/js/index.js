$(function() {
	$('.banner').eq(0).addClass('active').show();
	$('.banner1 .slide').eq(0).addClass('active').fadeIn();
	
    $('.banner').on({
        'swipeleft': function(e) {
			e.stopPropagation(); // 阻止JavaScript事件冒泡传递
            if ($(this).next('.banner').length != 0) {
				before();
                $(this).next('.banner').addClass('active').show();
                $(this).next('.banner').siblings().removeClass('active').hide();
				after();
            }
        },
        'swiperight': function(e) {
			e.stopPropagation(); // 阻止JavaScript事件冒泡传递
            if ($(this).prev('.banner').length != 0) {
				before();
                $(this).prev('.banner').addClass('active').show();
                $(this).prev('.banner').siblings().removeClass('active').hide();
				after();
            }
        }
    });

	function after(){
		var index = $('.banner').index($('.banner.active'));
		if( index == 0){
			$('.banner1 .slide').eq(0).addClass('active').show();
		}
		
		if( index == 1){
			$('.banner2 .slide').eq(0).addClass('active').show();
		}
		
		if( index == 2){
			$('.banner3 .slide').eq(0).addClass('active').show();
		}
	}
	
	function before(){
		var index = $('.banner').index($('.banner.active'));
		if( index == 0){
			$('.banner1 .slide').removeClass('active').hide();
		}
		
		if( index == 1){
			$('.banner2 .slide').removeClass('active').hide();
		}
		
		if( index == 2){
			$('.banner3 .slide').removeClass('active').hide();
		}
	}

    $('.banner1 .left-arrow').on('tap', function(event) {
		event.stopPropagation(); // 阻止JavaScript事件冒泡传递
        var e = $('.banner1 .slide.active');
        if (e.prev('.slide').length) {
            e.prev('.slide').addClass('active').fadeIn();
            e.prev('.slide').siblings('.slide').removeClass('active').fadeOut();
        }
    });
	
    $('.banner1 .right-arrow').on('tap', function(event) {
		event.stopPropagation(); // 阻止JavaScript事件冒泡传递
        var e = $('.banner1 .slide.active');
        if (e.next('.slide').length) {
            e.next('.slide').addClass('active').fadeIn();
            e.next('.slide').siblings('.slide').removeClass('active').fadeOut();
        }
    });
	
	
	$('.banner2 .left-arrow').on('tap', function(event) {
		event.stopPropagation(); // 阻止JavaScript事件冒泡传递
        var e = $('.banner2 .slide.active');
        if (e.prev('.slide').length) {
            e.prev('.slide').addClass('active').fadeIn();
            e.prev('.slide').siblings('.slide').removeClass('active').fadeOut();
        }
    });
	
    $('.banner2 .right-arrow').on('tap', function(event) {
		event.stopPropagation(); // 阻止JavaScript事件冒泡传递
        var e = $('.banner2 .slide.active');
        if (e.next('.slide').length) {
            e.next('.slide').addClass('active').fadeIn();
            e.next('.slide').siblings('.slide').removeClass('active').fadeOut();
        }
    });
	
	$('.banner3 .left-arrow').on('tap', function(event) {
		event.stopPropagation(); // 阻止JavaScript事件冒泡传递
        var e = $('.banner3 .slide.active');
        if (e.prev('.slide').length) {
            e.prev('.slide').addClass('active').fadeIn();
            e.prev('.slide').siblings('.slide').removeClass('active').fadeOut();
        }
    });
	
    $('.banner3 .right-arrow').on('tap', function(event) {
		event.stopPropagation(); // 阻止JavaScript事件冒泡传递
        var e = $('.banner3 .slide.active');
        if (e.next('.slide').length) {
            e.next('.slide').addClass('active').fadeIn();
            e.next('.slide').siblings('.slide').removeClass('active').fadeOut();
        }
    });
});