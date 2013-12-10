
// Interaction
// ////////////////////////////////////////////////////

window.addEventListener('load', initContainer, false);

// Nav reset
$(".main_nav li").click(function(){
  $(".interaction").fadeOut();
});


// Get viewport dimensions
function initContainer() {
    colorInput = document.getElementById('color-input');
    colorInput.addEventListener('keyup', input_color, false);
    initRing();
}


// Color depth-interaction
$(".bit").click(function(){
  $(".bit-image-container").css('display', 'none').eq($(this).index()).css('display', 'block');
  $(this).toggleClass("selected", true).siblings(".bit").toggleClass("selected", false);
});

$("#section-technology .interaction-teaser img").click(function(){
  $("#section-technology .interaction").fadeIn();
});

$(".interaction .close").click(function(){
  $(".interaction").fadeOut();
});



$(document).ready(function(){
    var options = {
      $menu: $('.nav_list'),
      menuSelector: 'a',
      panelSelector: 'section',
      namespace: '.panelSnap',
      onSnapStart: function(){},
      onSnapFinish: function(){},
      onActivate: function(){},
      directionThreshold: 100,
      slideSpeed: 300
    };

    $('.content').panelSnap(options); 
});

