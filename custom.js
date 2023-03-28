$(document).ready(function(){
    


    //this is page sliding animation

    (function($){
        "use strict";
        
        new WOW().init();
    
    })(jQuery);

    //porfolio filter 
    
    var $grid = $('.filter-items').isotope();
    $('.filter ul').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $(this).siblings(".active").removeClass('active');
        $(this).addClass("active");
    });

    //Scroll to top button 

    $(window).on('scroll',function(){
        if($(this).scrollTop() > 100){
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').on('click',function(){
        $('html,body').animate({scrollTop:0},300);
        return false;
    });



});