const input = document.getElementById("input");
const addButton = document.getElementById("add_button");
const taskList = document.getElementById("task_list");

addButton.addEventListener("click", () =>{
    const value = input.value.trim();
    if(value === ""){
        alert("Please enter a task");
    }else{
        const taskBox = document.createElement("div");

        taskBox.style.width = "500px"
        taskBox.style.height = "40px";
        taskBox.style.backgroundColor = "#4A4D57";
        taskBox.style.display = "flex";
        taskBox.style.alignItems = "center";
        taskBox.style.justifyContent = "space-around"
        taskBox.style.marginLeft = "50px";
        taskBox.style.borderRadius = "5px";
        taskBox.style.marginTop = "30px";

        const doneBtn = document.createElement("a");

        doneBtn.style.color = "#00FFC4";
        doneBtn.style.borderRadius = "5px";
        doneBtn.style.marginRight = "15px";
        doneBtn.style.fontSize = "15px";
        doneBtn.style.paddingLeft = "15px";

        doneBtn.href = "#";
        doneBtn.innerHTML = '<i class="fa-regular fa-circle"></i>';
        doneBtn.addEventListener("click", () =>{
            doneBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            pElement.style.textDecoration = "line-through";
        })

        const pElement = document.createElement("p");

        pElement.style.color = "#0a0b0f";
        pElement.style.width = "300px";
        pElement.style.height = "30px";
        // pElement.style.paddingRight = "400px";

        pElement.textContent = value;

        const deleteBtn = document.createElement("a");

        deleteBtn.style.color = "#00FFC4";
        deleteBtn.style.borderRadius = "5px";
        deleteBtn.style.fontSize = "15px";
        deleteBtn.style.paddingRight = "15px";

        deleteBtn.href = "#";
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteBtn.addEventListener("click", () =>{
            taskList.removeChild(taskBox);
        })

        // btns.appendChild(doneBtn);
        // btns.appendChild(deleteBtn);
        // taskBox.appendChild(btns);
        taskBox.appendChild(doneBtn);
        taskBox.appendChild(pElement);
        taskBox.appendChild(deleteBtn);
        taskList.appendChild(taskBox);

        input.value = "";


    }
    
})