$(document).ready(function() {
  //these will establish the goal and the random values attached to each crystal
  var randomScore = Math.floor(Math.random() * 150) + 3;
  var randomGemValue1 = Math.floor(Math.random() * 3) + 1;
  var randomGemValue2 = Math.floor(Math.random() * 6) + 1;
  var randomGemValue3 = Math.floor(Math.random() * 12) + 1;
  var randomGemValue4 = Math.floor(Math.random() * 24) + 1;
  var randomGemValue5 = Math.floor(Math.random() * 48) + 1;

  //this array contains the possible values
  var gemValues = [
    randomGemValue1,
    randomGemValue2,
    randomGemValue3,
    randomGemValue4,
    randomGemValue5
  ];

  var gemPath = [
    "assets/images/jade.png",
    "assets/images/ruby.png",
    "assets/images/sapphire.png",
    "assets/images/topaz.png",
    "assets/images/amathyst.png"
  ]; //this array contains the path of each of the gem graphics

  var currentScore = 0;
  var wins = 0;
  var losses = 0;

  //?  Does this need to be a function?
  $(".goal").text("Goal: " + randomScore);
  $(".currentScore").text("Current Score: " + currentScore);
  $(".wins").text("Wins: " + wins);
  $(".losses").text("Losses: " + losses);

  for (var i = 0; i < gemPath.length; i++) {
    var gemPic = $("<img>");
    gemPic.addClass("gems");
    gemPic.attr("data-value", gemValues[i]);
    gemPic.attr("src", gemPath[i]);
    $("#gemsBox").append(gemPic);
  }

  $(".gems").on("click", function() {
    var gemValue = $(this).attr("data-value");
    currentScore += parseInt(gemValue);
    console.log(gemValue, currentScore);
    if (currentScore === randomScore) {
      wins++;
      console.log("WIN", wins);
    } else if (currentScore > randomScore) {
      losses++;
      console.log("LOSE", losses);
    }
  });

  //TODO if the current score > randomScore then you lose, losses++ (maybe indicate that somehow)
  //TODO if the current scor === randomScore then you win, win++ (maybe indicate that too)
  //TODO maybe add some betting of your wins here
  //TODO add another gem, the purple one and the fashion one?
});
