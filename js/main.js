// Resizes text to fit the cards if necessary
$(function() {
    while( $('#card1').height() > $('.card').height() ) {
        $('#card1').css('font-size', (parseInt($('#card1').css('font-size')) - 1) + "px" );
    }
});

$(function() {
    while( $('#card2').height() > $('.card').height() ) {
        $('#card2').css('font-size', (parseInt($('#card2').css('font-size')) - 1) + "px" );
    }
});

$(function() {
    while( $('#card2').height() > $('.card').height() ) {
        $('#card2').css('font-size', (parseInt($('#card2').css('font-size')) - 1) + "px" );
    }
});
