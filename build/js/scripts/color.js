
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
