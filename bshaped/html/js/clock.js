const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); // 2자리로 제한 0으로 채운다 
    const minutes = String(date.getMinutes()).padStart(2,"0"); // 2자리로 제한 0으로 채운다 
    clock.innerText  = `${hours}:${minutes}`;
}

getClock() // 새로고침 마다 30초를 기다려야 되기 때문에 우선 시작을 한다
setInterval(getClock,1000) // 1초마다 리셋
// interval 을 사용하므로 30초 마다 getclock을 호출한다
