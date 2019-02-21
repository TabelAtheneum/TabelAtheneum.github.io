function openvak(vak){
	if($(vak).is(':visible') == false){
		const y = findPos(document.getElementById(vak)) - 10;
		window.scroll({top: y, behavior: 'smooth'});
	}
	var i;
	if(vak == "#economieTalen"){i = 0;}else if(vak == "#economieWiskunde"){i = 1;}else if(vak == "#grieksLatijn"){i = 2;}else if(vak == "#humaneWetenschappen"){i = 3;}else if(vak == "#latijnTalen"){i = 4;}else if(vak == "#latijnWetenschappen"){i = 5;}else if(vak == "#latijnWiskunde"){i = 6;}else if(vak == "#wetenschappenWiskunde"){i = 7;}
	if($(vak).is(':visible') == false){
		document.getElementsByTagName("i")[i].style.transform = "rotate(225deg)";
		document.getElementsByTagName("i")[i].style.marginBottom = "-2px";
	}
	else {
		document.getElementsByTagName("i")[i].style.transform = "rotate(45deg)";
		document.getElementsByTagName("i")[i].style.marginBottom = "2px";
	}
	$(vak).toggle(250);
}

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}