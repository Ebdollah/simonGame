let randomNo = -1;
//randomNo = Math.floor(Math.random() * 4);
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];

let soundList = ["red.mp3", "blue.mp3", "green.mp3", "yellow.mp3", "wrong.mp3"];
let userClickedPattern = [];
let temp;
let randomChosenColour;
let flag = false;
let level = 0;


$('.btn').on('click', function () {
    handler(this.id);
    nextSequence(this.id);
    // console.log(this.id);
    //var userChosenColour = $(this).attr("id");

    animatePress(this.id);
    playSound(this.id);
    let index = buttonColours.indexOf(this.id);
    checkAnswer(index);
    //userClickedPattern.push(userChosenColour);

    //console.log(userClickedPattern);

});
$(document).on("keypress", function () {
    //console.log(this.id);
    if (flag === false) {

        nextSequence();
        flag = true;
        level++;
        $("h1").text("Level " + level);
    }

});


function handler(userChosenColour) {
    //console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);

}
function playSound(name) {
    temp = soundList[name];
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


///*
function nextSequence(thisId) {
    randomNo = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNo];
    //console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    $("#" + thisId).fadeOut(100).fadeIn(100).fadeIn(100);


}
//*/
function animatePress(currentColour) {
    $("." + currentColour).addClass("pressed");
    setInterval(function () { $("." + currentColour).removeClass("pressed"); }, 100);

}
function checkAnswer(currentLevel) { console.log(userClickedPattern); }

// $(document).on("load", function() {
//     nextSequence();
//   });

