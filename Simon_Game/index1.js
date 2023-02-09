var randomNo = -1;
//randomNo = Math.floor(Math.random() * 4);
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var soundList = ["red.mp3","blue.mp3","green.mp3","yellow.mp3","wrong.mp3"];
var temp;
var randomChosenColour;

function nextSequence()
{
    console.log("nextSequence");
     randomNo = Math.floor(Math.random() * 4);
      randomChosenColour = buttonColours[randomNo];
      gamePattern.push(randomChosenColour);

    //   setInterval(() => {
    //             $("#"+randomChosenColour).fadeOut();
    //             $("#"+randomChosenColour).fadeIn();
    //             // $("#"+randomChosenColour).fadeToggle();
    //         }, 500);
   // $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   $("div").on(click, function () {
    $("#" + randomChosenColour).fadeOut(300).fadeIn(300).fadeIn(300);
    console.log("nextSequence");
});

            temp = soundList[randomNo];
                var audio = new Audio("sounds/" + temp);
                audio.play();
}


/*
$("div").click(function () { 
    // e.preventDefault();
    let v = randomChosenColour;
    $('#'+v).fadeOut(300,function () {$('#'+v).fadeIn()});
    // '#'+randomChosenColour
});
*/
// $("div").click(function () { 
    
//     //let v = randomChosenColour;
//     // $("#"+randomChosenColour).fadeOut(300).fadeIn(300);
    


//     setInterval(() => {
//         $("#"+randomChosenColour).fadeOut();
//         $("#"+randomChosenColour).fadeIn();
//         // $("#"+randomChosenColour).fadeToggle();
//     }, 500);
//     temp = soundList[randomNo];
//     var audio = new Audio("sounds/" + temp);
//     audio.play();

//     // '#'+randomChosenColour
// });
////////////////////wrong one///////////////////////////
/*$("div").click(function () { 
        // e.preventDefault();
        $("#yellow").fadeOut();
        // '#'+randomChosenColour
    });
    $("div").click(function () { 
        // e.preventDefault();
        $("#yellow").fadeIn();
        // '#'+randomChosenColour
    });
*/
    // $('#'+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    