const btnL = document.querySelector(".btn-left")
const btnR = document.querySelector(".btn-right")
const img = document.querySelector("#slideShow")
const imgText = document.querySelector("#slide-text");
btnL.addEventListener('click',Lcount);
btnR.addEventListener('click',Rcount);

const slideText = [
    "Be Shaped 회원만의 초특가 가격으로 SUPER GYM 에서 다이어트를 해보세요!",
    "Organic Life 와 Be Shaped의 특급 콜라보로 할인된 가격에 신선한 샐러드를 즐겨보세요!",
    "저희 Be Shaped는 고객님들의 편의를 위해 항상 노력합니다."
];

// 각 사진에 해당하는 문자로 바꿔준다
let c = 1;
imgText.innerText = slideText[c-1];
// 초기 배경사진은 제일 첫사진
img.style.background = `url("img/slide${c}.jpg")`;
img.style.backgroundSize = "100% 100%";
// 왼쪽 버튼 클릭시 
function Lcount() {
    if(c===1){
        c=3;
    }
    else{
        c--;
    }
    img.style.background = `url("img/slide${c}.jpg")`;
    img.style.backgroundSize = "100% 100%";
    imgText.innerText = slideText[c-1];
}

function Rcount() {
    // 마지막 슬라이드라면 다시 처음으로 
    if(c==3){
        c=1;
    }    
    else{
        c++;
    }
    img.style.background = `url("./img/slide${c}.jpg")`;
    img.style.backgroundSize = "100% 100%";
    imgText.innerText = slideText[c-1];
};
