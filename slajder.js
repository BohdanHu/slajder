var numer = Math.floor(Math.random()*5)+1;

function zzmienslajd()
{
	numer++;if(numer>5) numer =1;
	
	var plik = "<img src=\"slajdy/slajd" + numer + ".png\" >";
	
			 document.getElementById("slider").innerHTML = plik;
	
			 setTimeout("zmienslajd()", 10000);

}
