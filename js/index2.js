window.addEventListener('DOMContentLoaded', function(){
    var abutton = document.getElementById("ab");
    var bbutton = document.getElementById("bb");
    var cbutton = document.getElementById("cb");

    var awindow = document.getElementById("a");
    var bwindow = document.getElementById("b");
    var cwindow = document.getElementById("c");

    var section1 = document.getElementById("index");
    var section2 = document.getElementById("about");
    var section3 = document.getElementById("skill");
    var section4 = document.getElementById("more");

    var scrollEvent = false;
    var ip = 0;

    var target = document.querySelector("h1");
    var headNav = document.getElementById("navigation");
    headNav.style.opacity = "0";
    target.innerHTML=" ";

    window.addEventListener("resize", function(e){
        ip=0;
        section2.querySelectorAll("p").item(ip).style.opacity = "1";
        // target.innerHTML=" ";
        e.preventDefault();
        buttonActionA();
        // dynamic(randomString());
        
        for(var j=1; j<5; j++){
            section2.querySelectorAll("p").item(j).style.opacity = "0";
        }

        window.scrollTo(0, 0);
    });

    async function delay() {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>resolve(),0);
        });
    }

    function randomString(){
        let stringArr = ["편안한 밤 되세요. 영도의 포트폴리오에서."];
        let selectString = stringArr[0];
        let selectStringArr = selectString.split("");

        return selectStringArr;
    }

    function dynamic(randomArr){
        if(randomArr.length > 0){
            scrollEvent = true;
            target.textContent += randomArr.shift();
            
            setTimeout(function(){
                dynamic(randomArr);
            }, 100);
        }else{
            scrollEvent = false;
        }
    }

    (function openingAnimetion() {
        // setTimeout(() => {
        //     scrollEvent = true;
        //     dynamic(randomString());
        // },0);
        // setTimeout(() => {
        //     headNav.animate([{opacity: "0"},{opacity: "0.7"}],500);
        //     headNav.style.opacity="0.7";
        // },1);
        // setTimeout(scrollEvent=false,2);
        new Promise((resolve, reject) => {
            scrollEvent = true;
            dynamic(randomString());
            setTimeout(resolve(),0);
        })
        .then(() => {
            return new Promise((resolve, reject) => {
                headNav.animate([{opacity: "0"},{opacity: "0.7"}],500);
                headNav.style.opacity="0.7";
                setTimeout(resolve(),0);
            });
        })
        .then(() => {
            return new Promise((resolve, reject) => {
                scrollEvent = false;
                resolve();
            })
        })
        .catch((err) => {
            console.log('err', err);
        })
    })();
    
    section1.addEventListener("wheel", MouseWheelHandlerA, false);
    section2.addEventListener("wheel", MouseWheelHandlerB, false);
    section3.addEventListener("wheel", MouseWheelHandlerC, false);
    section4.addEventListener("wheel", MouseWheelHandlerD, false);
    
    abutton.addEventListener('click', buttonActionA, false);
    bbutton.addEventListener('click', buttonActionB, false);
    cbutton.addEventListener('click', buttonActionC, false);

    section2.querySelector("img").addEventListener('click', function(){
        if(true&&ip!=4) {
            section2.querySelectorAll("p").item(ip).style.opacity = "0";
            ip++;
            setTimeout(()=>{
                section2.querySelectorAll("p").item(ip).animate([{opacity: "0"},{opacity: "1"}],500);
                section2.querySelectorAll("p").item(ip).style.opacity = "1";
            },0);
        }else if(true&&ip==4) {
            return false;
        }
    },true);

    function buttonActionA() {
        awindow.style.display="block";
        bwindow.style.display="none";
        cwindow.style.display="none";
    
        abutton.style.marginLeft="43px";
        bbutton.style.marginLeft="30px";
        cbutton.style.marginLeft="30px";
    
        abutton.style.fontWeight="bold";
        bbutton.style.fontWeight="400";
        cbutton.style.fontWeight="400";
    };

    function buttonActionB() {
        awindow.style.display="none";
        bwindow.style.display="block";
        cwindow.style.display="none";
    
        abutton.style.marginLeft="30px";
        bbutton.style.marginLeft="43px";
        cbutton.style.marginLeft="30px";
    
        abutton.style.fontWeight="400";
        bbutton.style.fontWeight="bold";
        cbutton.style.fontWeight="400";
    };

    function buttonActionC(){
        awindow.style.display="none";
        bwindow.style.display="none";
        cwindow.style.display="block";
    
        abutton.style.marginLeft="30px";
        bbutton.style.marginLeft="30px";
        cbutton.style.marginLeft="43px";
    
        abutton.style.fontWeight="400";
        bbutton.style.fontWeight="400";
        cbutton.style.fontWeight="bold";
    };

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
    
        if (delta > 0 && scrollEvent == false ) {
            scrollEvent = true;
            window.scrollTo(0, 0);
            setTimeout(function() {
                scrollEvent = false;
            },500);
        }else if (delta < 0 && scrollEvent == false){
            ip=0;
            scrollEvent = true;
            document.getElementsByClassName("window")[0].style.opacity="0";
            section2.querySelector("img").style.left = "-1000px";
            document.getElementById("navigation").animate([{opacity:0.7},{opacity:0, offset:0.8},{opacity:0.7}],{duration: 1500});
            section1.querySelector("h1").animate([{opacity:1},{opacity:0, offset:0.8},{opacity:1}],{duration: 2000});
            for(var j=0; j<5; j++){
                section2.querySelectorAll("p").item(j).style.opacity = "0";
            }
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
            setTimeout(function(){window.scrollTo(x1, y1)},1500);
            setTimeout(function() {
                document.getElementsByClassName("window")[0].animate([{opacity:0},{opacity:1},{opacity:0}],500);
                document.getElementsByClassName("window")[0].style.opacity="1";
            },2000);
            setTimeout(function(){
                section2.querySelector("img").animate([{left: "-1000px"},{left: "90px"}],1000);
                section2.querySelector("img").style.left = "90px";
                document.getElementById("navigation").style.display="block";
                section1.querySelector("h1").style.display="block";
            },2500);
            setTimeout(function(){
                section2.querySelectorAll("p").item(0).style.opacity="1";
                scrollEvent = false;
            },4000);
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
            
        if (delta > 0 && scrollEvent == false) {
            scrollEvent = true;
            window.scrollTo(x1, y1);
            setTimeout(()=>{
                ip=0;
                section2.querySelectorAll("p").item(ip).style.opacity = "1";
                for(var j=1; j<5; j++){
                    section2.querySelectorAll("p").item(j).style.opacity = "0";
                }
                scrollEvent = false;
            },500);
        }else if (delta < 0 && scrollEvent == false){
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
                ip=0;
                section2.querySelectorAll("p").item(ip).style.opacity = "1";
                for(var j=1; j<5; j++){
                    section2.querySelectorAll("p").item(j).style.opacity = "0";
                }
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
            
        if (delta > 0 && scrollEvent ==false) {
            scrollEvent = true;
            var tim;
            clearInterval(tim);
            tim = setInterval(tran, 1);
        
            document.getElementsByClassName("window")[0].style.opacity="0";
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
                document.getElementsByClassName("window")[0].animate([{opacity:0},{opacity:1}],500);
                document.getElementsByClassName("window")[0].style.opacity="1";
                scrollEvent = false;
            },1000);
        }else if (delta < 0 && scrollEvent == false){
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
                },500);
                scrollEvent = false;
            },500);
        }
    }
    
    function MouseWheelHandlerD(e) {
        e.preventDefault();
        buttonActionA();
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
            
        if (delta > 0 && scrollEvent == false) {
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
            
            window.scrollTo(x1, y1);
            setTimeout(()=>{
                scrollEvent = false;
            },500);
        }else if (delta < 0 && scrollEvent == false){
            scrollEvent = true;
            window.scrollTo(x2, y2);
            setTimeout(()=>{
                scrollEvent = false;
            },500);
        }
    }
});