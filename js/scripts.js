
// Color.js
// ////////////////////////////////////////////////////

/* function input_color(){
	var color = colorInput.value;
	colorize(color);
} */

/* 
// the number of unit in the strip
const NUM_POSTERS = 16;

// Globals
// ////////////////////////////////////////////////////
var ring, ring_container, red1, red2, green1, green2, blue1, blue2, unit, color;


// Init
// ////////////////////////////////////////////////////
function initRing () {
	populate_ring(document.getElementById('ring-red1'));
	populate_ring(document.getElementById('ring-red2'));
	populate_ring(document.getElementById('ring-green1'));
	populate_ring(document.getElementById('ring-green2'));
	populate_ring(document.getElementById('ring-blue1'));
	populate_ring(document.getElementById('ring-blue2'));

	ring_container = document.getElementById('ring-container');
	
	ring_controller.init();

	// hide the address bar once everything has loaded
	// window.setTimeout(function() { window.scrollTo(0, 0); }, 2000);  
};


// Ring population
// ////////////////////////////////////////////////////
function populate_ring (subring) {
	for (var i = 0; i < NUM_POSTERS; ++i) {
		var item = build_ring_element(data[i]);
		item.index = i;	
		subring.appendChild(item);
	}
};


function build_ring_element (item_data) {
	var item = document.createElement('li');
	item.className = "letter";
	item.textContent = item_data.value;
	item.addEventListener('mouseup', change_value, false);
	
	return item;
};


function change_value(event){    
	var letter = event.target;
	var margin = parseInt(getComputedStyle(letter).marginTop);
	var position = -letter.index * (letter.clientHeight + margin);
	// console.log("Letter margin is: "+letter.style.marginBottom+0);

	update_color(letter);
	ring_controller.setPosition(letter.parentNode, position);
}



// Ring Controller
// ////////////////////////////////////////////////////

var ring_controller = {};

// performs all pre-flight operations needed to deal with interactions
ring_controller.init = function () {
	red1 = document.getElementsByClassName('ring')[0].childNodes[0].textContent;
	red2 = document.getElementById('ring-red2').childNodes[0].textContent;
	green1 = document.getElementById('ring-green1').childNodes[0].textContent;
	green2 = document.getElementById('ring-green2').childNodes[0].textContent;
	blue1 = document.getElementById('ring-blue1').childNodes[0].textContent;
	blue2 = document.getElementById('ring-blue2').childNodes[0].textContent;
};


ring_controller.setPosition = function (e, position) {
	e.style.webkitTransform = 'translateY(' + position + 'px)';
};

function update_color(e){
	// console.log("update_color");
	switch(e.parentNode.id) {
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
} */


// Data
// ////////////////////////////////////////////////////

var data = 
[
    { value: 'f' }, 
    { value: 'e' }, 
    { value: 'd' }, 
    { value: 'c' }, 
    { value: 'b' }, 
    { value: 'a' }, 
    { value: '9' }, 
    { value: '8' }, 
    { value: '7' }, 
    { value: '6' }, 
    { value: '5' }, 
    { value: '4' }, 
    { value: '3' }, 
    { value: '2' }, 
    { value: '1' }, 
    { value: '0' }, 
];

// Interaction
// ////////////////////////////////////////////////////

window.addEventListener('load', initContainer, false);

function initContainer() {
	initRing();
}

// the number of unit in the strip
const NUM_POSTERS = 16;

// Globals
// ////////////////////////////////////////////////////
var ring, ring_container, red1, red2, green1, green2, blue1, blue2, unit, color, sliderR, sliderG, sliderB, sliderL;
sliderR = 255;
sliderG = 255;
sliderB = 255;
sliderL = 255;


// Nav reset
$(".main-nav li").click(function(){
  	$(".interaction").fadeOut();
});

$(".interaction .close").click(function(){
  	$(".interaction").fadeOut();
  	$(".interaction-block").fadeOut();
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
  	$("#section-additivecolor .interaction-block").fadeIn(function(){
  		$("#section-additivecolor .interaction.first").fadeIn();	
  	});
});

