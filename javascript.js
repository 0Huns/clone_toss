//로딩 시 section1_fade_in
window.onload = setTimeout(function(){
    document.querySelector('.section_1_detail').style.opacity = "1";
}, 1000);

//다운 탭 클릭 시 화면 이동
let down = document.querySelector('.section_1_downTab');
let section2 = document.querySelector('.section_base_even');

function downtab(event){
    event.preventDefault();

    window.scrollBy( 0, section2.getBoundingClientRect().top - 60 );
}

down.addEventListener('click', downtab);

//메뉴 바 스크롤 시 고정
let header = document.querySelector('header');

function navfix(event){
    event.preventDefault();

    if(window.scrollY > 0){
    header.style.borderBottom = "1px solid #c1c1c1";
    }else{
        header.style.borderBottom = "none";
    }
}

window.addEventListener('scroll' , navfix);

//메뉴 아이콘 클릭 시 나타내기(mobile)
let menuicon = document.querySelector('.nav_menu_box_burger');
let menudisplay = document.querySelector('.menu_display');
let menubefore = document.querySelector('.menubefore');
let menuafter = document.querySelector('.menuafter');

function showmenu(event){
    event.preventDefault();
    menudisplay.classList.toggle('display_visible');

    menubefore.classList.toggle('display_none');
    menuafter.classList.toggle('display_flex');
}

menuicon.addEventListener('click' , showmenu);

//스크롤 시 요소 나타내기
const scrollAction = function (element) {
    element.classList.add('scroll_action');
}

//section3 스크롤 액션
function section3() {
    let word = document.querySelectorAll('.section_title_word')[0];
    let img1 = document.querySelector('.section_3_image1');
    let img2 = document.querySelector('.section_3_image2');
    let word2 = document.querySelector('.section_3_p');
    let imgbox = document.querySelector('.section_3_image');

    if (window.innerHeight > word.getBoundingClientRect().top) {
        scrollAction(word);
        setTimeout(function(){scrollAction(img1)},500);
        setTimeout(function(){scrollAction(img2)},1000);
        setTimeout(function(){scrollAction(word2)},1500);
    }

    //section3 모바일 스크롤 액션
    if (window.innerWidth < 640) {
        const translateY = Math.min(Math.max(word.getBoundingClientRect().top, -58), 68);
        imgbox.style.transform = `translateX(${translateY}px)`;
      } else {
        imgbox.style.transform = 'none';
      }
}

window.addEventListener('scroll', section3);

//section4 스크롤 액션
function section4() {
    let word = document.querySelectorAll('.section_title_word')[1];
    let contents = document.querySelectorAll('.section_4_word');
    let imgs = document.querySelectorAll('.section4_img');

    if (window.innerHeight > word.getBoundingClientRect().top) {
        scrollAction(word);
        setTimeout(() => {
            contents.forEach((content) => {
                scrollAction(content);
            });
        }, 500);
        setTimeout(() => {
            imgs.forEach((img) => {
                scrollAction(img);
            });
        }, 1000);
    }
}

window.addEventListener('scroll', section4);

//section5 스크롤 액션
function section5() {
    let word = document.querySelectorAll('.section_title_word')[2];
    let img = document.querySelector('.section_5_image');
    let word2 = document.querySelector('.section_5_word2');
    let word1s = document.querySelectorAll('.section_5_word1-1');

    if (window.innerHeight > word.getBoundingClientRect().top) {
        scrollAction(word);
        setTimeout(function(){scrollAction(img)},500);
        setTimeout(function(){scrollAction(word2)},1000);
        setTimeout(() => {
            word1s.forEach((word1, index) => {
                setTimeout(() => {
                scrollAction(word1)
            }, index * 500);
            });
        }, 1500);
    }
}

window.addEventListener('scroll', section5);

