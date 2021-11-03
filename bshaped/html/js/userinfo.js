const userInfoForm = document.querySelector("#userinfo-form");

function clickUserInfoBtn(event){
    event.preventDefault();
    const userId = document.querySelector("#currId").value;
    const userPwd = document.querySelector("#currPwd").value;
    const newPwd = document.querySelector("#newPwd").value;
    if(localStorage.getItem(userId)===null){
        document.querySelector("#currId").value = "";
        document.querySelector("#currPwd").value = "";
        document.querySelector("#newPwd").value = "";
        alert("해당 아이디가 존재하지 않습니다");
    }
    else {
        const ownPwd = localStorage.getItem(userId);
        if (ownPwd !== userPwd){
            document.querySelector("#currId").value = "";
            document.querySelector("#currPwd").value = "";
            document.querySelector("#newPwd").value = "";
            alert("비밀번호가 틀렸습니다.");
        } else {
            // 현재 비밀번호와 바꾸려는 비밀번호가 같다면 XX
            if(userPwd===newPwd){
                document.querySelector("#currId").value = "";
                document.querySelector("#currPwd").value = "";
                document.querySelector("#newPwd").value = "";
                alert("현재 비밀번호와 같을 수 없습니다.");
            }
            else{
                localStorage.setItem(userId,newPwd); // 새로운 비밀번호로 변경
                alert("사용자 정보가 변경되었습니다");
                window.open("event.html");
            }            
        }
    }
}

userInfoForm.addEventListener("submit", clickUserInfoBtn);