$("#section-additivecolor .interaction .nav-next").click(function(){
	var currentInteraction = $(this).parents(".interaction");
	currentInteraction.fadeOut().delay(400, function(){
		console.log(currentInteraction.next(".interaction"));
		currentInteraction.next(".interaction").show().fadeIn();
	});

});

$("#section-additivecolor .interaction .nav-prev").click(function(){
	var currentInteraction = $(this).parents(".interaction");
	currentInteraction.fadeOut().delay(400, function(){
		console.log(currentInteraction.prev(".interaction"));
		currentInteraction.prev(".interaction").show().fadeIn();
	});

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


$("#section-colorcode .section-container .next-button").click(function(){
	console.log("Color Code interaction fullscreen");
	$("#section-colorcode .interaction").toggleClass("fullscreen", true);
});


$("#section-colorcode .interaction .next-button").click(function(){
	console.log("scale animation");
	$("#section-colorcode .interaction .scale").toggleClass("unit-collapsed", true);
});


// $("#section-colorcode .interaction .close").unbind().click(function(){
//   	$("#section-colorcode .interaction").toggleClass("fullscreen", false);
//   	$("#section-colorcode .interaction .scale").toggleClass("unit-collapsed", false);
//   	colorize("transparent");
// });


$(".unit-control-up").click(function(){
	logPositions($(this).parent(), "up");
});

$(".unit-control-down").click(function(){
	logPositions($(this).parent(), "down");
});




// Slot machine functionality
var slotMachineAnimationSpeed = 400;

function logPositions(container, way){
	var $currentRing = container.find(".ring");
	var ringPositionTop = $("#ring-red1").position().top;
	var currentLetterIndex = -ringPositionTop / 150;

	// console.log("container: ");
	// console.log(container);	
	// console.log("currentRing: ");
	// console.log($currentRing);
	// console.log("currentLetterIndex: "+currentLetterIndex);

	
	if ( $currentRing.is(":animated") ) {
		return false;
	}

	if ( way == "up" ){
		console.log("Goin up");
		if ( currentLetterIndex < 15 ){
			currentLetterIndex++;
			$currentRing.animate({
				top: '-=150px'   
			}, slotMachineAnimationSpeed);
		}
	}
	else if ( way == "down" ){
		console.log("goin down");
		if ( currentLetterIndex > 0 ){
			currentLetterIndex--;
			$currentRing.animate({
				top: '+=150px'   
			}, slotMachineAnimationSpeed);
		}
	}
	
	var $currentLetterElement = $currentRing.find('.letter')[currentLetterIndex];
	update_color($currentLetterElement);
}


// Snapping behavior
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


// Other functions
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


// Init
function initRing () {
	populate_ring(document.getElementById('ring-red1'));
	// populate_ring(document.getElementById('ring-red2'));
	// populate_ring(document.getElementById('ring-green1'));
	// populate_ring(document.getElementById('ring-green2'));
	// populate_ring(document.getElementById('ring-blue1'));
	// populate_ring(document.getElementById('ring-blue2'));

	ring_controller.init();

	// hide the address bar once everything has loaded
	// window.setTimeout(function() { window.scrollTo(0, 0); }, 2000);  
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
	red1 = document.getElementsByClassName('ring')[0].childNodes[0].textContent;
/*  	red2 = document.getElementById('ring-red2').childNodes[0].textContent;
	green1 = document.getElementById('ring-green1').childNodes[0].textContent;
	green2 = document.getElementById('ring-green2').childNodes[0].textContent;
	blue1 = document.getElementById('ring-blue1').childNodes[0].textContent;
	blue2 = document.getElementById('ring-blue2').childNodes[0].textContent; */
	red2 = "f";
	green1 = "f";
	green2 = "f";
	blue1 = "f";
	blue2 = "f";
};

function update_color(e){
	switch(e.parentNode.id) {
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

	red2 = "f";
	green1 = "f";
	green2 = "f";
	blue1 = "f";
	blue2 = "f";
	
	color = red1 + red2 + green1 + green2 + blue1 + blue2;
	colorize(color);
}















