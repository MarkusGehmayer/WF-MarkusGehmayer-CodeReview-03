var moviedata = movieJson;
window.onload = cinemaContainer();

// --------------------------------- !!! AUFBAU HTML DOM !!! ---------------------------------
function cinemaContainer(){
	for (var i=1; i < moviedata.length; i++){
		var cineBox = document.createElement("div");
			cineBox.className = "cineBox";
			cineBox.id = "cineBox"+ i;
			document.getElementById("cineMenu").appendChild(cineBox);

		var cineIMG = document.createElement("img");
			cineIMG.className = "cineIMG";
			cineIMG.src = moviedata[i].picurl;
			document.getElementById("cineBox"+i).appendChild(cineIMG);

		var cineHeader = document.createElement("p");
			cineHeader.className = "cineHeader";
			cineHeader.id = "cineHeader"+i;
			cineHeader.textContent = moviedata[i].title;
			document.getElementById("cineBox"+i).appendChild(cineHeader);

		var cineDscr = document.createElement("p");
			cineDscr.className = "cineDscr";
			cineDscr.id = "cineDscr"+i;
			cineDscr.textContent = moviedata[i].dscrptn;
			document.getElementById("cineBox"+i).appendChild(cineDscr);

// --------------------------------- Inhalt Gefällt-mir Counter ---------------------------------
				var magIchContainer = document.createElement("div");
					magIchContainer.className = "magIchContainer";
					magIchContainer.id = "magIchContainer"+i;
					document.getElementById("cineBox"+i).appendChild(magIchContainer);

						var liKes = document.createElement("p");
							liKes.className = "liKes";
							liKes.id = "liKes"+i;
							liKes.textContent = "Like ";
							liKes.addEventListener("click", function(element){
								countLikes(element.target.id);			
							});
							document.getElementById("magIchContainer"+i).appendChild(liKes);

						var neueLikes = document.createElement("div");
							neueLikes.className = "neueLikes";
							neueLikes.id = "neueLikes"+i;
							neueLikes.textContent = moviedata[i].countedLikes;
							document.getElementById("magIchContainer"+i).appendChild(neueLikes);
	} 
}

// --------------------------------- Funktion für den Gefällt-mir Counter ---------------------------------
						function countLikes(element){
							btnId = Number(element.slice(5));
							var likes = moviedata[btnId].countedLikes +1;
							moviedata[btnId].countedLikes =  likes;
							document.getElementById("neueLikes"+btnId).innerHTML = likes;
						}

// --------------------------------- Spielerei: Sperren der rechten Maustaste ---------------------------------
function taste (t) {
    if (!t)
      t = window.event;
      if ((t.type && t.type == "contextmenu") || 
        (t.button && t.button == 2) || (t.which && t.which == 3)) {
          return false;
    }
}
    if (document.layers)
      document.captureEvents(Event.MOUSEDOWN);
      document.onmousedown = taste;
      document.oncontextmenu = taste;