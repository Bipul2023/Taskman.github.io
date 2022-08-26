let taskForm=document.querySelector("#task-form");

taskForm.addEventListener('submit', function(event){
    event.preventDefault();

    let addTask=document.querySelector("#addtask");
    let taskData=addTask.value;
     
    if(taskData==null){
        alert('Please Enter Valid Task.');
    }
    let taskArr=[];
    if(localStorage.getItem("task")){
        taskArr=JSON.parse(localStorage.getItem("task"));
    }

    taskArr.unshift(taskData);
    localStorage.setItem('task',JSON.stringify(taskArr));

    displayData();
});

let button3=document.querySelector('#butn3');
button3.addEventListener('click',function(){
    displayData();
})

function displayData(){
    let outArr=[];
    if(localStorage.getItem("task")){
        outArr=JSON.parse(localStorage.getItem("task"));
    }

    let allTask="";
    for(let i=0;i<outArr.length;i++){
        allTask=allTask+`<li>${outArr[i]}</li>`;
    }

    let showTask=document.querySelector("#TaskItem");
    showTask.innerHTML=allTask;
}

let delete1=document.querySelector('#delete');

delete1.addEventListener('click',function(){
    let arr=[];
    if(localStorage.getItem("task")){
        arr=JSON.parse(localStorage.getItem("task"));
    }

    arr.pop();
    
    localStorage.setItem("task",JSON.stringify(arr));

    displayData();
})