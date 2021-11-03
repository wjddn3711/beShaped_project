const loginBtn = document.querySelector("#login-btn");
const signUpBtn = document.querySelector("#signUp-btn");

// 각 버튼마다 preventDefault()를 주어 새로고침이 안되도록 한다 
// signup 하게 되면 id 와 비밀번호를 로컬 저장소에 저장시킨다

// 아이디가 존재하면 비밀번호를 확인하고 모두 통과하면 인덱스페이지로 이동한다
function loginBtnClicked(event){
    event.preventDefault();
    const loginId = document.querySelector("#loginId").value;
    const loginPwd = document.querySelector("#loginPwd").value;
    if(localStorage.getItem(loginId)===null){
        document.querySelector("#loginId").value = "";
        document.querySelector("#loginPwd").value = "";
        alert("해당 아이디가 존재하지 않습니다");
    }
    else {
        const userPwd = localStorage.getItem(loginId);
        if (loginPwd !== userPwd){
            document.querySelector("#loginId").value = "";
            document.querySelector("#loginPwd").value = "";
            alert("비밀번호가 틀렸습니다.");
        } else {
            window.open("index.html");
        }
    }
}

function signUpBtnClicked(event){
    const loginId = document.querySelector("#loginId").value;
    const loginPwd = document.querySelector("#loginPwd").value;
    localStorage.setItem(loginId, loginPwd);
    // 로컬 저장소에 아이디 비밀번호 저장후 비워준다
    document.querySelector("#loginId").value = "";
    document.querySelector("#loginPwd").value = "";
    alert("회원가입이 완료되었습니다.\n로그인 해주세요!");
}

loginBtn.addEventListener("click",loginBtnClicked);
signUpBtn.addEventListener("click", signUpBtnClicked);
