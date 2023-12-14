
// HOME 화면에서 "안녕하세요~"" 메세지 차례대로 띄우는 기능
function changeText(cont1, cont2, speed, callback) {
    var Otext = cont1.text();
    var Ocontent = Otext.split("");
    var i = 0;
    var Otimer = setInterval(show, speed);

    function show() {
        if (i < Ocontent.length) {
            cont2.append(Ocontent[i]);
            i = i + 1;
        } else {
            clearInterval(Otimer);
            callback(); // Call the callback function when text is fully displayed
        }
    }
}

$(document).ready(function () {
    // Change text for p2 and then trigger change for p3 in the callback
    changeText($(".hello"), $(".p2"), 150, function () {
        changeText($(".imsehee"), $(".p3"), 150, function () {
            // This block will be executed after both p2 and p3 are done
            console.log("Text animations completed");
        });
    });
});



// contact 영역에서 이메일 아이콘 눌렀을 때
$(function(){    
    var clipboard = new ClipboardJS('#copyEmail');
    clipboard.on('success', function(e) {
    alert("'윤세희' 의 이메일이 복사되었습니다. 감사합니다!");    
    });
    clipboard.on('error', function(e) {
        alert("Copy Failed");
    });
});

// contact 영역에서 카카오 아이콘 눌렀을 때
$(function(){    
    var clipboard = new ClipboardJS('#copyKakaoId');
    clipboard.on('success', function(e) {
    alert("'윤세희' 의 카카오톡 아이디가 복사되었습니다. 감사합니다!");    
    });
    clipboard.on('error', function(e) {
        alert("Copy Failed");
    });
});


// 팀 프로젝트 깃허브 주소로 이동
function goGithub()  {
    window.open('https://github.com/ysehee/BlueHorizon.git') ;
}

// 프론트엔드 프로젝트 (첫 플젝) 깃허브 주소로 이동
function goGithub2()  {
    window.open('https://github.com/ysehee/HAGO_Front_Portfolio.git') ;
}

// 프론트엔드 프로젝트 (첫 플젝) 깃허브 주소로 이동
function goHagoSite()  {
    window.open('https://ysehee.github.io/HAGO_FrontPortfolio/HTML/1.%20index.html') ;
}





// skills 영역 게이지 바 채워지기

$(document).ready(function(){
    let skill_length = $('.skills').length;
    let s_top = '';

////////////////////////////

function tmp(i, num) {
    let up = 0;let interval;
    interval=setInterval(function(){
        up++; 
        
        $('.skills').eq(i).find('.skill_color').css({
            width: up + "%"
        })
        $('.skills').eq(i).find('.percent').text(up);
        if(up >= num) {
            clearInterval(interval);
        }
    }, 5)
}
///////////////////////////////////////
    let sec1_chk = true;
    let sec3_chk = true;
    $(window).scroll(function(){ 
        //헤더픽스
        s_top = $(window).scrollTop();
        console.log(s_top);
        
        //퍼센트
        let sec3_top = $('#skills').offset().top;    
        if(sec3_top - 300 <= s_top) 
            if(sec3_chk) {
                sec3_chk = false;{
                let array = [95,95,90,85,90,90,90,90,85,80,85,90];
                for(let i=0; i<skill_length; i++) {
                    tmp(i, array[i]) ;
                } 
            }
        }
    });
});