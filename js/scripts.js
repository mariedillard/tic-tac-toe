var playerTurn = 1;
var playerMark = "X";
var playerHtml =  '<span class="x"> X </span>';
var playerOne = "X";
var playerTwo = "O";
var one = "1,1";
var two = "1,2";
var three = "1,3";
var four = "2,1";
var five = "2,2";
var six = "2,3";
var seven = "3,1";
var eight = "3,2";
var nine = "3,3";

function scoreCounter () {
  var winningCombo = [[one,two,three], [four,five,six], [seven,eight,nine], [one,four,seven], [two,five,eight], [three,six,nine], [one,five,nine], [three,five,seven]];
  debugger;
  for(var i = 0; i < winningCombo.length; i++) {
    if (winningCombo[i][0] === playerMark && winningCombo[i][1] === playerMark && winningCombo[i][2] === playerMark) {
      $('#playerTurn').empty();
      $('#playerTurn').append(playerMark + " wins!");
      playerTurn = 10;
      break;
    }
  }
  if (playerTurn >= 10) {
    $('#gameProgress').empty();
    $('#gameProgress').append("GAME OVER");
  }
  else if (playerTurn % 2 !== 0) {
    $('#playerTurn').empty();
    $('#playerTurn').append("Player One's Turn!");
    playerMark = "X";
    playerHtml = '<span class="x"> X </span>';
  } else {
    $('#playerTurn').empty();
    $('#playerTurn').append("Player Two's Turn!");
    playerMark = "O";
    playerHtml = '<span class="o"> O </span>';
  }
}

$(document).ready(function(){
  $("#board").click(function() {
    playerTurn++;
    if ($(event.target).is('#one') && one === "1,1"){
      one = playerMark;
      $('#one').append(playerHtml);
    } else if ($(event.target).is('#two') && two === "1,2"){
      two = playerMark;
      $('#two').append(playerHtml);
    } else if ($(event.target).is('#three') && three === "1,3") {
      three = playerMark;
      $('#three').append(playerHtml);
    } else if ($(event.target).is('#four') && four === "2,1"){
      four = playerMark;
      $('#four').append(playerHtml);
    } else if ($(event.target).is('#five') && five === "2,2"){
      five = playerMark;
      $('#five').append(playerHtml);
    } else if ($(event.target).is('#six') && six === "2,3") {
      six = playerMark;
      $('#six').append(playerHtml);
    } else if ($(event.target).is('#seven') && seven === "3,1"){
      seven = playerMark;
      $('#seven').append(playerHtml);
    } else if ($(event.target).is('#eight') && eight === "3,2"){
      eight = playerMark;
      $('#eight').append(playerHtml);
    } else if ($(event.target).is('#nine') && nine === "3,3") {
      nine = playerMark;
      $('#nine').append(playerHtml);
    } else {
      alert("already clicked");
      playerTurn-=1;
    }
    scoreCounter();
  });
});
