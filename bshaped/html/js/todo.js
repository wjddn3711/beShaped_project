const toDoForm = document.getElementById("todo-form");
const toDoEventList = toDoForm.querySelector("#event-list");
const toDoEventCalorie = toDoForm.querySelector("#event-cal");
const toDoList = document.getElementById("todo-list");

let toDos=[];

// save todo
function saveToDos() {
    // stringify 는 모든 것을 문자열 형태로 변환한다
    // localStorage 에 저장될떄 문자열로 저장되기 때문에 배열의 형식을 유지하기 위해 stringify 사용
    localStorage.setItem("todos", JSON.stringify(toDos)); 
}


function filtedList(){
    
}

// delete todo 
function deleteTodo(event) {
    // event 중 path 를 통해 삭제해야할 리스트를 특정한다
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo[0].id !== parseInt(li.id));
    saveToDos();
}

// create todo
function paintToDo(newEvent, newEventCal) {
    const li = document.createElement("li"); // li 태그의 li 변수 생성
    li.id = newEvent.id; // li 태그의 id 값 지정 
    const span = document.createElement("span"); // 이벤트
    const span2 = document.createElement("span"); // 칼로리
    const button = document.createElement("button") // 삭제 버튼
    button.innerText = "✗";  // 버튼안을 X 로
    span.innerText = newEvent.text; // 칼로리, 이벤트 메시지 삽입
    span2.innerText = newEventCal.text;

    // 버튼에 이벤트리스너 (클릭시 삭제 되도록)
    button.addEventListener("click", deleteTodo);

    li.appendChild(span); // 리스트안에 넣어준다
    li.appendChild(span2);
    li.appendChild(button);
    toDoList.appendChild(li); // 리스트를 지정한 경로에 추가해준다
}


function handleToDoSubmit(event) {
    event.preventDefault();
    // 이벤트와 칼로리를 따로 저장후 비워준다 
    const newEvent = toDoEventList.value;
    const newEventCal = toDoEventCalorie.value;
    toDoEventList.value="";
    toDoEventCalorie.value="";
    
    let date = Date.now();
    // 랜덤에 가까운 date를 id 값으로 동일한 id값을 가지는 이벤트, 칼로리 객체생성
    const newEventObj = {
        text: newEvent,
        id:date,
    };
    const newObjCal =  {
        text:newEventCal,
        id:date,
    };
    toDos.push([newEventObj, newObjCal]); // 칼로리와 이벤트를 배열에 저장
    paintToDo(newEventObj,newObjCal);
    saveToDos(); // todo 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// 로컬저장소에서 로드



const savedToDos = localStorage.getItem("todos");


//update
if(savedToDos !== null){ // 만약 저장된 todo가 있다면
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // 새로운 todo가 들어오면 저장할 수 있도록 한다
    // 0번째 인덱스에는 이벤트가, 1은 칼로리 
    for(let i=0; i<toDos.length; i++ ){
        const existEvent = toDos[i][0];
        const existEventCal = toDos[i][1];
        paintToDo(existEvent, existEventCal); // 반복하며 저장소에 있는 수만큼 삭제한다
    }
}

