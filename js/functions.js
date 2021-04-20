    //Jquery Initializing//
$(document).ready(function(){
    /*       Menu Mobile      */
    $('#nav-div').click(function(){
        $('#nav-mobile').find('ul').slideToggle();
    })

    $('.carousel').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

});