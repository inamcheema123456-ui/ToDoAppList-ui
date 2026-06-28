function addTask(){

    let input = document.getElementById("taskInput");
    let taskText  =input.value.trim();

    if(taskText===""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    let span = document.createElement("span");

    span.textContent  =taskText;

        let editBtn = document.createElement("Button");
editBtn.textContent  ="Edit";
editBtn.className  ="EditBtn";

editBtn.onclick = function(){
    let updateTask = prompt(
       "Edit Task",
        span.textContent
    );
    if(updateTask!= null&& updateTask.trim()!==""){

        span.textContent = updateTask.trim();

    }

};

let deleteBtn = document.createElement("Button");
deleteBtn.textContent  ="Delete";
deleteBtn.className  ="deleteBtn";
deleteBtn.onclick = function(){

li.remove();
}


li.appendChild(span);
li.appendChild(editBtn);
li.appendChild(deleteBtn);

document.getElementById("taskList").appendChild(li);
input.value = "";

}

