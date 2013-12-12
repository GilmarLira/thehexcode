
// Interaction
// ////////////////////////////////////////////////////
window.addEventListener('load', initContainer, false);

// globals
var sliderR, sliderG, sliderB, sliderL;
sliderR = 255;
sliderG = 255;
sliderB = 255;
sliderL = 255;


// Nav reset
$(".main_nav li").click(function(){
  	$(".interaction").fadeOut();
});

$(".interaction .close").click(function(){
  	$(".interaction").fadeOut();
});


// Get viewport dimensions
function initContainer() {
	colorInput = document.getElementById('color-input');
	colorInput.addEventListener('keyup', input_color, false);
	initRing();
}


// Color depth-interaction
$("#section-technology .interaction-teaser img").click(function(){
 	$("#section-technology .interaction").fadeIn();
});

$(".bit").click(function(){
  	$(".bit-image-container").css('display', 'none').eq($(this).index()).css('display', 'block');
  	$(this).toggleClass("selected", true).siblings(".bit").toggleClass("selected", false);
});



// Additive Color interactions
$("#section-additivecolor .interaction-teaser > div").click(function(){
  	$("#section-additivecolor .interaction").fadeIn();
});

function updateSlider(target){
  	// console.log(target.id + ": " + target.value);

  	switch(target.id) {
		case 'r' :
			sliderR = target.value;
			// console.log("updated sliderR: "+sliderR);
			break;
		case 'g' :
			sliderG = target.value;
			// console.log("updated sliderG: "+sliderG);
			break;
		case 'b' :
			sliderB = target.value;
			// console.log("updated sliderB: "+sliderB);
			break;
	}

	$("#circle-r").css('fill','rgb('+sliderR+',0,0)');
	$("#circle-g").css('fill','rgb(0,'+sliderG+',0)');
	$("#circle-b").css('fill','rgb(0,0,'+sliderB+')');

	$("#petal-c").css('fill','rgb(0,'+sliderG+','+sliderB+')');
	$("#petal-m").css('fill','rgb('+sliderR+',0,'+sliderB+')');
	$("#petal-y").css('fill','rgb('+sliderR+','+sliderG+',0)');

	$("#core").css('fill','rgb('+sliderR+','+sliderG+','+sliderB+')');
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

