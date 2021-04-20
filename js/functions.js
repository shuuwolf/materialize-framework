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
        responsive: [
            {
                breakpoint: 1218,
                settings: {
                    slidesToShow:3,
                }
            },

            {
                breakpoint: 769,
                settings: {
                    slidesToShow:5,
                }
            },

            {
                breakpoint: 651,
                settings: {
                    slidesToShow:4,
                    arrows: false,
                }
            },

            {
                breakpoint: 461,
                settings: {
                    slidesToShow:3,
                    arrows: false,
                }
            }
        ]
    });

});