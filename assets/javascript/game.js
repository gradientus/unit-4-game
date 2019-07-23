$(document).ready(function() {
  //these are the starting scores
  var randomScore = Math.floor(Math.random() * 101) + 19;
  var currentScore = 0;
  var wins = 0;
  var losses = 0;

  var randomGemValue1 = Math.floor(Math.random() * 12) + 1;
  var randomGemValue2 = Math.floor(Math.random() * 12) + 1;
  var randomGemValue3 = Math.floor(Math.random() * 12) + 1;
  var randomGemValue4 = Math.floor(Math.random() * 12) + 1;
  var randomGemValue5 = Math.floor(Math.random() * 12) + 1;
  var gemValues = [
    randomGemValue1,
    randomGemValue2,
    randomGemValue3,
    randomGemValue4,
    randomGemValue5
  ];

  //this array contains the possible gem values

  //this array contains the path of each of the gem graphics
  var gemPath = [
    "assets/images/jade.png",
    "assets/images/ruby.png",
    "assets/images/sapphire.png",
    "assets/images/topaz.png",
    "assets/images/amathyst.png"
  ];

  //this function sets the goal, the random gem values, and the current score
  function resetGame() {
    randomScore = Math.floor(Math.random() * 101) + 19;
    currentScore = 0;

    $(".goal").text("Goal: " + randomScore);
    $(".currentScore").text("Collected: " + currentScore);
    $(".wins").text("Wins: " + wins);
    $(".losses").text("Losses: " + losses);

    for (var i = 0; i < gemValues.length; i++) {
      gemValues[i] = Math.floor(Math.random() * 12) + 1;
    }
    console.log(gemValues);
  }

  //initialize scores
  resetGame();

  //run through a loop that will populate the gems on the page
  for (var i = 0; i < gemPath.length; i++) {
    var gemPic = $("<img>");
    gemPic.addClass("gems img");
    gemPic.attr("data-value", gemValues[i]);
    gemPic.attr("src", gemPath[i]);
    gemPic.attr("alt", "photo of a gem");
    $("#gemsBox").append(gemPic);
  }

  //gems clicks and game win or lose logic
  $(".gems").on("click", function() {
    var gemValue = $(this).attr("data-value");
    currentScore += parseInt(gemValue);
    if (currentScore === randomScore) {
      wins++;
      $(".wins").text("Wins: " + wins);
      resetGame();
    } else if (currentScore > randomScore) {
      losses++;
      $(".losses").text("Losses: " + losses);
      resetGame();
    } else {
      $(".currentScore").text("Collected: " + currentScore);
    }
  });
});
