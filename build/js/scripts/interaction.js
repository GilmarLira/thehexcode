
// INTERACTION
// ////////////////////////////////////////////////////
window.addEventListener('load', initContainer, false);

function initContainer() {
	initRing();
}

// the number of unit in the strip
const NUM_POSTERS = 16;



// GLOBALS
// ////////////////////////////////////////////////////
var ring, ring_container, red1, red2, green1, green2, blue1, blue2, unit, color, sliderR, sliderG, sliderB, sliderL, rred, rgreen, rblue;
sliderR = 0;
sliderG = 0;
sliderB = 0;
sliderL = 1;



// NAV RESET
// ////////////////////////////////////////////////////
$(".main-nav li").click(function(){
  	$(".interaction-block").fadeOut();
  	$(".interaction").fadeOut();
});

$(".interaction .close").click(function(){
  	$(".interaction").fadeOut();
  	$(".interaction-block").fadeOut();
});



// COLOR DEPTH INTERACTION
// ////////////////////////////////////////////////////
$("#section-technology .interaction-teaser img").click(function(){
 	$("#section-technology .interaction").fadeIn();
});

$(".bit").click(function(){
  	$(".bit-image-container").css('display', 'none').eq($(this).index()).css('display', 'block');
  	$(this).toggleClass("selected", true).siblings(".bit").toggleClass("selected", false);
});



// ADDITIVE COLOR INTERACTION
// ////////////////////////////////////////////////////
$("#section-additivecolor .interaction-teaser > div").click(function(){
  	$("#section-additivecolor .interaction-block").fadeIn(function(){
  		$("#section-additivecolor .interaction.first").fadeIn();	
  	});
});

$("#section-additivecolor .interaction .nav-next").click(function(){
	var currentInteraction = $(this).parents(".interaction");
	currentInteraction.fadeOut(300, function(){
		$(this).next().fadeIn();
	});
});

$("#section-additivecolor .interaction .nav-prev").click(function(){
	var currentInteraction = $(this).parents(".interaction");	
	currentInteraction.fadeOut(300, function(){
		$(this).prev().fadeIn();
	});
});



// COLOR CODE INTERACTION
// ////////////////////////////////////////////////////
$("#section-colorcode .interaction-teaser > div").click(function(){
  	$("#section-colorcode .interaction-block").fadeIn(function(){
  		$(this).find(".interaction").eq(0).fadeIn();
  	});
});

$("#section-colorcode .interaction-block .nav-next").click(function(){
	// console.log("scale animation");
	// $("#section-colorcode .interaction .scale").toggleClass("unit-collapsed", true);
	// $("#section-colorcode .interaction .scale").clone().appendTo("#section-colorcode .interaction-widget");
	var currentInteraction = $(this).parents(".interaction");
	currentInteraction.fadeOut(300, function(){
		$(this).next().fadeIn();
	});
});


$(".unit-control-up").click(function(){
	logPositions($(this).parent(), "down");
});

$(".unit-control-down").click(function(){
	logPositions($(this).parent(), "up");
});

// $(".super-control-up").click(function(){
// 	superPositions($(this).parent(), "up");
// });

// $(".super-control-down").click(function(){
// 	superPositions($(this).parent(), "down");
// });




function updateSlider(target){
	var $superParent = $(target).parents(".interaction-widget");
	var $currentFlower = $superParent.find(".rgb-container");
	
	if (target.id == 'l'){
		$currentFlower.find("#circle-r").css('fill','rgba('+target.value+',0,0,'+sliderL+')');
		$currentFlower.find("#circle-g").css('fill','rgba(0,'+target.value+',0,'+sliderL+')');
		$currentFlower.find("#circle-b").css('fill','rgba(0,0,'+target.value+','+sliderL+')');
		$currentFlower.find("#petal-c").css('fill','rgba(0,'+target.value+','+target.value+','+sliderL+')');
		$currentFlower.find("#petal-m").css('fill','rgba('+target.value+',0,'+target.value+','+sliderL+')');
		$currentFlower.find("#petal-y").css('fill','rgba('+target.value+','+target.value+',0,'+sliderL+')');
		$currentFlower.find("#core").css('fill','rgba('+target.value+','+target.value+','+target.value+','+sliderL+')');
	} else {
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
		}
		$currentFlower.find("#circle-r").css('fill','rgb('+sliderR+',0,0)');
		$currentFlower.find("#circle-g").css('fill','rgb(0,'+sliderG+',0)');
		$currentFlower.find("#circle-b").css('fill','rgb(0,0,'+sliderB+')');
		$currentFlower.find("#petal-c").css('fill','rgb(0,'+sliderG+','+sliderB+')');
		$currentFlower.find("#petal-m").css('fill','rgb('+sliderR+',0,'+sliderB+')');
		$currentFlower.find("#petal-y").css('fill','rgb('+sliderR+','+sliderG+',0)');
		$currentFlower.find("#core").css('fill','rgb('+sliderR+','+sliderG+','+sliderB+')');
	}
}



// SLOT MACHINE ENGINE
// ////////////////////////////////////////////////////
var slotMachineAnimationSpeed = 400;

