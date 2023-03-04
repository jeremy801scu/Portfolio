(function($){
    "use strict";
    var $grid = $('.filter-items').isotope();
    $('.filter ul').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $(this).siblings(".active").removeClass('active');
        $(this).addClass("active");
    });
})(jQuery);