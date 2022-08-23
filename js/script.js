$('#menu').click(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-time');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});