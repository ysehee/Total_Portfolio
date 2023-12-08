
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




$(function(){    
    var clipboard = new ClipboardJS('#copyEmail');
    clipboard.on('success', function(e) {
    alert("'윤세희' 의 이메일이 복사되었습니다. 감사합니다!");    
    });
    clipboard.on('error', function(e) {
        alert("Copy Failed");
    });
});

$(function(){    
    var clipboard = new ClipboardJS('#copyKakaoId');
    clipboard.on('success', function(e) {
    alert("'윤세희' 의 카카오톡 아이디가 복사되었습니다. 감사합니다!");    
    });
    clipboard.on('error', function(e) {
        alert("Copy Failed");
    });
});


function goGithub()  {
    window.open('https://github.com/ysehee/BlueHorizon.git') ;
}

function goGithub2()  {
    window.open('https://github.com/ysehee/HAGO_Front_Portfolio.git') ;
}
