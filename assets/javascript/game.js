$(document).ready(function() {
  var randomScore = Math.floor(Math.random() * 120) + 10; //this will generate the a random goal score from 20 to 100
  var randomGemValue1 = Math.floor(Math.random() * 1) + 1; //this will generate a value for one of the gems
  var randomGemValue2 = Math.floor(Math.random() * 10) + 2; //this will generate a value for another of the gems
  var randomGemValue3 = Math.floor(Math.random() * 15) + 2; //this will generate a value for another of the gems
  var randomGemValue4 = Math.floor(Math.random() * 35) + 2; //this will generate a value for another of the gems
  var gemValues = [
    randomGemValue1,
    randomGemValue2,
    randomGemValue3,
    randomGemValue4
  ]; //this array contains the possible values
  var gemPath = [
    "../images/jade.png",
    "../images/ruby.png",
    "../images/sapphire.png",
    "../images/topaz.png"
  ];

  var currentScore = 0;
  var wins = 0;
  var losses = 0;

  $(".goal").text("Goal: " + randomScore);
  $(".currentScore").text("Current Score: " + currentScore);
  $(".wins").text("Wins: " + wins);
  $(".losses").text("Losses: " + losses);
});
