$(document).ready(function () {

    $('.container').animate({
        height: '50%',
        width: '50%'
    },
        {    // options parameter 
            duration: 100,
            complete: function () {
                $(this).animate({
                    height: '100%',
                    width: '100%'
                }, 5000,
                    function () {
                        $('#msgDiv').text('Animation completed..');
                    });
            },
            start: function () {
                $('#msgDiv').append('starting animation..');
            }
        });

});

