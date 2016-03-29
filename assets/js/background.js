var background = $("#bkg"),
    curr = 0,
    min = 1,
    max = 4;

$(document).ready(function() {
        background.css("background-image", "url('/assets/img/bkg/" + min + ".jpg')");
        background.css("transition", "background 1s linear");
        curr = 1;
    var backInt = setInterval(function() {
        var newint = ++curr;
        if (newint > max) newint = min;
        background.css("background-image", "url('/assets/img/bkg/" + newint + ".jpg')");
        curr = newint;
    }, 7500);
});