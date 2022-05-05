function play() {
var dice1= Math.floor((Math.random()*6)+1);
var dice2= Math.floor((Math.random()*6)+1);
switch (dice1){
    case 1:
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
        break;
      case 2:
        document.querySelector(".img1").setAttribute("src","images/dice2.png");
        break;
        case 3:
            document.querySelector(".img1").setAttribute("src","images/dice3.png");
        break;
        case 4:
            document.querySelector(".img1").setAttribute("src","images/dice4.png");
        break;
        case 5:
            document.querySelector(".img1").setAttribute("src","images/dice5.png");
        break;
        case 6:
            document.querySelector(".img1").setAttribute("src","images/dice6.png");
        break;
      
}
switch (dice2){
    case 1:
        document.querySelector(".img2").setAttribute("src","images/dice1.png");
        break;
      case 2:
        document.querySelector(".img2").setAttribute("src","images/dice2.png");
        break;
        case 3:
            document.querySelector(".img2").setAttribute("src","images/dice3.png");
        break;
        case 4:
            document.querySelector(".img2").setAttribute("src","images/dice4.png");
        break;
        case 5:
            document.querySelector(".img2").setAttribute("src","images/dice5.png");
        break;
        case 6:
            document.querySelector(".img2").setAttribute("src","images/dice6.png");
        break;
      
}
if(dice1>dice2){
    document.querySelector("h1").innerHTML="Player1 Wins🚩";
}
else if(dice1===dice2){
    document.querySelector("h1").innerHTML="draw 🚩";
}
else{
    document.querySelector("h1").innerHTML="Player2 Wins🚩"; 
}
}

function reset() { 
    document.querySelector("h1").innerHTML="Dice Me";
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
    document.querySelector(".img2").setAttribute("src","images/dice6.png"); 
     
 } 
