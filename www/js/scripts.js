/* **********************************************
     Begin data.js
********************************************** */// Data
// ////////////////////////////////////////////////////
function techSlider(e){console.log("Slider value: "+e);$("#tech-slider-image-container div").hide().eq(e).show()}function initContainer(){colorInput=document.getElementById("color-input");colorInput.addEventListener("keyup",input_color,!1);initRing()}function input_color(){var e=colorInput.value;colorize(e)}function colorize(e){console.log("colorize! :"+e);$("#section-hex").css({"background-color":"#"+e})}function initRing(){populate_ring(document.getElementById("ring-red1"));populate_ring(document.getElementById("ring-red2"));populate_ring(document.getElementById("ring-green1"));populate_ring(document.getElementById("ring-green2"));populate_ring(document.getElementById("ring-blue1"));populate_ring(document.getElementById("ring-blue2"));ring_container=document.getElementById("ring-container");ring_controller.init()}function populate_ring(e){for(var t=0;t<NUM_POSTERS;++t){var n=build_ring_element(data[t]);n.index=t;e.appendChild(n)}}function build_ring_element(e){var t=document.createElement("li");t.className="letter";t.textContent=e.value;t.addEventListener("mouseup",change_value,!1);return t}function change_value(e){var t=e.target,n=parseInt(getComputedStyle(t).marginTop),r=-t.index*(t.clientHeight+n);update_color(t);ring_controller.setPosition(t.parentNode,r)}function update_color(e){switch(e.parentNode.id){case"ring-red1":red1=e.textContent;console.log("updated r1: "+red1);break;case"ring-red2":red2=e.textContent;console.log("updated r2: "+red2);break;case"ring-green1":green1=e.textContent;console.log("updated g1: "+green1);break;case"ring-green2":green2=e.textContent;console.log("updated g2: "+green2);break;case"ring-blue1":blue1=e.textContent;console.log("updated b1: "+blue1);break;case"ring-blue2":blue2=e.textContent;console.log("updated b2: "+blue2)}color=red1+red2+green1+green2+blue1+blue2;colorize(color)}var data=[{value:"f"},{value:"e"},{value:"d"},{value:"c"},{value:"b"},{value:"a"},{value:"9"},{value:"8"},{value:"7"},{value:"6"},{value:"5"},{value:"4"},{value:"3"},{value:"2"},{value:"1"},{value:"0"}];window.addEventListener("load",initContainer,!1);$(document).ready(function(){var e={$menu:$(".nav_list"),menuSelector:"a",panelSelector:"section",namespace:".panelSnap",onSnapStart:function(){},onSnapFinish:function(){},onActivate:function(){},directionThreshold:100,slideSpeed:300};$(".content").panelSnap(e)});const NUM_POSTERS=16;var ring,ring_container,red1,red2,green1,green2,blue1,blue2,unit,color,ring_controller={};ring_controller.init=function(){red1=document.getElementsByClassName("ring")[0].childNodes[0].textContent;red2=document.getElementById("ring-red2").childNodes[0].textContent;green1=document.getElementById("ring-green1").childNodes[0].textContent;green2=document.getElementById("ring-green2").childNodes[0].textContent;blue1=document.getElementById("ring-blue1").childNodes[0].textContent;blue2=document.getElementById("ring-blue2").childNodes[0].textContent};ring_controller.setPosition=function(e,t){e.style.webkitTransform="translateY("+t+"px)"};