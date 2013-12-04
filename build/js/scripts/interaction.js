
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

    $(".content>section").css({
        minHeight: containerHeight
    });
    
    console.log(containerHeight);
    initRing();
}

$(document).ready(function(){
          
    $(document).on('click', 'a[href*="#"]', function() {
        var slashedHash = '#/' + this.hash.slice(1);
        if ( this.hash ) {

            if ( slashedHash === location.hash ) {
                $.smoothScroll({scrollTarget: this.hash});
            } else {
                $.bbq.pushState(slashedHash);
            }

            return false;
        }
    });

    $(window).bind('hashchange', function(event) {
        var tgt = location.hash.replace(/^#\/?/,'');
        if ( document.getElementById(tgt) ) {
          $.smoothScroll({scrollTarget: '#' + tgt});
        }
    });

    $(window).trigger('hashchange');
});

