// Fartghost.js
// with jQuery
console.log("foo");
$(document).ready(function(){

  $screen = $("#screen");
  $screen.width("320");
  $screen.height("320");
  $screen.css("background", "url(img/bg320.png) no-repeat");

  // fart in general
  $screen.click(function(m_event){
    var mX = 0; // $(this).position().left;
    var mY = 0 ; // $(this).position().top;
    console.log("farted at " + (m_event.pageX - mX) + ", " + (m_event.pageY - mY));

  // create a fart graphic
  $newfart = $('<div></div>');
  var newfart_width = 100,
      newfart_height = 100;
  $newfart.width(newfart_width);
  $newfart.height(newfart_height);
  $newfart.css("background", "url(img/fart100t.png) no-repeat");
  $newfart.css({
    'position': 'fixed',
    'top': m_event.pageY - ( newfart_height / 2 ) + "px",
    'left': m_event.pageX - (newfart_width / 2) + 'px',
});
  $newfart.appendTo($screen);
  $newfart.fadeOut("slow");
  
  }); // end screen click


$("#notes").html("with JQuery 6!");


});

