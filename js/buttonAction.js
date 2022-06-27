var abutton = document.getElementById("ab");
var bbutton = document.getElementById("bb");
var cbutton = document.getElementById("cb");

var awindow = document.getElementById("a");
var bwindow = document.getElementById("b");
var cwindow = document.getElementById("c");

abutton.addEventListener('click', function(){
    awindow.style.display="block";
    bwindow.style.display="none";
    cwindow.style.display="none";

    abutton.style.marginLeft="49px";
    bbutton.style.marginLeft="30px";
    cbutton.style.marginLeft="30px";

    abutton.style.fontWeight="bold";
    bbutton.style.fontWeight="400";
    cbutton.style.fontWeight="400";
}, false);

bbutton.addEventListener('click', function(){
    awindow.style.display="none";
    bwindow.style.display="block";
    cwindow.style.display="none";

    abutton.style.marginLeft="30px";
    bbutton.style.marginLeft="49px";
    cbutton.style.marginLeft="30px";

    abutton.style.fontWeight="400";
    bbutton.style.fontWeight="bold";
    cbutton.style.fontWeight="400";
}, false);

cbutton.addEventListener('click', function(){
    awindow.style.display="none";
    bwindow.style.display="none";
    cwindow.style.display="block";

    abutton.style.marginLeft="30px";
    bbutton.style.marginLeft="30px";
    cbutton.style.marginLeft="49px";

    abutton.style.fontWeight="400";
    bbutton.style.fontWeight="400";
    cbutton.style.fontWeight="bold";
}, false);