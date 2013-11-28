
// Interaction
// ////////////////////////////////////////////////////

window.addEventListener('load', initContainer, false);

var containerWidth, containerHeight, colorInput;

var delay = (function(){
      var timer = 0;
      return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
      };
    })();

$(window).resize(function() { 
    delay(function(){
            console.log('Resize...');
            initContainer();
        }, 100);
});


// Get viewport dimensions
function initContainer() {
    colorInput = document.getElementById('color-input');
    colorInput.addEventListener('keyup', input_color, false);

    containerWidth = $(window).width();
    containerHeight = $(window).height();

    $(".container").css({
        height: containerHeight
    });
    
    console.log(containerHeight);
    initRing();
}

$(document).ready(function(){

    $(".main_nav li").click(function(){
        var $index = $(this).index();
        console.log("Current section: "+$index);

        // Slide animation is currently buggy
        // $(".content section").eq($index).css('z-index', '2').slideDown("slow", function(){
        //     $(this).siblings("section").css('z-index', '0').slideUp();
        // });

        $(".content section").eq($index).show().siblings("section").hide();
        // $(".content section").fadeOut(400).delay(400).eq($index).fadeIn(400);
    });
});

