$(document).ready(function() {
  //these will establish the goal and the random values attached to each crystal
  var randomScore = Math.floor(Math.random() * 120) + 10;
  var randomGemValue1 = Math.floor(Math.random() * 4) + 1;
  var randomGemValue2 = Math.floor(Math.random() * 8) + 2;
  var randomGemValue3 = Math.floor(Math.random() * 16) + 3;
  var randomGemValue4 = Math.floor(Math.random() * 32) + 4;

  var gemValues = [
    randomGemValue1,
    randomGemValue2,
    randomGemValue3,
    randomGemValue4
  ]; //this array contains the possible values
  var gemPath = [
    "assets/images/jade.png",
    "assets/images/ruby.png",
    "assets/images/sapphire.png",
    "assets/images/topaz.png"
  ];
  var currentScore = 0;
  var wins = 0;
  var losses = 0;

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
    //why does $(___) have to be the class instead of the image element?
    console.log($(".gems")); //a little stuck here.  GAAAHHHHH!
    //get the value from the data value using attr (?), not fully sure how to do that, look at past exercises
    //add the value pulled from the gems data value to the currentScore
    //if the current score > randomScore then you lose, losses++ (maybe indicate that somehow)
    //if the current scor === randomScore then you win, win++ (maybe indicate that too)
  });
});
