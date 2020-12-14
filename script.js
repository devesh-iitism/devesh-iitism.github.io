window.onload = function() {
    $(this).scrollTop(0);
    $(document).ready(function() {
    
    setTimeout(function(){
        $('body').addClass('loaded');
        $("#mainNavbar").addClass("fixed-top");
    }, 3000);
    
});
    $('[data-toggle="tooltip"]').tooltip();
	$(function () {
        $(document).scroll(function () {
        	var $nav = $("#mainNavbar")
            var $pr = $("#projects");
            var $d = $(".dc");
            if ($(this).scrollTop() > $nav.height())
            {
            	$nav.css({top : '-50px'});
            	$nav.removeClass("bg-dark1");	
            }

            if ($(this).scrollTop() < $nav.height())
            {
            	$nav.css({top : '0'});
            	$nav.removeClass("bg-dark1");	
            }

            if ($(this).scrollTop() > $d.height())
            {
            	$nav.css({top : '0'});
            	$nav.addClass("bg-dark1");	
            }
        });
    });

    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        $('.page-section').each(function(i) {
                console.log($(this).position().top + "hi");
                console.log(scrollDistance + "hello")
                if ($(this).position().top <= scrollDistance + 120) {
                        $('.nav-item a.active').removeClass('active');
                        $('.nav-item a').eq(i).addClass('active');
                }
        });
    }).scroll();
}