function logPositions(container, way){
	var $currentRing = container.find(".ring");
	var ringPositionTop, currentLetterIndex;

	console.log("container: ");
 	console.log(container);
 	console.log("currentRing: ");
 	console.log($currentRing.attr('id'));

	switch($currentRing.attr('id')) {
		case 'ring-red1' :
			ringPositionTop = $("#ring-red1").position().top;
			currentLetterIndex= -ringPositionTop / 200;
			break;
		case 'ring-red2' :
			ringPositionTop = $("#ring-red2").position().top;
			currentLetterIndex= -ringPositionTop / 200;
			break;
		case 'ring-green1' :
			ringPositionTop = $("#ring-green1").position().top;
			currentLetterIndex= -ringPositionTop / 200;
			break;
		case 'ring-green2' :
			ringPositionTop = $("#ring-green2").position().top;
			currentLetterIndex= -ringPositionTop / 200;
			break;
		case 'ring-blue1' :
			ringPositionTop = $("#ring-blue1").position().top;
			currentLetterIndex= -ringPositionTop / 200;
			break;
		case 'ring-blue2' :
			ringPositionTop = $("#ring-blue2").position().top;
			currentLetterIndex= -ringPositionTop / 200;
			break;
	}

	
 	
 	console.log("currentLetterIndex: "+currentLetterIndex);
	
	if ( $currentRing.is(":animated") ) {
		return false;
	}

	if ( way == "up" ){
		console.log("Goin up");
		if ( currentLetterIndex < 15 ){
			currentLetterIndex++;
			$currentRing.animate({
				top: '-=200px'   
			}, slotMachineAnimationSpeed);
		}
	}
	else if ( way == "down" ){
		console.log("goin down");
		if ( currentLetterIndex > 0 ){
			currentLetterIndex--;
			$currentRing.animate({
				top: '+=200px'   
			}, slotMachineAnimationSpeed);
		}
	}
	
	var $currentLetterElement = $currentRing.find('.letter')[currentLetterIndex];
	update_color($currentLetterElement);
}



// SNAPPING
// ////////////////////////////////////////////////////
$(document).ready(function(){
	var options = {
	  	$menu: $('.nav-list'),
		menuSelector: 'a',
		panelSelector: 'section',
		namespace: '.panelSnap',
		onSnapStart: function(){},
		onSnapFinish: function(){},
		onActivate: function(){},
		directionThreshold: 100,
		slideSpeed: 300
	};

	// $('.content').panelSnap(options); 
});


// OTHER FUNCTIONS
// ////////////////////////////////////////////////////
function colorize(color){    
	console.log("colorize! :"+color);
	if (color == "transparent"){
		$("#section-colorcode .interaction").css({
			"background-color": "transparent"
		});
	} else {
		$("#section-colorcode .interaction").css({
			"background-color": "#"+color
		});
	}
}


// RING
// ////////////////////////////////////////////////////
function initRing () {
	// populate_ring(document.getElementById('rred'));
	// populate_ring(document.getElementById('rgreen'));
	// populate_ring(document.getElementById('rblue'));

	populate_ring(document.getElementById('ring-red1'));
	populate_ring(document.getElementById('ring-red2'));
	populate_ring(document.getElementById('ring-green1'));
	populate_ring(document.getElementById('ring-green2'));
	populate_ring(document.getElementById('ring-blue1'));
	populate_ring(document.getElementById('ring-blue2'));

	ring_controller.init();
};


// Ring population
function populate_ring (subring) {
	for (var i = 0; i < NUM_POSTERS; ++i) {
		var item = build_ring_element(data[i]);
		item.index = i;	
		subring.appendChild(item);
	}
};

// Ring construction
function build_ring_element (item_data) {
	var item = document.createElement('li');
	item.className = "letter";
	item.textContent = item_data.value;
	return item;
};

// Ring Controller
var ring_controller = {};

// performs all pre-flight operations needed to deal with interactions
ring_controller.init = function () {
	// rred = document.getElementById('rred').childNodes[0].textContent;	
	// rgreen = document.getElementById('rgreen').childNodes[0].textContent;
	// rblue = document.getElementById('rblue').childNodes[0].textContent;

	red1 = document.getElementById('ring-red1').childNodes[0].textContent;
  	red2 = document.getElementById('ring-red2').childNodes[0].textContent;
	green1 = document.getElementById('ring-green1').childNodes[0].textContent;
	green2 = document.getElementById('ring-green2').childNodes[0].textContent;
	blue1 = document.getElementById('ring-blue1').childNodes[0].textContent;
	blue2 = document.getElementById('ring-blue2').childNodes[0].textContent; 
};

function update_color(e){
	switch(e.parentNode.id) {
		// case 'rred' :
		// 	red1 = e.textContent;
		// 	console.log("updated rr: "+rred);
		// 	break;
		// case 'rgreen' :
		// 	red1 = e.textContent;
		// 	console.log("updated rg: "+rgreen);
		// 	break;
		// case 'rblue' :
		// 	red1 = e.textContent;
		// 	console.log("updated rb: "+rblue);
		// 	break;
		case 'ring-red1' :
			red1 = e.textContent;
			console.log("updated r1: "+red1);
			break;
		case 'ring-red2' :
			red2 = e.textContent;
			console.log("updated r2: "+red2);
			break;
		case 'ring-green1' :
			green1 = e.textContent;
			console.log("updated g1: "+green1);
			break;
		case 'ring-green2' :
			green2 = e.textContent;
			console.log("updated g2: "+green2);
			break;
		case 'ring-blue1' :
			blue1 = e.textContent;
			console.log("updated b1: "+blue1);
			break;
		case 'ring-blue2' :
			blue2 = e.textContent;
			console.log("updated b2: "+blue2);
			break;    
	}

	
	color = red1 + red2 + green1 + green2 + blue1 + blue2;
	colorize(color);
}















