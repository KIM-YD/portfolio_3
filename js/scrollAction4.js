var section1 = document.getElementById("index");
var section2 = document.getElementById("about");
var section3 = document.getElementById("skill");
var section4 = document.getElementById("more");

section3.addEventListener("wheel", MouseWheelHandler, false);

function MouseWheelHandler(e) {
    e.preventDefault();
    var delta = 0;
    var x1 = section2.offsetLeft;
    var y1 = section2.offsetTop;
    var x2 = section4.offsetLeft;
    var y2 = section4.offsetTop;

    if (!e) e = window.event;
    if (e.wheelDelta) {
        delta = e.wheelDelta / 120;
        if (window.opera) delta = -delta;
    }
    else if (e.detail)
        delta = -e.detail / 3;
        
    // window.scrollTo(x, y);
    if (delta > 0) {
        window.scrollTo(x1, y1);
    }else if (delta < 0){
        window.scrollTo(x2, y2);
    }
}