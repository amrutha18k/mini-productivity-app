const app = document.querySelector('.app');
showWelcome();

function showWelcome(){
  app.innerHTML = `
      <div class="wlcm">
        <button class="menu-btn" onclick="showMenu()">
          Welcome!
        </button>
        <p>
          press welcome to continue..
        </p>
      </div>
    `;
}

function showMenu(){
  app.innerHTML = `  
    <div class="wlcm wlcm1">
      <button class="menu-btn" onclick="
        showTodo();
      ">
        notes
      </button>
      <button class="menu-btn">
        to-do
      </button>
      <button class="menu-btn">
        calculator
      </button>
    </div>
  `;
}

function showTodo(){
  app.innerHTML=`
  <div class="todo">
    <input class="inp" placeholder="enter your work" onkeydown="
      taskKey(event);
    ">
    <button class="add-btn" onclick="
      addTask();
    ">add task</button>
    <div class="todo-list">

    </div>
    <div class="bottom-btns">
        <div class="btn-wrap">
          <button class="bplus" onclick="
            showMenu();
          ">B</button>
          <span class="txt">click to go back</span>
       </div>

        <div class="btn-wrap">
          <button class="plus">+</button>
          <span class="txt">click to add a new todo page</span>
        </div>
  </div>
  `;
}

let taskArr=[];
function addTask(){
  let taskInp= document.querySelector('.inp');
  let task=taskInp.value.trim();
  taskArr.push(task);
  taskInp.value=' ';
  console.log(taskArr); 
  let sp=document.querySelector('.todo-list');
  sp.innerHTML = ' ';
  for(let i=0;i<taskArr.length;i++){
    sp.innerHTML+=`
      <div class="task-box">
        <input class="tasks" type="checkbox">
        <span class="task-text">${taskArr[i]}</span>
      </div>
    `;
  }
}

function taskKey(event){
  let btn=event.key;
  if(btn==='Enter'){
    addTask();
  }
}


