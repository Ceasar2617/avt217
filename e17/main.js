// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "Document ready! Pull the lever kronk" );

    $('.oak').click(function() {
      $('.oak').toggleClass('shrink');
      $('.oak').toggleClass('colorLightGreen');
      $('.oak h1').toggleClass('hide');
      $('.title h1').toggleClass('font');
      });

    $('.maple').click(function() {
      $('.maple').toggleClass('shrink');
      $('.maple h1').toggleClass('hide');
      $('.title h1').toggleClass('font');
      });

    $('.spruce').click(function() {
      $('.spruce').toggleClass('shrink');
      $('.spruce h1').toggleClass('hide');
      $('.title h1').toggleClass('font');
    });

    $('.palm').click(function() {
      $('.palm').toggleClass('shrink');
      $('.palm h1').toggleClass('hide');
      $('.title h1').toggleClass('font');
    });

    $('.apple').click(function() {
      $('.apple').toggleClass('shrink');
      $('.apple h1').toggleClass('hide');
      $('.title h1').toggleClass('font');
    });





});
