var section1 = document.getElementById("index");
var section2 = document.getElementById("about");
var section3 = document.getElementById("skill");
var section4 = document.getElementById("more");

section1.addEventListener("wheel", MouseWheelHandler, false);

function MouseWheelHandler(e) {
    e.preventDefault();
    var delta = 0;
    var x1 = section2.offsetLeft;
    var y1 = section2.offsetTop;
    console.log(x1);
    console.log(y1);

    if (!e) e = window.event;
    if (e.wheelDelta) {
        delta = e.wheelDelta / 120;
        if (window.opera) delta = -delta;
    }
    else if (e.detail)
        delta = -e.detail / 3;

    // window.scrollTo(x, y);
    if (delta > 0) {
        window.scrollTo(0, 0);
    }else if (delta < 0){
        //헤더 네비게이션이 사라짐, 배경이 커짐, 불이 켜지면서 sec2의 불이 켜짐
        window.scrollTo(x1, y1);
    }
}