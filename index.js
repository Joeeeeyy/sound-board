 $(document).ready(function () {
     function play(str) {
         var audio = document.getElementById(str);
         audio.play();
     }
     $('#shh').on("click", function (e) {
        $('#display').text('🤫');
         play('F');
     });
     $('#moan').on("click", function (e) {
        $('#display').text('👄');
         play('G');
     });
    $('#fart').on("click", function (e) {
        $('#display').text('💩');
        play('H');
    });
    $('#moo').on("click", function (e) {
        $('#display').text('🐮');
        play('J');
    });
    $('#bark').on("click", function (e) {
        $('#display').text('🐶');
        play('D');
    });
    $('#lol').on("click", function (e) {
        $('#display').text('🥸');
        play('K');
    });
    
    $(this).on("keydown", function (e) {
        if (e.keyCode === 70) {
            play('F');
            $('#shh').fadeTo(100, 0.1).fadeTo(200, 1.0);
            $('#display').text('🤫');
        } else if (e.keyCode === 71) {
            play('G');
            $('#moan').fadeTo(100, 0.1).fadeTo(200, 1.0);
            $('#display').text('👄');
        } else if (e.keyCode === 68) {
            play('D');
            $('#bark').fadeTo(100, 0.1).fadeTo(200, 1.0);
            $('#display').text('🐶');
        } else if (e.keyCode === 75) {
            play('K');
            $('#lol').fadeTo(100, 0.1).fadeTo(200, 1.0);
            $('#display').text('🥸');
        };
    });
    
 });