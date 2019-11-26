// A $( document ).ready() block.
//var hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

function makeButton() {
  var col = Math.floor(Math.random() * 10 + 1);
  var x = Math.floor(Math.random() * 10 + 1);
  var btn = document.createElement("Button");
  btn.innerHTML = "Add a Button";
  btn.setAttribute("onclick", "makeButton()");
  btn.setAttribute("class", "color" + col);
  document.body.appendChild(btn);
}
