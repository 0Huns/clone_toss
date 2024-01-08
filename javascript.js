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
    let word = document.querySelector('.section_title_word');
    let img1 = document.querySelector('.section_3_image1');
    let img2 = document.querySelector('.section_3_image2');
    let word2 = document.querySelector('.section_3_p');
    let imgbox = document.querySelector('.section_3_image');

    if (window.innerHeight > word.getBoundingClientRect().top) {
        scrollAction(word);
        setTimeout(function(){scrollAction(img1)},600);
        setTimeout(function(){scrollAction(img2)},1200);
        setTimeout(function(){scrollAction(word2)},1800);
    }

    //모바일 스크롤 액션
    if (window.innerWidth < 640) {
        const translateY = Math.min(Math.max(word.getBoundingClientRect().top, -58), 68);
        imgbox.style.transform = `translateX(${translateY}px)`;
      } else {
        imgbox.style.transform = 'none';
      }
}

window.addEventListener('scroll', section3);