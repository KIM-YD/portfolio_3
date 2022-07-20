window.addEventListener('DOMContentLoaded', function() {
    //버튼
    var abutton = document.getElementById("ab");
    var bbutton = document.getElementById("bb");
    var cbutton = document.getElementById("cb");
    //대응하는 창
    var awindow = document.getElementById("a");
    var bwindow = document.getElementById("b");
    var cwindow = document.getElementById("c");
    //스크롤 액션을 위한 섹션 지정
    var section1 = document.getElementById("index");
    var section2 = document.getElementById("about");
    var section3 = document.getElementById("skill");
    var section4 = document.getElementById("more");
    //중복스크롤 방지용 변수
    var scrollEvent = false;
    //모드에 따른 변수(애니메이션에 영향)
    var dayTime = false;
    //섹션2에서의 버튼관련 변수
    var ip = 0;
    //오프닝 애니메이션용 변수
    var target = document.querySelector("h1");
    var headNav = document.getElementById("navigation");

    //오프닝 애니메이션을 위한 첫 스타일 설정
    headNav.style.opacity = "0";
    target.innerHTML=" ";
    section1.querySelectorAll("p").item(0).style.display = "none";
    //그 외 변수
    var portfolio = section4.getElementsByClassName('portfolio-file');
    var modal = false;

    //창크기 변환시 처음 부분으로
    window.addEventListener("resize", function(e) {
        ip = 0;
        section2.querySelectorAll("p").item(ip).style.opacity = "1";
        
        e.preventDefault();
        
        for(var j=1; j<5; j++){
            section2.querySelectorAll("p").item(j).style.opacity = "0";
        }

        window.scrollTo(0, 0);
    });

    //출력할 문장 리턴 함수
    function randomString() {
        let stringArr = ["좋은 하루 보내세요. 영도의 포트폴리오에서."];
        let selectString = stringArr[0];
        let selectStringArr = selectString.split("");

        return selectStringArr;
    }

    //문장 타자효과 함수
    function dynamic(randomArr) {
        if(randomArr.length > 0) {
            scrollEvent = true;
            target.textContent += randomArr.shift();
            
            setTimeout(function(){
                dynamic(randomArr);
            }, 100);
        }else {
            scrollEvent = false;
        }
    }
    dynamic(randomString());

    //로드될때 실행되는 첫화면 애니메이션 함수
    (function openingAnimetion() {
        scrollEvent = true;
        var wlight = section1.querySelectorAll("img").item(4);

        wlight.style.display = "none";

        setTimeout(function(){
            wlight.animate([{opacity: "0"}, {opacity: "0.6"}], 500);
            headNav.animate([{opacity: "0"}, {opacity: "0.7"}], 500);
            wlight.style.display = "block";
            headNav.style.opacity = "0.7";
        }, 2500);

        setTimeout(function() {
            section1.querySelectorAll("p").item(0).style.display = "block"
        }, 4000);

        setTimeout(scrollEvent=false, 4100)
    })();
    
    //화면마다 불러올 함수가 다르므로 불러올 이벤트리스너 설정(트리거 행위는 마우스휠)
    section1.addEventListener("wheel", MouseWheelHandlerA, false);
    section2.addEventListener("wheel", MouseWheelHandlerB, false);
    section3.addEventListener("wheel", MouseWheelHandlerC, false);
    section4.addEventListener("wheel", MouseWheelHandlerD, false);

    //day mode랑 night모드를 부르는 이벤트리스너
    section1.getElementsByClassName("moon")[0].addEventListener('click', modeChange);
    section1.getElementsByClassName("sun")[0].addEventListener('click', modeChange);

    //낮과 밤을 바꾸는 함수
    function modeChange() {
        if(dayTime == false) {
            dayTime = true;
            section1.querySelectorAll("p").item(0).style.display = "none";
            section1.animate([{opacity: "1"},{opacity: "0"}], 1000);
            document.querySelector("body").style.background = "#769cc1";
            section1.style.opacity = "0";
            document.getElementById("navigation").style.opacity = "0";

            setTimeout(() => {
                section1.style.opacity = "1";
                document.getElementById("navigation").style.opacity = "1";
                document.querySelector("body").style.background = "gray";

                for(var i = 0; i < 8; i++) {
                    document.getElementsByClassName("shine")[i].style.display = "none";
                }
                 
                section1.getElementsByClassName("sun")[0].style.display = "block";
                section1.getElementsByClassName("moon")[0].style.display = "none";
                section1.querySelectorAll("img").item(1).style.display = "block";
                section1.querySelectorAll("img").item(2).style.display = "block";
                section1.querySelectorAll("img").item(3).setAttribute("src", "./images/window2.png");
                section1.querySelectorAll("img").item(4).setAttribute("src", "./images/window2.png");
                section1.querySelectorAll("img").item(5).setAttribute("src", "./images/city2.png");
                document.getElementById("navigation").classList.replace("night-mode", "day-mode");
                document.getElementById("index").classList.replace("night", "day");
                section1.querySelector("h1").style.color = "#769cc1";
                section1.querySelector("h1").classList.replace("night-font", "day-font");
                section1.getElementsByClassName("bottom")[0].style.background = "#769cc1";
                section2.style.background = "#769cc1";
                section2.getElementsByClassName("window")[0].style.background = "#cbe9f5";
                section3.style.background = "#769cc1";
            }, 1000);
        }else if (dayTime == true) {
            dayTime = false;
            section1.querySelectorAll("p").item(0).style.display = "none";
            section1.animate([{opacity: "1"},{opacity: "0"}], 1000);
            document.querySelector("body").style.background = "#2f2039";
            section1.style.opacity = "0";
            document.getElementById("navigation").style.opacity = "0";

            setTimeout(() => {
                section1.style.opacity = "1";
                document.getElementById("navigation").style.opacity = "0.7";
                document.querySelector("body").style.background ="gray";

                for(var i = 0; i<8; i++) {
                    document.getElementsByClassName("shine")[i].style.display = "block";
                }

                section1.getElementsByClassName("sun")[0].style.display = "none";
                section1.getElementsByClassName("moon")[0].style.display = "block";
                section1.querySelectorAll("img").item(1).style.display = "none";
                section1.querySelectorAll("img").item(2).style.display = "none";
                section1.querySelectorAll("img").item(3).setAttribute("src", "./images/window.svg");
                section1.querySelectorAll("img").item(4).setAttribute("src", "./images/window_light.png");
                section1.querySelectorAll("img").item(5).setAttribute("src", "./images/city.svg");
                document.getElementById("navigation").classList.replace("day-mode", "night-mode");
                document.getElementById("index").classList.replace("day", "night");
                section1.querySelector("h1").style.color = "black";
                section1.querySelector("h1").classList.replace("day-font", "night-font");
                section1.getElementsByClassName("bottom")[0].style.background = "black";
                section2.style.background = "black";
                section2.getElementsByClassName("window")[0].style.background = "gray";
                section3.style.background = "black";
            }, 1000);
        }
    };

    //섹션 2에서의 버튼액션
    section2.querySelector("img").addEventListener('click', function() {
        var buttonCk = false;
        if(buttonCk == false) {
            if(true && ip != 5) {
                buttonCk = true;
                section2.querySelectorAll("p").item(ip).style.opacity = "0";
                ip++;

                setTimeout(() => {
                    section2.querySelectorAll("p").item(ip).animate([{opacity: "0"}, {opacity: "1"}], 500);
                    section2.querySelectorAll("p").item(ip).style.opacity = "1";
                    setTimeout(buttonCk=false,0);
                }, 0);
            }else if(true && ip == 5) {
                return false;
            }
        }
    }, true);
    
    //섹션4에서의 버튼 이벤트 리스너
    abutton.addEventListener('click', buttonActionA, false);
    bbutton.addEventListener('click', buttonActionB, false);
    cbutton.addEventListener('click', buttonActionC, false);

    //섹션4에서의 버튼 이벤트들 모음
    document.getElementsByClassName("portfolio-file")[0].querySelectorAll("a").item(0).addEventListener('click', () => {
        document.getElementsByClassName("pf-contents")[0].style.display = "block";
    });
    
    document.getElementsByClassName("pf-contents")[0].querySelectorAll("p").item(0).addEventListener('click', () => {
        document.getElementsByClassName("pf-contents")[0].style.display = "none";
    });

    function buttonActionA() {
        awindow.style.display = "block";
        bwindow.style.display = "none";
        cwindow.style.display = "none";
    
        abutton.style.marginLeft = "43px";
        bbutton.style.marginLeft = "30px";
        cbutton.style.marginLeft = "30px";
    
        abutton.style.fontWeight = "bold";
        bbutton.style.fontWeight = "400";
        cbutton.style.fontWeight = "400";
    };

    function buttonActionB() {
        awindow.style.display = "none";
        bwindow.style.display = "block";
        cwindow.style.display = "none";
    
        abutton.style.marginLeft = "30px";
        bbutton.style.marginLeft = "43px";
        cbutton.style.marginLeft = "30px";
    
        abutton.style.fontWeight = "400";
        bbutton.style.fontWeight = "bold";
        cbutton.style.fontWeight = "400";
    };

    function buttonActionC() {
        awindow.style.display = "none";
        bwindow.style.display = "none";
        cwindow.style.display = "block";
    
        abutton.style.marginLeft = "30px";
        bbutton.style.marginLeft = "30px";
        cbutton.style.marginLeft = "43px";
    
        abutton.style.fontWeight = "400";
        bbutton.style.fontWeight = "400";
        cbutton.style.fontWeight = "bold";
    };


    //여기까지 섹션4 버튼액션 모음

    //섹션1에서의 스크롤 액션
    function MouseWheelHandlerA(e) {
        e.preventDefault();
        var delta = 0;
        var x1 = section2.offsetLeft;
        var y1 = section2.offsetTop;

        if(!e) e = window.event;
        if(e.wheelDelta) {
            delta = e.wheelDelta / 120;
            if(window.opera) delta = -delta;
        }
        else if(e.detail)
            delta = -e.detail / 3;
    
        if(delta > 0 && scrollEvent == false) {
            scrollEvent = true;
            setTimeout(window.scrollTo(0, 0),0);

            setTimeout(function() {
                scrollEvent = false;
            },500);
        }else if(delta < 0 && scrollEvent == false) {
            if(dayTime == false) {
                ip = 0;
                scrollEvent = true;
                document.getElementsByClassName("window")[0].style.opacity = "0";
                section2.querySelector("img").style.left = "-1000px";
                document.getElementById("navigation").animate([{opacity: 0.7}, {opacity: 0, offset: 0.8}, {opacity: 0.7}], {duration: 1500});
                section1.querySelector("h1").animate([{opacity:1}, {opacity: 0, offset: 0.8}, {opacity: 1}], {duration: 2000});
                section1.querySelectorAll("img").item(4).animate([{opacity: 0.6}, {opacity: 0}], 1010);
                
                for(var j = 0; j < 6; j++) {
                    section2.querySelectorAll("p").item(j).style.opacity = "0";
                }

                for(var i = 0; i < 8; i++) {
                    document.getElementsByClassName("shine")[i].animate([{opacity: 0.7}, {opacity: 0, offset: 0.8}, {opacity: 0.7}], {duration: 1500});
                }

                section1.querySelectorAll("img").item(0).animate([{opacity: 1}, {opacity: 0, offset: 0.8}, {opacity: 0.7}],{duration: 1500});

                setTimeout(function() {
                    section1.querySelectorAll("img").item(0).style.display = "none";
                    section1.querySelectorAll("img").item(4).style.display = "none";
                    document.getElementById("navigation").style.display = "none";
                    section1.querySelector("h1").style.display = "none";
                    section1.querySelectorAll("img").item(3).animate([{transform: "translate(-50%, 0)", width: "88%"}, {transform: "translate(-40%, 10%)", width: "5000%"}], 500);
                    section1.querySelectorAll("img").item(5).animate([{transform: "translate(-50%, 0)", width: "88%"}, {transform: "translate(-40%, 10%)", width: "5000%"}], 500);
                }, 1000);

                setTimeout(function() {window.scrollTo(x1, y1)}, 1500);

                setTimeout(function() {
                    document.getElementsByClassName("window")[0].animate([{opacity: 0}, {opacity: 1}, {opacity: 0}], 500);
                    document.getElementsByClassName("window")[0].style.opacity = "1";
                }, 2000);

                setTimeout(function() {
                    section2.querySelector("img").animate([{left: "-1000px"}, {left: "90px"}], 1000);
                    section2.querySelector("img").style.left = "90px";
                    document.getElementById("navigation").style.display = "block";
                    section1.querySelector("h1").style.display = "block";
                },2500);
                
                setTimeout(function() {
                    section2.querySelectorAll("p").item(0).style.opacity = "1";
                    section1.querySelectorAll("img").item(0).style.display = "block";
                    section1.querySelectorAll("img").item(4).style.display = "block";
                    scrollEvent = false;
                }, 4000);
            }else if(dayTime == true) {
                ip = 0;
                scrollEvent = true;
                document.getElementsByClassName("window")[0].style.opacity = "0";
                section2.querySelector("img").style.left = "-1000px";
                document.getElementById("navigation").animate([{opacity: 0.7}, {opacity: 0, offset: 0.8}, {opacity: 0.7}], {duration: 1500});
                section1.querySelector("h1").animate([{opacity: 1}, {opacity: 0, offset: 0.8}, {opacity: 1}], {duration: 2000});
                
                for(var j = 0; j < 6; j++) {
                    section2.querySelectorAll("p").item(j).style.opacity = "0";
                }

                section1.getElementsByClassName("sun")[0].animate([{opacity: 1}, {opacity: 0, offset: 0.8}, {opacity: 0.7}], {duration: 1500});

                setTimeout(function() {
                    section1.getElementsByClassName("sun")[0].style.display = "none";
                    section1.querySelectorAll("img").item(1).style.display = "none";
                    section1.querySelectorAll("img").item(2).style.display = "none";
                    section1.querySelectorAll("img").item(4).style.display = "none";
                    document.getElementById("navigation").style.display = "none";
                    section1.querySelector("h1").style.display = "none";
                    section1.querySelectorAll("img").item(3).animate([{transform: "translate(-50%, 0)", width: "88%"}, {transform: "translate(-40%, 10%)", width: "5000%"}], 500);
                    section1.querySelectorAll("img").item(5).animate([{transform: "translate(-50%, 0)", width: "88%"}, {transform: "translate(-40%, 10%)", width: "5000%"}], 500);
                }, 1000);

                setTimeout(function() {window.scrollTo(x1, y1)}, 1500);

                setTimeout(function() {
                    document.getElementsByClassName("window")[0].animate([{opacity: 0}, {opacity: 1}, {opacity: 0}], 500);
                    document.getElementsByClassName("window")[0].style.opacity = "1";
                }, 2000);

                setTimeout(function() {
                    section2.querySelector("img").animate([{left: "-1000px"}, {left: "90px"}], 1000);
                    section2.querySelector("img").style.left = "90px";
                    document.getElementById("navigation").style.display = "block";
                    section1.querySelector("h1").style.display = "block";
                }, 2500);

                setTimeout(function() {
                    section2.querySelectorAll("p").item(0).style.opacity = "1";
                    section1.getElementsByClassName("sun")[0].style.display = "block";
                    section1.querySelectorAll("img").item(1).style.display = "block";
                    section1.querySelectorAll("img").item(2).style.display = "block";
                    section1.querySelectorAll("img").item(4).style.display = "block";
                    scrollEvent = false;
                }, 4000);
            }
        }
    }

    //섹션2에서의 스크롤 액션
    function MouseWheelHandlerB(e) {
        e.preventDefault();
        var delta = 0;
        var x1 = section1.offsetLeft;
        var y1 = section1.offsetTop;
        var x2 = section3.offsetLeft;
        var y2 = section3.offsetTop;
        
        if(!e) e = window.event;
        if(e.wheelDelta) {
            delta = e.wheelDelta / 120;
            if (window.opera) delta = -delta;
        }
        else if(e.detail)
            delta = -e.detail / 3;
            
        if(delta > 0 && scrollEvent == false) {
            scrollEvent = true;

            setTimeout(window.scrollTo(x1, y1),0);

            setTimeout(() => {
                ip=0;
                section2.querySelectorAll("p").item(ip).style.opacity = "1";

                for(var j = 1; j < 6; j++){
                    section2.querySelectorAll("p").item(j).style.opacity = "0";
                }

                scrollEvent = false;
            }, 500);
        }else if(delta < 0 && scrollEvent == false) {
            scrollEvent = true;
            var tim;
            var mLogo = document.getElementsByClassName("logo");
            var loBar = document.getElementsByClassName("loading-bar");
            var loInBar = document.getElementsByClassName("percent");
            var loPer = document.getElementsByClassName("com");
    
            clearInterval(tim);
            tim = setInterval(tran, 1);
    
            for(var i = 0; i < 6; i++) {
                mLogo[i].style.opacity = "0";
                loBar[i].style.opacity = "0";
                loInBar[i].style.width = "0";
                loPer[i].querySelector("p").innerHTML = "0%";
                loPer[i].querySelector("p").style.opacity = "0";
                document.getElementsByClassName("smallcom")[i].style.display = "none";
            }

            section3.getElementsByClassName("window")[0].style.opacity = "0";

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

                for(var j = 1; j < 6; j++){
                    section2.querySelectorAll("p").item(j).style.opacity = "0";
                } 

                for(var i = 0; i < 6; i++) {    
                    document.getElementsByClassName("smallcom")[i].style.display = "block";
                }

                section3.getElementsByClassName("window")[0].animate([{opacity:0},{opacity:1}],500);
            }, 1000);

            setTimeout(function() {
                section3.getElementsByClassName("window")[0].style.opacity = "1";
            }, 1700);

            setTimeout(function() {
                for(var i = 0; i < 6; i++) {
                    mLogo[i].animate([{opacity: "0"}, {opacity: "1"}], 500);
                    loBar[i].animate([{opacity: "0"}, {opacity: "1"}], 500);
                    loPer[i].querySelector("p").animate([{opacity: "0"}, {opacity: "1"}], 500);
                }
            }, 1800);

            setTimeout(function() {
                for(var i = 0; i < 6; i++) {
                    mLogo[i].style.opacity = "1";
                    loBar[i].style.opacity = "1";    
                    loPer[i].querySelector("p").style.opacity = "1";
                }

                loInBar[0].animate([{width: 0}, {width: "90%"}], 500);
                loInBar[1].animate([{width: 0}, {width: "85%"}], 500);
                loInBar[2].animate([{width: 0}, {width: "90%"}], 500);
                loInBar[3].animate([{width: 0}, {width: "90%"}], 500);
                loInBar[4].animate([{width: 0}, {width: "70%"}], 500);
                loInBar[5].animate([{width: 0}, {width: "60%"}], 500);
            }, 2300);

            setTimeout(function() {
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
                
                loInBar[0].style.width = "90%";
                loInBar[1].style.width = "85%";
                loInBar[2].style.width = "90%";
                loInBar[3].style.width = "90%";
                loInBar[4].style.width = "70%";
                loInBar[5].style.width = "60%";

                scrollEvent = false;
            }, 2800);
        }
    }
    
    //섹션3에서의 스크롤 액션
    function MouseWheelHandlerC(e) {
        e.preventDefault();
        var delta = 0;
        var x1 = section2.offsetLeft;
        var y1 = section2.offsetTop;
        var x2 = section4.offsetLeft;
        var y2 = section4.offsetTop;
        
        if(!e) e = window.event;
        if(e.wheelDelta) {
            delta = e.wheelDelta / 120;
            if(window.opera) delta = -delta;
        }
        else if(e.detail)
            delta = -e.detail / 3;
            
        if(delta > 0 && scrollEvent == false) {
            scrollEvent = true;
            var tim;
            clearInterval(tim);
            tim = setInterval(tran, 1);
        
            document.getElementsByClassName("window")[0].style.opacity="0";

            function tran() {
                var speed = 10;
                if(x1 == x2) {
                    clearInterval(tran);
                }else {
                    x2 -= speed;
                    window.scrollTo(x2, y1);
                }
            }

            setTimeout(function() {
                document.getElementsByClassName("window")[0].animate([{opacity: 0}, {opacity: 1}], 500);
                document.getElementsByClassName("window")[0].style.opacity = "1";
                scrollEvent = false;
            },1000);

        }else if(delta < 0 && scrollEvent == false) {
            scrollEvent = true;
            var mLogo = document.getElementsByClassName("logo");
            var loBar = document.getElementsByClassName("loading-bar");
            var loInBar = document.getElementsByClassName("percent");
            var loPer = document.getElementsByClassName("com");

            awindow.style.display = "block";
            bwindow.style.display = "none";
            cwindow.style.display = "none";
            awindow.getElementsByClassName("pf-contents")[0].style.display = "none";
    
            for(var i = 0; i < 6; i++) {
                mLogo[i].animate([{opacity: '1'}, {opacity: '0'}], 500);
                loBar[i].animate([{opacity: '1'}, {opacity: '0'}], 500);
                loInBar[i].animate([{opacity: '1'}, {opacity: '0'}], 500);
                loPer[i].querySelector("p").animate([{opacity: '1'}, {opacity: '0'}], 500);
    
                mLogo[i].style.opacity = "0";
                loBar[i].style.opacity = "0";
                loInBar[i].style.opacity = "0";
                loPer[i].querySelector("p").style.opacity = "0";
            }
            
            setTimeout(() => {
                document.getElementsByClassName("moniter-wrap")[0].style.opacity = "0";
                document.getElementById("ab").style.left = "10000px";
                document.getElementById("bb").style.left = "10000px";
                document.getElementById("cb").style.left = "10000px";
                document.getElementsByClassName("smallcom")[4].style.zIndex = "1";
                document.getElementById("more").classList.remove("on-mode");
                document.getElementById("more").classList.add("off-mode");
                document.getElementsByClassName("smallcom")[4].animate([{width: '100%', left: '0', top: '0'}, {width: '2500px', left: '-325%', top: '-63vh'}], 500);
            }, 500);

            setTimeout(function() {
                document.getElementById("overcom").classList.add("bigcom");
                window.scrollTo(x2, y2);
                document.getElementById("overcom").classList.remove("bigcom");
                document.getElementById("overcom").classList.add("smallcom");
                document.getElementsByClassName("smallcom")[4].style.zIndex = "0";
            }, 950);

            setTimeout(function() {
                document.getElementById("more").classList.add("on-mode");
                document.getElementById("more").classList.remove("off-mode");
            }, 1050);

            setTimeout(function() {
                document.getElementById("ab").animate([{left: "10000px"}, {left: "1000px"}], 1000);
                document.getElementById("bb").animate([{left: "10000px"}, {left: "1000px"}], 1000);
                document.getElementById("cb").animate([{left: "10000px"}, {left: "1000px"}], 1000);
                document.getElementById("ab").style.left = "1000px";
                document.getElementById("bb").style.left = "1000px";
                document.getElementById("cb").style.left = "1000px";
            } ,1000);

            setTimeout(function() {
                document.getElementsByClassName("moniter-wrap")[0].animate([{opacity: 0}, {opacity: 1}], 1000);
                document.getElementsByClassName("moniter-wrap")[0].style.opacity = "1";
                scrollEvent = false;
            }, 1100);
        }
    }
    
    //섹션4에서의 스크롤 액션
    function MouseWheelHandlerD(e) {
        e.preventDefault();
        buttonActionA();
        var delta = 0;
        var x1 = section3.offsetLeft;
        var y1 = section3.offsetTop;
        var x2 = section4.offsetLeft;
        var y2 = section4.offsetTop;
        
        if(!e) e = window.event;
        if(e.wheelDelta) {
            delta = e.wheelDelta / 120;
            if(window.opera) delta = -delta;
        }
        else if(e.detail)
            delta = -e.detail / 3;
            
        if(delta > 0 && scrollEvent == false) {
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

            setTimeout(() => {
                scrollEvent = false;
            }, 500);

        }else if(delta < 0 && scrollEvent == false) {
            scrollEvent = true;

            window.scrollTo(x2, y2);

            setTimeout(() => {
                scrollEvent = false;
            }, 500);
        }
    }
});