function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var s = 0;
var x = document.getElementsByClassName("slides");

function openmodal() {
	document.getElementById("modal").style.display = "block";
}

function closemodal() {
	x[s].style.display = "none";
	document.getElementById("modal").style.display = "none";
}

function currentslide(n){
	
	document.getElementById("slideNo").innerHTML = n+"/"+x.length;
	s = n - 1;
	x[s].style.display = "block";
}

function changeslide(n) {
	if (s+n >= x.length) {
		alert("That's all folks!");
	}
	else if (s+n < 0) {

	}
	else{
		x[s].style.display = "none";
		s = s + n;
		document.getElementById("slideNo").innerHTML = (s+1)+"/"+x.length;
		x[s].style.display = "block";
	}
}


