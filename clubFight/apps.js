const startingHp = 100;
let computerHp = document.querySelector("#computerHp");
let playerHp = document.querySelector("#playerHp");
setHp();

function setHp(){
  $("#computerHp").text(startingHp);
  $("#playerHp").text(startingHp);
};

$("input[type='text']").keypress(function(e){
  if(e.which === 13){
    var playerName = $(this).val();
    console.log(playerName);
  }
});

$("#attackButton").click(
  function diceRoll(min, max){
    min = Math.ceil(1);
    max = Math.floor(21);
    value = Math.floor(Math.random() * (max - min)) + min;
    $("#rollResult").text(value);
  });
