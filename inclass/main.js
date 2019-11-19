// A $( document ).ready() block.
$( document ).ready(function() {
    var number = Math.floor(Math.random() * 100001);
    console.log(number);
    var guesses = '';
    $('#submit').click(function(){
      var guess = $('input').val();
      guesses += guess + ' ';
      $('.guesses p').text(guesses);
      console.long(guess);
      if (number == guess) {
        $('h1').text(number + 'is right!');
        $('input').val('');
      } else if (number < guess) {
        $('h1').text(number + 'is too high!');
        $('input').val('');
      } else {
        $('h1').text(number + 'is too low!');
        $('input').val('');
      }
    });
    $(document).keypress(function(e){
      if(e.which == 13){
        $('#submit').click();
      }
    });


});
