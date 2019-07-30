$(document).ready(function() {
  //these are the starting scores
  var randomScore = 0;
  var collected = 0;
  var wins = 0;
  var losses = 0;
  var randomGemValue1 = 0;
  var randomGemValue2 = 0;
  var randomGemValue3 = 0;
  var randomGemValue4 = 0;
  var randomGemValue5 = 0;
  var gemValues = [];
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
    collected = 0;
    randomGemValue1 = Math.floor(Math.random() * 12) + 1;
    randomGemValue2 = Math.floor(Math.random() * 12) + 1;
    randomGemValue3 = Math.floor(Math.random() * 12) + 1;
    randomGemValue4 = Math.floor(Math.random() * 12) + 1;
    randomGemValue5 = Math.floor(Math.random() * 12) + 1;
    gemValues = [
      randomGemValue1,
      randomGemValue2,
      randomGemValue3,
      randomGemValue4,
      randomGemValue5
    ];
    $(".goal").text("Goal: " + randomScore);
    $(".currentScore").text("Collected: " + collected);
    $(".wins").text("Wins: " + wins);
    $(".losses").text("Losses: " + losses);
  }

  function populateGems() {
    for (var i = 0; i < gemPath.length; i++) {
      var gemPic = $("<img>");
      gemPic.addClass("gems img");
      gemPic.attr("data-value", gemValues[i]);
      gemPic.attr("src", gemPath[i]);
      gemPic.attr("alt", "photo of a gem");
      $("#gemsBox").append(gemPic);
    }
  }
  resetGame();
  populateGems();

  $(".gems").on("click", function() {
    var gemValue = $(this).attr("data-value");
    collected += parseInt(gemValue);
    if (collected === randomScore) {
      wins++;
      $(".wins").text("Wins: " + wins);
      gemValues = [];
      resetGame();
      populateGems();
    } else if (collected > randomScore) {
      losses++;
      $(".losses").text("Losses: " + losses);
      gemValues = [];
      resetGame();
      populateGems();
    } else {
      $(".currentScore").text("Collected: " + collected);
    }
  });

  function resetGems() {}
});
