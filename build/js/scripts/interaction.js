
// Interaction
// ////////////////////////////////////////////////////

window.addEventListener('load', initContainer, false);

// var containerWidth, containerHeight, colorInput;

// var delay = (function(){
//       var timer = 0;
//       return function(callback, ms){
//         clearTimeout (timer);
//         timer = setTimeout(callback, ms);
//       };
//     })();

// $(window).resize(function() { 
//     delay(function(){
//             console.log('Resize...');
//             initContainer();
//         }, 250);
// });


// Get viewport dimensions
function initContainer() {
    // containerWidth = $(window).width();
    // containerHeight = $(window).height();

    // $(".content>section").css({
    //     minHeight: containerHeight
    // });

    colorInput = document.getElementById('color-input');
    colorInput.addEventListener('keyup', input_color, false);

    initRing();
}

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

