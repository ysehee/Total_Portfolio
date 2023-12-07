$(function() {
    var page = $('.fullpage').fullpage({
 
        // menu에 대한 옵션 설정
        menu : '.gnb',
        anchors : ['section1', 'section2', 'section3'],
 
    });
})

$(function() {
    var page = $('.fullpage').fullpage({
 
        // 스크롤 허용을 원하는 요소의 클래스를 적어줌
        normalScrollElements: '.scroll'
 
    });
})

$(function() {
    var page = $('.fullpage').fullpage({
 
        // 스크롤 허용 옵션 표기
        scrollOverflow : true
 
    });
})