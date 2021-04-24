var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
var cimg1="dice"+randomNumber1+".png";
var changeimg1="images/"+cimg1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",changeimg1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var cimg2="images/dice"+randomNumber2+".png";
var changeimage2=document.querySelectorAll("img")[1];
changeimage2.setAttribute("src",cimg2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 Wins !"
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩"
}
else{
    document.querySelector("h1").innerHTML="Draw !!! "
}