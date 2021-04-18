    //Jquery Initializing//
$(document).ready(function(){
    /*       Menu Responsivo      */
    $('#nav-div').click(function(){
        $('#nav-mobile').find('ul').slideToggle();
    })

    $('.modal-trigger').click(function(){
        $('.modal').css("display", "block");
    })
    
    $('.close').click(function(){
        $('.modal').css("display", "none");
    })
});