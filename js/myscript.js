window.onload = function() {

for(var i = 0; i < movie.length; i++) {
  var obj = movie[i];
  var para = document.createElement("p");
  var node = document.createTextNode(obj.title + " - " + obj.description);
  para.appendChild(node);
  var element = document.getElementById("gallery");
  element.appendChild(para);

// UL, LI, PIC
  var ulist = document.createElement("ul");
  var li = document.createElement("li");

  var pic = document.createElement("IMG");
  pic.setAttribute("src", "./img/movie"+[i]+".jpg");
  pic.setAttribute("width", "120");
  pic.setAttribute("height", "150");


  li.appendChild(pic);
  ulist.appendChild(li);

  var elementUL = document.getElementById("gallery");
  elementUL.appendChild(ulist);
  var elementPIC = document.getElementById("gallery");
  elementPIC.appendChild(li);
  
};
};