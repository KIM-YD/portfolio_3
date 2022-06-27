var className = "box";
var currentScroll = 0;
var tim;

window.onload = function () {
    var elm = document.getElementsByClassName(className);

    for (var i = 0; i < elm.length; i++) {
        elm[i].addEventListener("mousewheel", MouseWheelHandler, false);
        // elm[i].addEventListener("DOMMouseScroll", MouseWheelHandler, true);
    }
}
function MouseWheelHandler(e) {
    e.preventDefault();
    var delta = 0;
    // var event = Event;

    if (!event) event = window.event;
    if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
    }
    else if (event.detail)
        delta = -event.detail / 3;

    var p = e.target.parentElement;
    var index = Array.prototype.indexOf.call(p.children, e.target);
    var elmArr = e.target.parentElement.children;
    currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    var NextTarget = currentScroll;
    
    if (delta > 0) {
        if (index > 0) {
            var no = (index - 1);
            NextTarget = elmArr[no].offsetTop;
        }
    }
    // 마우스휠 아래로
    else if (delta < 0)
    {
        if (index < elmArr.length - 1) {
            var no = (index + 1);
            NextTarget = elmArr[no].offsetTop;
        }
    }
    
    clearInterval(tim);
    tim = setInterval(tran, 1);
    
    function tran() {
        var speed = 10;
        if (currentScroll == NextTarget) {
            clearInterval(tran);
        } else {
            if (currentScroll - speed > NextTarget)
            {
                currentScroll -= speed;
            }
            else if (currentScroll + speed < NextTarget)
            {
                currentScroll += speed;
            }
            else
            {
                currentScroll = NextTarget;
            }
            window.scrollTo(0, currentScroll);
        }
    }

}