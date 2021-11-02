const proper_Calories = document.querySelector("#propercal");
const calorieForm = document.querySelector("#calorie-form");
const HIDDEN = "hidden";
const PROPERWEI = "properWeight";
const PROPERCAL = "advicedCalorie"

const savedproperWeight = localStorage.getItem(PROPERWEI);
const savedAdvicedCalorie = localStorage.getItem(PROPERCAL);


// 칼로리 체크 
// button 클릭시 form 태그의 값들을 계산한뒤 h3 (결과값)을 보여준다 
function calorieBtnClick(event) {
    event.preventDefault();
    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    const activeness = document.querySelector("#activeness").value;
    const properWeight = (height-100)*0.9;
    const advicedCalorie = properWeight*activeness;
    if (properWeight <0 || advicedCalorie <0){
        proper_Calories.innerText = "올바른 단위로 입력해주세요!"
    }
    else {
        localStorage.setItem(PROPERWEI,properWeight);
        localStorage.setItem(PROPERCAL,advicedCalorie);
        proper_Calories.innerText = "당신의 표준체중은 : "+Math.round(properWeight)+"kg 이며\n권장 칼로리는 +"+
        Math.round(advicedCalorie)+"kcal 입니다.";
    }
    proper_Calories.classList.remove("hidden");
}
// reset 버튼 클릭시 input창이 모두 초기화 되게 하며, 로컬저장소에 저장된 값들을 삭제한다
function calorieResetClick() {
    proper_Calories.innerText ="";
    localStorage.removeItem(PROPERWEI);
    localStorage.removeItem(PROPERCAL);
    proper_Calories.classList.add("hidden");
}

calorieForm.addEventListener("submit", calorieBtnClick);
calorieForm.addEventListener("reset", calorieResetClick);

// 만약 기존에 로컬저장소에 저장된 값이 있다면 리셋전까지는 그 화면 표시
if (savedproperWeight !== null){
    //show the 표준체중, 권장 칼로리
    proper_Calories.innerText = "당신의 표준체중은 : "+Math.round(savedproperWeight)+"kg 이며\n권장 칼로리는 +"+
    Math.round(savedAdvicedCalorie)+"kcal 입니다.";
    proper_Calories.classList.remove("hidden");
} 
