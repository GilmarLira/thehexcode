/* **********************************************
     Begin interaction.js
********************************************** */// Interaction
// ////////////////////////////////////////////////////
function initContainer(){containerWidth=$(window).width();containerHeight=$(window).height();$(".container").css({height:containerHeight});console.log(containerHeight)}var containerWidth,containerHeight,delay=function(){var e=0;return function(t,n){clearTimeout(e);e=setTimeout(t,n)}}();$(window).resize(function(){delay(function(){console.log("Resize...");initContainer()},100)});$(document).ready(function(){$(".main_nav li").click(function(){var e=$(this).index();console.log(e);$(".content section").eq(e).show().siblings("section").hide()})});