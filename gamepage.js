playername=localStorage.getItem("player_name");

var guess = 0;
function submit() {
// function for number guessed by user
var x = document.getElementById("guessField").value;    
// random value generated
  var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses
guess=localStorage.getItem("guess")
// made for correct Guess
if(x==y)
{
    alert("CONGRATULATIONS!!!"+playername+" YOU GUESSED IT RIGHT IN "
    +guess+" GUESSES");
    guess= 0;
    localStorage.setItem("guess", guess);
} else if(x > y)
{
guess++;
alert("OOPS SORRY!!! TRY A SMALLER NUMBER");
localStorage.setItem("guess", guess);
}
else 
{
    guess++;
    alert("OOPS SORRY!!! TRY A GREATER NUMBER")
    localStorage.setItem("guess", guess);
}
}

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}