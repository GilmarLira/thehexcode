

function colorize(){
    var $text = $("#color-input").val();
    console.log($text);
    console.log("length: "+$text.length);

    $("#section-colorcode").css("background-color","#"+$text);
}