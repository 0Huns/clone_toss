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