
// * Hockey is the game. Make it happen.
// *
// * USEFUL RESOURCES
// * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
// * https://api.jquery.com/id-selector/
// * https://api.jquery.com/html/
// * https://api.jquery.com/css/
// * https://api.jquery.com/click/
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// *
// * If you want to turn it into some other sport, have at it.
// *
// * Anyway, I have given you a basic HTML structure for a
// * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
// * should make the page do what it needs to do, using your knowledge
// * of JS, HTML, CSS, and... sports.
// *
// * Here's what this 'game' should do:
// *
// * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
// *   - shots have a random chance of succeeding or failing
// *   - number of shots taken should increase every click on the "SHOOT" button
// *   - number of hits obviously only increases when the shot is successful
// *
// * 2. Clicking the "RESET" button resets all the shot and score counters and
// * adds 1 to the number of resets
// *
// * 3. Any time a team shoots and scores change the background color of
// *    page to that teams color
// *
// * OPTIONAL STUFF:
// * - add logos of the two rivals below their name
// * - make the page just look better
// * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
// *   and how to use it in JS. You will also need to download a sound bite
// */


(function(){

  //code inside here will only run once the entire page is loaded
  window.onload = function(){


    var teamone_shootButton = $("#teamone-shoot");
    var teamone_numshots = $("#teamone-numshots");
    var teamone_numhits = $("#teamone-numhits");

    var teamtwo_shootButton = $("#teamtwo-shoot");
    var teamtwo_numshots = $("#teamtwo-numshots");
    var teamtwo_numhits = $("#teamtwo-numhits");

    var resetButton = $("#reset")
    var resetCount = $("#num-resets");

    teamone_shootButton.click(function() {
      //console.log("teamone_shoot clicked");
      let newteam1Shots = parseInt(teamone_numshots.html()) + 1;
      //console.log("newteam1Shots",newteam1Shots);
      teamone_numshots.html(newteam1Shots);
      //this will reset the background-color to white
      //so the color only remains until the next shot is taken
      //$("body").css("background-color", "white");

      //return Math.floor(Math.random() * (max - min)) + min;
      let RandomNumber = Math.floor(Math.random() * 10) + 1;
      //return Math.floor(Math.random() * (max - min)) + min;
      //console.log("RandomNumber", RandomNumber);

      //function isEven(x) { return (x%2)==0; }
      if ((RandomNumber % 2)==0) {
        let newteam1Hits = parseInt(teamone_numhits.html()) + 1;
        teamone_numhits.html(newteam1Hits);
        $("body").css("background-color", "#ff4d4d");

      };
      //console.log("team1Hits", teamone_numhits.html());
  });

    teamtwo_shootButton.click( function() {
      //console.log("teamtwo-shoot clicked");
      let newteam2Shots = parseInt(teamtwo_numshots.html()) + 1;
      //console.log("newteam2Shots",newteam2Shots);
      teamtwo_numshots.html(newteam2Shots);
      //this will reset the background-color to white
      //so the color only remains until the next shot is taken
      //$("body").css("background-color", "white");

      //return Math.floor(Math.random() * (max - min)) + min;
      let RandomNumber = Math.floor(Math.random() * 10) + 1;
      //return Math.floor(Math.random() * (max - min)) + min;
      //console.log("RandomNumber", RandomNumber);

      //function isEven(x) { return (x%2)==0; }
      if ((RandomNumber %2)==0) {
        let newteam2Hits = parseInt(teamtwo_numhits.html()) + 1;
        teamtwo_numhits.html(newteam2Hits);
        $("body").css("background-color", "gold");
      };
      //console.log("team2Hits", teamtwo_numhits.html());

    });

    resetButton.click( function() {
      //console.log("reset clicked");
      let newResetCount = parseInt(resetCount.html()) + 1;
      resetCount.html(newResetCount);
      newteam1Shots = 0;
      teamone_numshots.html(newteam1Shots);
      newteam2Shots = 0;
      teamtwo_numshots.html(newteam2Shots);
      newteam1Hits = 0;
      teamone_numhits.html(newteam1Hits);
      newteam2Hits = 0;
      teamtwo_numhits.html(newteam2Hits);
      $("body").css("background-color", "white");

    });


};


})();
