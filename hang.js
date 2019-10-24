function geterr()
{
	var xx = document.getElementById("senten").value;
	haslo=xx;
	drawboard();
}

function drawboard()
{
	var divek = "";
	var rr = "";
	for (i=0; i < alfa.length; i++)
	{
		rr = alfa.charAt(i);
		divek += '<div class="lit" id="'+rr+'" onclick="spr(this.id)">'+rr+'</div>';}
		divek += "<div style=clear:both></div>";
	$('#cont').html("<div id='sent' ></div><div id='hanger' ><img src='img/s0.jpg'/></div><div id='alpha' >c</div><div style = clear:both></div>")
	$('#alpha').html(divek);
	hasfun();
}

const alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var haslo = "";
var hasarr=[];
var hang = 0;
var dl;
var hasdot = [];

function hasfun()
{
	haslo = haslo.toUpperCase();
	hasarr = haslo.split("");
	dl = hasarr.length;
	$('#sent').html(hasarr);
	dots();
}


function dots()
{
	for (i=0; i<dl; i++)
	{
		if( hasarr[i] == " ") hasdot.push(" ");
		else hasdot.push("-");
	}
	$('#sent').html(hasdot);
	
}

function spr(r)
{
	var x = "#"+r+"";
	if (!$(x).hasClass("lit"))
		return;
	flag = false;
	for ( i = 0; i<alfa.length; i++)
	{
		if (haslo.charAt(i)==r) 
		{
			flag = true;
			hasdot[i]=hasarr[i];
			$('#sent').html(hasdot);
			$(x).removeClass("lit");
			$(x).addClass("litG");
			if (JSON.stringify(hasdot)==JSON.stringify(hasarr)) 
			{var win = 'Yay! <br>One more round?<input type="button" value="Play!" onclick="window.location.reload()"/>' 
			$("#alpha").html(win);
			$("#alpha").css("color", "green");
			}
		
			
		}
	}
	if (flag==false)
	{ 
			$(x).removeClass("lit");
			$(x).addClass("litR");
				hang++;
			var todivhang = "<img src='img/s"+hang+".jpg'/>";
			$("#hanger").html(todivhang);
			if (hang==9) 
			{var bust = 'O no :( <br>One more round?<input type="button" value="Play!" onclick="window.location.reload()"/>' 
			$("#alpha").html(bust);
			$("#alpha").css("color", "red");	
			}
	}
	
}






