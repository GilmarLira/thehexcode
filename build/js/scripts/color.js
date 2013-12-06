
// Color.js
// ////////////////////////////////////////////////////

function input_color(){
	var color = colorInput.value;
	colorize(color);
}

function colorize(color){    
	console.log("colorize! :"+color);
	$("#section-hex").css("background-color","#"+color);
}

// the number of unit in the strip
const NUM_POSTERS = 16;


// Globals
// ////////////////////////////////////////////////////
var ring, ring_container, red1, red2, green1, green2, blue1, blue2, unit;


// Init
// ////////////////////////////////////////////////////
function initRing () {
	// register pointers to the DOM elements we'll be using
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
	// build each item one by one
	for (var i = 0; i < NUM_POSTERS; ++i) {
		// get a fresh item populated with data
		var item = build_ring_element(data[i]);
		// track its index so we can retrieve it later when we select this item
		item.index = i;
		// add the item to the ring's DOM tree
		subring.appendChild(item);
	}
};


function build_ring_element (item_data) {
	// create a container for this new item
	var item = document.createElement('li');
	// build the element for the letter
	item.className = "letter";
	item.textContent = item_data.value;
	item.addEventListener('mouseup', change_value, false);
	
	return item;
};


function change_value(event){    
	var letter = event.target;
	var position = -letter.index * letter.clientHeight;

	// console.log("Letter is: "+letter.parentNode.clientHeight);
	console.log("position: "+position);


	update_color(letter);
	// ring_controller.setRotation(letter.parentNode, angle);
	ring_controller.setPosition(letter.parentNode, position);
}





// Ring Controller
// ////////////////////////////////////////////////////

// set up our controller object which will be responsible to deal with
// all interaction with the rings
var ring_controller = {
	currentRotation : 0 // stores the ring rotation at all times, in radians
};

// performs all pre-flight operations needed to deal with interactions
ring_controller.init = function () {
	red1 = document.getElementsByClassName('ring')[0].childNodes[0].textContent;
	red2 = document.getElementById('ring-red2').childNodes[0].textContent;
	green1 = document.getElementById('ring-green1').childNodes[0].textContent;
	green2 = document.getElementById('ring-green2').childNodes[0].textContent;
	blue1 = document.getElementById('ring-blue1').childNodes[0].textContent;
	blue2 = document.getElementById('ring-blue2').childNodes[0].textContent;
};

// updates the rotation of the ring to the specified radians angle
// ring_controller.setRotation = function (e, rotation) {
// 	e.style.webkitTransform = 'rotateX(' + rotation + 'rad)';
// };

ring_controller.setPosition = function (e, position) {
	e.style.webkitTransform = 'translateY(' + position + 'px)';
};

function update_color(e){
	console.log("update_color");

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

	var color = red1 + red2 + green1 + green2 + blue1 + blue2;
	document.getElementById("color-input").setAttribute("value", color);
	colorize(color);
}
