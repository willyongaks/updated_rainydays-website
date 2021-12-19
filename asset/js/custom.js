(function(){
    function toggleMobileMenu(){
        $('.header__toggle_menu').on('click',function(){
            $('#mobile__toggle__menu').addClass('toggle');
        })
        $('.mobile__toggle__close').on('click',function(){
            $('#mobile__toggle__menu').removeClass('toggle');
        })
    }

    toggleMobileMenu();
}());

(function(){
    FlexMasonry.init('.massonary__grid', {
        responsive: true,
        breakpointCols: {
            'min-width: 1500px': 3,
            'min-width: 1200px': 3,
            'min-width: 992px': 3,
            'min-width: 768px': 2,
            'min-width: 576px': 2,
        },
    });
}());