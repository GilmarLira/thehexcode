// Color.js
// ////////////////////////////////////////////////////
/* function input_color(){
	var color = colorInput.value;
	colorize(color);
} *//* 
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
} */// Data
// ////////////////////////////////////////////////////
function initContainer(){initRing()}function updateSlider(e){var t=$(e).parents(".interaction-widget"),n=t.find(".rgb-container");if(e.id=="l"){n.find("#circle-r").css("fill","rgba("+e.value+",0,0,"+sliderL+")");n.find("#circle-g").css("fill","rgba(0,"+e.value+",0,"+sliderL+")");n.find("#circle-b").css("fill","rgba(0,0,"+e.value+","+sliderL+")");n.find("#petal-c").css("fill","rgba(0,"+e.value+","+e.value+","+sliderL+")");n.find("#petal-m").css("fill","rgba("+e.value+",0,"+e.value+","+sliderL+")");n.find("#petal-y").css("fill","rgba("+e.value+","+e.value+",0,"+sliderL+")");n.find("#core").css("fill","rgba("+e.value+","+e.value+","+e.value+","+sliderL+")")}else{switch(e.id){case"r":sliderR=e.value;break;case"g":sliderG=e.value;break;case"b":sliderB=e.value}n.find("#circle-r").css("fill","rgb("+sliderR+",0,0)");n.find("#circle-g").css("fill","rgb(0,"+sliderG+",0)");n.find("#circle-b").css("fill","rgb(0,0,"+sliderB+")");n.find("#petal-c").css("fill","rgb(0,"+sliderG+","+sliderB+")");n.find("#petal-m").css("fill","rgb("+sliderR+",0,"+sliderB+")");n.find("#petal-y").css("fill","rgb("+sliderR+","+sliderG+",0)");n.find("#core").css("fill","rgb("+sliderR+","+sliderG+","+sliderB+")")}}function logPositions(e,t){var n=e.find(".ring"),r,i;console.log("container: ");console.log(e);console.log("currentRing: ");console.log(n.attr("id"));switch(n.attr("id")){case"ring-red1":r=$("#ring-red1").position().top;i=-r/200;break;case"ring-red2":r=$("#ring-red2").position().top;i=-r/200;break;case"ring-green1":r=$("#ring-green1").position().top;i=-r/200;break;case"ring-green2":r=$("#ring-green2").position().top;i=-r/200;break;case"ring-blue1":r=$("#ring-blue1").position().top;i=-r/200;break;case"ring-blue2":r=$("#ring-blue2").position().top;i=-r/200}console.log("currentLetterIndex: "+i);if(n.is(":animated"))return!1;if(t=="up"){console.log("Goin up");if(i<15){i++;n.animate({top:"-=200px"},slotMachineAnimationSpeed)}}else if(t=="down"){console.log("goin down");if(i>0){i--;n.animate({top:"+=200px"},slotMachineAnimationSpeed)}}var s=n.find(".letter")[i];update_color(s)}function colorize(e){console.log("colorize! :"+e);e=="transparent"?$("#section-colorcode .interaction").css({"background-color":"transparent"}):$("#section-colorcode .interaction").css({"background-color":"#"+e})}function initRing(){populate_ring(document.getElementById("ring-red1"));populate_ring(document.getElementById("ring-red2"));populate_ring(document.getElementById("ring-green1"));populate_ring(document.getElementById("ring-green2"));populate_ring(document.getElementById("ring-blue1"));populate_ring(document.getElementById("ring-blue2"));ring_controller.init()}function populate_ring(e){for(var t=0;t<NUM_POSTERS;++t){var n=build_ring_element(data[t]);n.index=t;e.appendChild(n)}}function build_ring_element(e){var t=document.createElement("li");t.className="letter";t.textContent=e.value;return t}function update_color(e){switch(e.parentNode.id){case"ring-red1":red1=e.textContent;console.log("updated r1: "+red1);break;case"ring-red2":red2=e.textContent;console.log("updated r2: "+red2);break;case"ring-green1":green1=e.textContent;console.log("updated g1: "+green1);break;case"ring-green2":green2=e.textContent;console.log("updated g2: "+green2);break;case"ring-blue1":blue1=e.textContent;console.log("updated b1: "+blue1);break;case"ring-blue2":blue2=e.textContent;console.log("updated b2: "+blue2)}color=red1+red2+green1+green2+blue1+blue2;colorize(color)}function initContainer(){initRing()}function updateSlider(e){var t=$(e).parents(".interaction-widget"),n=t.find(".rgb-container");if(e.id=="l"){n.find("#circle-r").css("fill","rgba("+e.value+",0,0,"+sliderL+")");n.find("#circle-g").css("fill","rgba(0,"+e.value+",0,"+sliderL+")");n.find("#circle-b").css("fill","rgba(0,0,"+e.value+","+sliderL+")");n.find("#petal-c").css("fill","rgba(0,"+e.value+","+e.value+","+sliderL+")");n.find("#petal-m").css("fill","rgba("+e.value+",0,"+e.value+","+sliderL+")");n.find("#petal-y").css("fill","rgba("+e.value+","+e.value+",0,"+sliderL+")");n.find("#core").css("fill","rgba("+e.value+","+e.value+","+e.value+","+sliderL+")")}else{switch(e.id){case"r":sliderR=e.value;break;case"g":sliderG=e.value;break;case"b":sliderB=e.value}n.find("#circle-r").css("fill","rgb("+sliderR+",0,0)");n.find("#circle-g").css("fill","rgb(0,"+sliderG+",0)");n.find("#circle-b").css("fill","rgb(0,0,"+sliderB+")");n.find("#petal-c").css("fill","rgb(0,"+sliderG+","+sliderB+")");n.find("#petal-m").css("fill","rgb("+sliderR+",0,"+sliderB+")");n.find("#petal-y").css("fill","rgb("+sliderR+","+sliderG+",0)");n.find("#core").css("fill","rgb("+sliderR+","+sliderG+","+sliderB+")")}}function logPositions(e,t){var n=e.find(".ring"),r,i;console.log("container: ");console.log(e);console.log("currentRing: ");console.log(n.attr("id"));switch(n.attr("id")){case"ring-red1":r=$("#ring-red1").position().top;i=-r/200;break;case"ring-red2":r=$("#ring-red2").position().top;i=-r/200;break;case"ring-green1":r=$("#ring-green1").position().top;i=-r/200;break;case"ring-green2":r=$("#ring-green2").position().top;i=-r/200;break;case"ring-blue1":r=$("#ring-blue1").position().top;i=-r/200;break;case"ring-blue2":r=$("#ring-blue2").position().top;i=-r/200}console.log("currentLetterIndex: "+i);if(n.is(":animated"))return!1;if(t=="up"){console.log("Goin up");if(i<15){i++;n.animate({top:"-=200px"},slotMachineAnimationSpeed)}}else if(t=="down"){console.log("goin down");if(i>0){i--;n.animate({top:"+=200px"},slotMachineAnimationSpeed)}}var s=n.find(".letter")[i];update_color(s)}function colorize(e){console.log("colorize! :"+e);e=="transparent"?$("#section-colorcode .interaction").css({"background-color":"transparent"}):$("#section-colorcode .interaction").css({"background-color":"#"+e})}function initRing(){populate_ring(document.getElementById("ring-red1"));populate_ring(document.getElementById("ring-red2"));populate_ring(document.getElementById("ring-green1"));populate_ring(document.getElementById("ring-green2"));populate_ring(document.getElementById("ring-blue1"));populate_ring(document.getElementById("ring-blue2"));ring_controller.init()}function populate_ring(e){for(var t=0;t<NUM_POSTERS;++t){var n=build_ring_element(data[t]);n.index=t;e.appendChild(n)}}function build_ring_element(e){var t=document.createElement("li");t.className="letter";t.textContent=e.value;return t}function update_color(e){switch(e.parentNode.id){case"ring-red1":red1=e.textContent;console.log("updated r1: "+red1);break;case"ring-red2":red2=e.textContent;console.log("updated r2: "+red2);break;case"ring-green1":green1=e.textContent;console.log("updated g1: "+green1);break;case"ring-green2":green2=e.textContent;console.log("updated g2: "+green2);break;case"ring-blue1":blue1=e.textContent;console.log("updated b1: "+blue1);break;case"ring-blue2":blue2=e.textContent;console.log("updated b2: "+blue2)}color=red1+red2+green1+green2+blue1+blue2;colorize(color)}var data=[{value:"f"},{value:"e"},{value:"d"},{value:"c"},{value:"b"},{value:"a"},{value:"9"},{value:"8"},{value:"7"},{value:"6"},{value:"5"},{value:"4"},{value:"3"},{value:"2"},{value:"1"},{value:"0"}];window.addEventListener("load",initContainer,!1);const NUM_POSTERS=16;var ring,ring_container,red1,red2,green1,green2,blue1,blue2,unit,color,sliderR,sliderG,sliderB,sliderL,rred,rgreen,rblue;sliderR=0;sliderG=0;sliderB=0;sliderL=1;$(".main-nav li").click(function(){$(".interaction-block").fadeOut();$(".interaction").fadeOut()});$(".interaction .close").click(function(){$(".interaction").fadeOut();$(".interaction-block").fadeOut()});$("#section-technology .interaction-teaser img").click(function(){$("#section-technology .interaction").fadeIn()});$(".bit").click(function(){$(".bit-image-container").css("display","none").eq($(this).index()).css("display","block");$(this).toggleClass("selected",!0).siblings(".bit").toggleClass("selected",!1)});$("#section-additivecolor .interaction-teaser > div").click(function(){$("#section-additivecolor .interaction-block").fadeIn(function(){$("#section-additivecolor .interaction.first").fadeIn()})});$("#section-additivecolor .interaction .nav-next").click(function(){var e=$(this).parents(".interaction");e.fadeOut(300,function(){$(this).next().fadeIn()})});$("#section-additivecolor .interaction .nav-prev").click(function(){var e=$(this).parents(".interaction");e.fadeOut(300,function(){$(this).prev().fadeIn()})});$("#section-colorcode .interaction-teaser > div").click(function(){$("#section-colorcode .interaction-block").fadeIn(function(){$(this).find(".interaction").eq(0).fadeIn()})});$("#section-colorcode .interaction-block .nav-next").click(function(){var e=$(this).parents(".interaction");e.fadeOut(300,function(){$(this).next().fadeIn()})});$(".unit-control-up").click(function(){logPositions($(this).parent(),"down")});$(".unit-control-down").click(function(){logPositions($(this).parent(),"up")});var slotMachineAnimationSpeed=400;$(document).ready(function(){var e={$menu:$(".nav-list"),menuSelector:"a",panelSelector:"section",namespace:".panelSnap",onSnapStart:function(){},onSnapFinish:function(){},onActivate:function(){},directionThreshold:100,slideSpeed:300}});var ring_controller={};ring_controller.init=function(){red1=document.getElementById("ring-red1").childNodes[0].textContent;red2=document.getElementById("ring-red2").childNodes[0].textContent;green1=document.getElementById("ring-green1").childNodes[0].textContent;green2=document.getElementById("ring-green2").childNodes[0].textContent;blue1=document.getElementById("ring-blue1").childNodes[0].textContent;blue2=document.getElementById("ring-blue2").childNodes[0].textContent};window.addEventListener("load",initContainer,!1);const NUM_POSTERS=16;var ring,ring_container,red1,red2,green1,green2,blue1,blue2,unit,color,sliderR,sliderG,sliderB,sliderL,rred,rgreen,rblue;sliderR=0;sliderG=0;sliderB=0;sliderL=1;$(".main-nav li").click(function(){$(".interaction-block").fadeOut();$(".interaction").fadeOut()});$(".interaction .close").click(function(){$(".interaction").fadeOut();$(".interaction-block").fadeOut()});$("#section-technology .interaction-teaser img").click(function(){$("#section-technology .interaction").fadeIn()});$(".bit").click(function(){$(".bit-image-container").css("display","none").eq($(this).index()).css("display","block");$(this).toggleClass("selected",!0).siblings(".bit").toggleClass("selected",!1)});$("#section-additivecolor .interaction-teaser > div").click(function(){$("#section-additivecolor .interaction-block").fadeIn(function(){$("#section-additivecolor .interaction.first").fadeIn()})});$("#section-additivecolor .interaction .nav-next").click(function(){var e=$(this).parents(".interaction");e.fadeOut(300,function(){$(this).next().fadeIn()})});$("#section-additivecolor .interaction .nav-prev").click(function(){var e=$(this).parents(".interaction");e.fadeOut(300,function(){$(this).prev().fadeIn()})});$("#section-colorcode .interaction-teaser > div").click(function(){$("#section-colorcode .interaction-block").fadeIn(function(){$(this).find(".interaction").eq(0).fadeIn()})});$("#section-colorcode .interaction-block .nav-next").click(function(){var e=$(this).parents(".interaction");e.fadeOut(300,function(){$(this).next().fadeIn()})});$(".unit-control-up").click(function(){logPositions($(this).parent(),"down")});$(".unit-control-down").click(function(){logPositions($(this).parent(),"up")});var slotMachineAnimationSpeed=400;$(document).ready(function(){var e={$menu:$(".nav-list"),menuSelector:"a",panelSelector:"section",namespace:".panelSnap",onSnapStart:function(){},onSnapFinish:function(){},onActivate:function(){},directionThreshold:100,slideSpeed:300}});var ring_controller={};ring_controller.init=function(){red1=document.getElementById("ring-red1").childNodes[0].textContent;red2=document.getElementById("ring-red2").childNodes[0].textContent;green1=document.getElementById("ring-green1").childNodes[0].textContent;green2=document.getElementById("ring-green2").childNodes[0].textContent;blue1=document.getElementById("ring-blue1").childNodes[0].textContent;blue2=document.getElementById("ring-blue2").childNodes[0].textContent};