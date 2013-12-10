
// Interaction
// ////////////////////////////////////////////////////

window.addEventListener('load', initContainer, false);


function techSlider(value) {
    console.log("Slider value: "+value);
    $("#tech-slider-image-container div").hide().eq(value).show();
}


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

})


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

