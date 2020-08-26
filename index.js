
var d1 = Math.floor((Math.random() * 6) + 1);
var d2 =  Math.floor((Math.random() * 6) + 1);


if (d1>d2)
{
document.querySelector("h1").textContent="Player 1 wins";
}

if(d2>d1)
{
	
document.querySelector("h1").textContent="Player 2 wins";
}
if(d1==d2)
{
  
document.querySelector("h1").textContent="Draw";
	
}
d1=d1+".png";
d2=d2+".png";
var r1="images/" + d1;
var r2="images/" + d2;
document.querySelector("img.img1").src=r1;
document.querySelector("img.img2").src=r2;
