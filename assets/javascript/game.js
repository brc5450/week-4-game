var random_result;
var lost = 0;
var win = 0;
var previous = 0;



var resetAndStart = function () {

    $(".crystals").empty();

    var images = ["assets/images/Blue_Gem.png" , "assets/images/Orange_Gem.png", "assets/images/Green_Gem.png", "assets/images/Pink_Gem.png", ] 

    random_result = Math.floor(Math.random() * 102) + 19;


    $("#result").html("Target Score: " + random_result);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 12) + 1;

        // console.log(random);

        var crystal = $("<div>");
        crystal.attr({
            "class": "crystal",
            "data-random": random
        });

        crystal.css({
            "background-image" : "url('" + images[i] + "')",
            "background-size": "cover"
        });

        $(".crystals").append(crystal);
    }
    $("#score").html("Total Score: " + previous);
    $("#lost").html("Loses: " + lost);
    $("#won").html("Wins: " + win);
}


resetAndStart();

$(document).on("click", ".crystal", function () {
    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#score").html("Total Score: " + previous);

    // console.log(previous);

    if (previous > random_result) {

        lost++;

        previous = 0;

        resetAndStart();
    }
    else if (previous === random_result) {

        win++;

        previous = 0;

        resetAndStart();
    }


});
