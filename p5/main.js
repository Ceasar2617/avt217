// A $( document ).ready() block.
//var hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

function makeButton() {
  var col = Math.floor(Math.random() * 10 + 1);
  var posx = Math.floor(Math.random() * 100 + 1);
  var posy = Math.floor(Math.random() * 100 + 1);
  //var x = Math.floor(Math.random() * 10 + 1);
  var btn = document.createElement("Button");
  btn.innerHTML = "Add a Button";
  btn.setAttribute("onclick", "makeButton()");
  btn.setAttribute("class", "color" + col);
  btn.setAttribute("style", "margin-left:"+posx+"vw;margin-top:"+posy+"vh;")

  document.body.appendChild(btn);
}