//section6 스크롤 액션
function section6() {
    let word = document.querySelectorAll('.section_title_word')[3];
    let contents = document.querySelectorAll('.section_6_word');
    let imgs = document.querySelectorAll('.section6_img');

    if (window.innerHeight > word.getBoundingClientRect().top) {
        scrollAction(word);
        setTimeout(() => {
            contents.forEach((content) => {
                scrollAction(content);
            });
        }, 500);
        setTimeout(() => {
            imgs.forEach((img) => {
                scrollAction(img);
            });
        }, 800);
    }
}

window.addEventListener('scroll', section6);

//section7 스크롤 액션
function section7() {
    let word = document.querySelectorAll('.section_title_word')[4];
    let word1s = document.querySelectorAll('.section7_p1');
    let word2 = document.querySelector('.section7_p2');

    let opacity_standard = document.querySelector('.section_7_image1-3').getBoundingClientRect().top;
    let opacity_img = document.querySelectorAll('.section_7_image1-3 img');

    if (window.innerHeight > word.getBoundingClientRect().top) {
        scrollAction(word);
        setTimeout(() => {
            word1s.forEach((word1, index) => {
                setTimeout(() => {
                scrollAction(word1)
            }, index * 500);
            });
        }, 500);
        setTimeout(function(){scrollAction(word2)},1500);
    }

    //section7 img 스크롤애니메이션 opacity
    if(opacity_standard <= 610 && opacity_standard >= 551) {
        scrollOpacity(opacity_img, [0, 0, 0, 1, 0, 0, 0]);
    }else if(opacity_standard <= 550 && opacity_standard >= 451) {
        scrollOpacity(opacity_img, [0, 0, 0.5, 1, 0.5, 0, 0]);
    } else if (opacity_standard <= 450 && opacity_standard >= 301) {
        scrollOpacity(opacity_img, [0, 0.5, 1, 1, 1, 0.5, 0]);
    } else if (opacity_standard <= 300 && opacity_standard >= 151) {
        scrollOpacity(opacity_img, [0.5, 1, 1, 1, 1, 1, 0.5]);
    } else if (opacity_standard <= 150 && opacity_standard >= 0) {
        scrollOpacity(opacity_img, [1, 1, 1, 1, 1, 1, 1]);
    }
}
//section7 img 스크롤애니메이션 opacity 함수 정의
function scrollOpacity(elements, values) {
    elements.forEach((element, index) => {
        element.style.opacity = values[index];
    });
}

window.addEventListener('scroll', section7);

//section8 width 스크롤 액션
window.addEventListener('scroll', function() {
    let titleimg = document.querySelector('.section_8_image');
    titleimg.style.width = Math.min(
        Math.max((95 - (titleimg.getBoundingClientRect().top / 100)), 90)
        ,100) + '%';
})

//section9 opacity 스크롤 액션
const sectionOpacity = function (element) {
    element.style.opacity = Math.min(
        Math.max(1 - element.getBoundingClientRect().top / 800, 0)
        , 1);
}

window.addEventListener('scroll', function() {
    let sec9s = document.querySelectorAll('.section_9_part');

    sec9s.forEach(sec9 => {
        sectionOpacity(sec9);
    });
});

//section10 스크롤 액션
function section10() {
    let word = document.querySelectorAll('.section_title_word')[6];
    let contents = document.querySelectorAll('.section_10_box');

    if (window.innerHeight > word.getBoundingClientRect().top) {
        scrollAction(word);
        setTimeout(() => {
            contents.forEach((content) => {
                scrollAction(content);
            });
        }, 500);
    }
}

window.addEventListener('scroll', section10); 

//section11 스크롤 액션
function section11() {
    let word = document.querySelector('.section_11_title_word');
    let contents = document.querySelectorAll('.section_11_box');

    if (window.innerHeight > word.getBoundingClientRect().top) {
        scrollAction(word);
        setTimeout(() => {
            contents.forEach((content) => {
                scrollAction(content);
            });
        }, 500);
    }
}

window.addEventListener('scroll', section11);