// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "Document ready! Pull the lever kronk" );

    $('.oak').click(function() {
      $('.oak').toggleClass('shrink');
      $('.oak').toggleClass('colorLightGreen');
      $('.oak h1').toggleClass('hide');
      });

    $('.maple').click(function() {
      $('.maple').toggleClass('shrink');
      $('.maple h1').toggleClass('hide');
      });

    $('.spruce').click(function() {
      $('.spruce').toggleClass('shrink');
      $('.spruce h1').toggleClass('hide');
    });

    $('.palm').click(function() {
      $('.palm').toggleClass('shrink');
      $('.palm h1').toggleClass('hide');
    });

    $('.apple').click(function() {
      $('.apple').toggleClass('shrink');
      $('.apple h1').toggleClass('hide');
    });





});
