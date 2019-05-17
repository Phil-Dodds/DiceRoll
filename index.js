
function roll () {

    var randomnumber1 = [0,0];

    for (var i=0; i<2; i++)
    {

        randomnumber1[i] = Math.round(Math.random() * 5) + 1;

        document.querySelector(".img"+ (i+1)).setAttribute("src", "images/dice"+randomnumber1[i]+".png");
    }
}

function SelectPlayers () {

  var player1name = prompt ("Player 1 Name");
  var player2name = prompt ("Player 2 Name)");

  document.querySelector("#Player1 p").textContent = player1name;
  document.querySelector("#Player2 p").textContent = player2name;
}
