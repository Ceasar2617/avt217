// A $( document ).ready() block.
var x = Math.floor(Math.random() * 100 + 1);

document.getElementById("guessBtn").onclick = function() {
  var num = document.getElementById("guess").value;
  if (num == x)
  {
    document.getElementById("update").innerHTML = "Correct!";
  }
  else if (num > x) {
    document.getElementById("update").innerHTML = "Too high! Try something smaller";
  }
  else {
    document.getElementById("update").innerHTML = "Too low! Try something higher";
  }
}
