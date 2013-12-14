
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
			break;
		case 'g' :
			sliderG = target.value;
			break;
		case 'b' :
			sliderB = target.value;
			break;
		case 'l' :
			sliderL = target.value/255;
			break;
	}

	$("#circle-r").css('fill','rgba('+sliderR+',0,0,'+sliderL+')');
	$("#circle-g").css('fill','rgba(0,'+sliderG+',0,'+sliderL+')');
	$("#circle-b").css('fill','rgba(0,0,'+sliderB+','+sliderL+')');

	$("#petal-c").css('fill','rgba(0,'+sliderG+','+sliderB+','+sliderL+')');
	$("#petal-m").css('fill','rgba('+sliderR+',0,'+sliderB+','+sliderL+')');
	$("#petal-y").css('fill','rgba('+sliderR+','+sliderG+',0,'+sliderL+')');

	$("#core").css('fill','rgba('+sliderR+','+sliderG+','+sliderB+','+sliderL+')');
}

// Color Code Interactions
$("#section-colorcode .interaction-teaser > div").click(function(){
  	$("#section-colorcode .interaction").fadeIn();
});

$(".interaction .unit-value").click(function(){
	console.log("scale animation");

	$(".interaction .unit").toggleClass("unit-collapsed");
	
	// $(".scale .unit").animate({
	// 	color: "transparent",
	// 	left: 50 + "%"
	// }, 1000, function(){});
});

$(".unit .unit-control-up").click(function(){
	logPositions();
});

$(".unit .unit-control-down").click(function(){
	logPositions();
});

function logPositions(){
	// var thisring = document.getElementByID("ring-red1");
	console.log( "Ring offset: "+$("#ring-red1").position().top );
	// $("#ring-red1 .letter").each(function(index){
	// 	console.log( "Letter "+index+": "+$(this).position().top );
	// });

	var ringPositionTop = $("#ring-red1").position().top;
	var letterIndex = ringPositionTop / 150;
}

// Snapping behavior
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


// Other functions
function initContainer() {
	initRing();
}

