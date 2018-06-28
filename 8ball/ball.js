const button = document.getElementById("button")
button.onclick = function(){
    var gat = dice.roll();
    if(gat === 1){
        alert("My sources said no.")
    }
    if(gat === 2){
        alert ("Signs point to yes.")
    }
    if(gat === 3){
        alert ("Concentrate and ask again.")
    }
    if (gat === 4 ){
        alert ("Most likely.")
    }
    if (gat === 5 ){
        alert("Very doubtful.")
    }
    if (gat === 6 ){
        alert("My reply is no.")
    }
    if (gat === 7){
        alert("Ask again I couldn't properly read that.")
    }
    if (gat === 8){
        alert("Definitely not!")
    }
    if(gat === 9){
        alert("Can't predict right now.")
    }
    if(gat == 10) {
        alert("It is certain")
    }
}

var dice = {
    sides: 10,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }