var section1 = document.getElementById("index");
var section2 = document.getElementById("about");
var section3 = document.getElementById("skill");
var section4 = document.getElementById("more");
var scrollEvent = false;

section1.addEventListener("wheel", MouseWheelHandlerA, false);
section2.addEventListener("wheel", MouseWheelHandlerB, false);
section3.addEventListener("wheel", MouseWheelHandlerC, false);
section4.addEventListener("wheel", MouseWheelHandlerD, false);

window.addEventListener("resize", function(e){
    e.preventDefault();
    window.scrollTo(0, 0);
});

function MouseWheelHandlerA(e) {
    e.preventDefault();
    var delta = 0;
    var x1 = section2.offsetLeft;
    var y1 = section2.offsetTop;

    if (!e) e = window.event;
    if (e.wheelDelta) {
        delta = e.wheelDelta / 120;
        if (window.opera) delta = -delta;
    }
    else if (e.detail)
        delta = -e.detail / 3;

    if (delta > 0) {
        window.scrollTo(0, 0);
    }else if (delta < 0){
        if( scrollEvent == false ) {
            scrollEvent = true;
            document.getElementById("scrapperWindow1").style.background="black";
            document.getElementById("navigation").animate([{opacity:0.7},{opacity:0, offset:0.8},{opacity:0.7}],{duration: 1500});
            section1.querySelector("h1").animate([{opacity:1},{opacity:0, offset:0.8},{opacity:1}],{duration: 2000});
            for(var i=0; i<8; i++){
                document.getElementsByClassName("shine")[i].animate([{opacity:0.7},{opacity:0, offset:0.8},{opacity:0.7}],{duration: 1500});
            }
            section1.querySelectorAll("img").item(0).animate([{opacity:1},{opacity:0, offset:0.8},{opacity:0.7}],{duration: 1500});
            setTimeout(function() {
                document.getElementById("navigation").style.display="none";
                section1.querySelector("h1").style.display="none";
                section1.querySelectorAll("img").item(1).animate([{transform:"translate(-50%, 0)",width: "88%"},{transform:"translate(-40%, 10%)", width: "5000%"}],500);
                section1.querySelectorAll("img").item(2).animate([{transform:"translate(-50%, 0)",width: "88%"},{transform:"translate(-40%, 10%)", width: "5000%"}],500);
            },1000);
            clearTimeout();
            setTimeout(function(){})
            setTimeout(function(){window.scrollTo(x1, y1)},1500);
            setTimeout(function() {
                document.getElementById("scrapperWindow1").animate([{opacity:1},{opacity:0.7},],500);
            },2000);
            setTimeout(function(){
                document.getElementById("scrapperWindow1").style.background="transparent";
                document.getElementById("navigation").style.display="block";
                section1.querySelector("h1").style.display="block";
                scrollEvent = false;
            },3000);
        }
    }
}

function MouseWheelHandlerB(e) {
    e.preventDefault();
    var delta = 0;
    var x1 = section1.offsetLeft;
    var y1 = section1.offsetTop;
    var x2 = section3.offsetLeft;
    var y2 = section3.offsetTop;

    if (!e) e = window.event;
    if (e.wheelDelta) {
        delta = e.wheelDelta / 120;
        if (window.opera) delta = -delta;
    }
    else if (e.detail)
        delta = -e.detail / 3;
        
    if (delta > 0) {
        window.scrollTo(x1, y1);
    }else if (delta < 0){
        if( scrollEvent == false ) {
            scrollEvent = true;
            var tim;
            var mLogo = document.getElementsByClassName("logo");
            var loBar = document.getElementsByClassName("loading-bar");
            var loInBar = document.getElementsByClassName("percent");
            var loPer = document.getElementsByClassName("com");
    
            clearInterval(tim);
            tim = setInterval(tran, 1);
    
            for(var i = 0; i<6; i++) {
                mLogo[i].style.opacity = "0";
                loBar[i].style.opacity = "0";
                loInBar[i].style.width = "0";
                loPer[i].querySelector("p").innerHTML = "0%";
                loPer[i].querySelector("p").style.opacity = "0";
                document.getElementsByClassName("smallcom")[i].style.display = "none";
            }
    
            document.getElementById("scrapperWindow2").style.background="black";
            function tran() {
                var speed = 10;
                if (x1 == x2) {
                    clearInterval(tran);
                } else {
                    x1 += speed;
                    window.scrollTo(x1, y2);
                }
            }
            setTimeout(function() {
                for(var i=0; i<6; i++) {
                    document.getElementsByClassName("smallcom")[i].style.display = "block";
                }
                document.getElementById("scrapperWindow2").animate([{opacity:1},{opacity:0}],500);
            },1000);
            setTimeout(function(){
                document.getElementById("scrapperWindow2").style.background="transparent";
            },1700);
            setTimeout(function(){
                for(var i = 0; i<6; i++) {
                    mLogo[i].animate([{opacity: "0"},{opacity: "1"}],500);
                    loBar[i].animate([{opacity: "0"},{opacity: "1"}],500);
                    loPer[i].querySelector("p").animate([{opacity: "0"},{opacity: "1"}],500);
                }
            },1800);
            setTimeout(function(){
                for(var i = 0; i<6; i++) {
                    mLogo[i].style.opacity = "1";
                    loBar[i].style.opacity = "1";    
                    loPer[i].querySelector("p").style.opacity = "1";
                }
                loInBar[0].animate([{width: 0},{width: "90%"}],500);
                loInBar[1].animate([{width: 0},{width: "85%"}],500);
                loInBar[2].animate([{width: 0},{width: "90%"}],500);
                loInBar[3].animate([{width: 0},{width: "90%"}],500);
                loInBar[4].animate([{width: 0},{width: "70%"}],500);
                loInBar[5].animate([{width: 0},{width: "60%"}],500);
            },2300);
            setTimeout(function(){
                var count1 = 0;
                var count2 = 0;
                var count3 = 0;
                var count4 = 0;
    
                let counting1 = setInterval(function() {
                    if (count1 == 90) {
                        clearInterval(counting1);
                        return false;
                    }
                    count1 += 1;
                    loPer[0].querySelector("p").innerHTML = new Intl.NumberFormat().format(count1) +"%";
                    loPer[2].querySelector("p").innerHTML = new Intl.NumberFormat().format(count1) +"%";
                    loPer[3].querySelector("p").innerHTML = new Intl.NumberFormat().format(count1) +"%";
                },5);
    
                let counting2 = setInterval(function() {
                    if (count2 == 85) {
                        clearInterval(counting2);
                        return false;
                    }
                    count2 += 1;
                    loPer[1].querySelector("p").innerHTML = new Intl.NumberFormat().format(count2) +"%";
                },5);
    
                let counting3 = setInterval(function() {
                    if (count3 == 70) {
                        clearInterval(counting3);
                        return false;
                    }
                    count3 += 1;
                    loPer[4].querySelector("p").innerHTML = new Intl.NumberFormat().format(count3) +"%";
                },5);
    
                let counting4 = setInterval(function() {
                    if (count4 == 60) {
                        clearInterval(counting4);
                        return false;
                    }
                    count4 += 1;
                    loPer[5].querySelector("p").innerHTML = new Intl.NumberFormat().format(count4) +"%";
                },5);
                
                loInBar[0].style.width="90%";
                loInBar[1].style.width="85%";
                loInBar[2].style.width="90%";
                loInBar[3].style.width="90%";
                loInBar[4].style.width="70%";
                loInBar[5].style.width="60%";

                scrollEvent = false;
            },2800);
        } 
    }
}

function MouseWheelHandlerC(e) {
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
        
    if (delta > 0) {
        if( scrollEvent == false ) {
            scrollEvent = true;
            var tim;
            clearInterval(tim);
            tim = setInterval(tran, 1);
        
            document.getElementById("scrapperWindow1").style.background="black";
    
            function tran() {
                var speed = 10;
                if (x1 == x2) {
                    clearInterval(tran);
                } else {
                    x2 -= speed;
                    window.scrollTo(x2, y1);
                }
            }
    
            setTimeout(function() {
                document.getElementById("scrapperWindow1").animate([{opacity:1},{opacity:0}],500);
            },1000);
            setTimeout(function(){
                document.getElementById("scrapperWindow1").style.background="transparent";
                scrollEvent = false;
            },2000);
        }
    }else if (delta < 0){
        if( scrollEvent == false ) {
            scrollEvent = true;
            var mLogo = document.getElementsByClassName("logo");
            var loBar = document.getElementsByClassName("loading-bar");
            var loInBar = document.getElementsByClassName("percent");
            var loPer = document.getElementsByClassName("com");
    
            for(var i = 0; i<6; i++) {
                mLogo[i].animate([{opacity: '1'},{opacity: '0'}],500);
                loBar[i].animate([{opacity: '1'},{opacity: '0'}],500);
                loInBar[i].animate([{opacity: '1'},{opacity: '0'}],500);
                loPer[i].querySelector("p").animate([{opacity: '1'},{opacity: '0'}],500);
    
                mLogo[i].style.opacity = "0";
                loBar[i].style.opacity = "0";
                loInBar[i].style.opacity = "0";
                loPer[i].querySelector("p").style.opacity = "0";
            }
    
            setTimeout(function(){
                document.getElementsByClassName("moniter-wrap")[0].style.opacity="0";
                document.getElementById("ab").style.left="10000px";
                document.getElementById("bb").style.left="10000px";
                document.getElementById("cb").style.left="10000px";
                document.getElementsByClassName("smallcom")[4].style.zIndex = "1";
                document.getElementById("more").classList.remove("on-mode");
                document.getElementById("more").classList.add("off-mode");
                document.getElementsByClassName("smallcom")[4].animate([{width: '100%', left: '0', top: '0'},{width: '2500px', left: '-325%', top: '-63vh'}],500);
        
                setTimeout(function(){
                    document.getElementById("overcom").classList.add("bigcom");
                    window.scrollTo(x2, y2);
                    document.getElementById("overcom").classList.remove("bigcom");
                    document.getElementById("overcom").classList.add("smallcom");
                    document.getElementsByClassName("smallcom")[4].style.zIndex = "0";
                },450);
                setTimeout(function(){
                    document.getElementById("more").classList.add("on-mode");
                    document.getElementById("more").classList.remove("off-mode");
                },550);
                setTimeout(function() {
                    document.getElementsByClassName("moniter-wrap")[0].animate([{opacity:0},{opacity:1}],1000);
                    document.getElementsByClassName("moniter-wrap")[0].style.opacity="1";
                },600);
                setTimeout(function() {
                    
                    document.getElementById("ab").animate([{left: "10000px"},{left: "1000px"}],1000);
                    document.getElementById("bb").animate([{left: "10000px"},{left: "1000px"}],1000);
                    document.getElementById("cb").animate([{left: "10000px"},{left: "1000px"}],1000);
                    document.getElementById("ab").style.left="1000px";
                    document.getElementById("bb").style.left="1000px";
                    document.getElementById("cb").style.left="1000px";
                    scrollEvent = false;
                },500);
            },500);
        }
    }
}

function MouseWheelHandlerD(e) {
    e.preventDefault();
    var delta = 0;
    var x1 = section3.offsetLeft;
    var y1 = section3.offsetTop;
    var x2 = section4.offsetLeft;
    var y2 = section4.offsetTop;

    if (!e) e = window.event;
    if (e.wheelDelta) {
        delta = e.wheelDelta / 120;
        if (window.opera) delta = -delta;
    }
    else if (e.detail)
        delta = -e.detail / 3;
        
    if (delta > 0) {
        if( scrollEvent == false) {
            scrollEvent = true;
            var mLogo = document.getElementsByClassName("logo");
            var loBar = document.getElementsByClassName("loading-bar");
            var loInBar = document.getElementsByClassName("percent");
            var loPer = document.getElementsByClassName("com");
    
            for(var i = 0; i<6; i++) {
                mLogo[i].style.opacity = "1";
                loBar[i].style.opacity = "1";
                loInBar[i].style.opacity = "1";
                loPer[i].querySelector("p").style.opacity = "1";
            }
            document.getElementById("more").classList.remove("on-mode");
            document.getElementById("more").classList.add("off-mode");
            
            window.scrollTo(x1, y1);
            setTimeout(()=>{
                scrollEvent = false;
            },500);
        }
    }else if (delta < 0){
        window.scrollTo(x2, y2);
    }
}