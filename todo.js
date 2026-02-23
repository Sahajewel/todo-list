const btn = document.getElementById("btn");
const inputText = document.querySelector("input[type='text']")
const unordered = document.getElementById("unordered")

function createElement(text, date){
    const li = document.createElement("li")
    li.style.color="red";
    li.innerHTML=`
    <span>${text}</span>
    <span>${date}</span>
    <button>Edit</button>
    <button>Delete</button>
    `
    return li
}


btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const textValue = inputText.value;
    if(textValue === "") return alert("Please input text")
        const date = new Date().toLocaleDateString();
    const li = createElement(textValue, date)
    unordered.appendChild(li)
inputText.value=""
saveLocal()
})

function saveLocal(){
    const tasks = [];
    document.querySelectorAll("#unordered li span:first-child").forEach((span)=>{
        tasks.push(span.textContent)
    })
    localStorage.setItem("todoList", JSON.stringify(tasks))
}

unordered.addEventListener("click", (e)=>{
    const clickElement = e.target;
    if(clickElement.innerText==="Delete"){
        clickElement.parentElement.remove()
        saveLocal()
    }
    else if(clickElement.innerText==="Edit"){
        const list = clickElement.parentElement
        const oldTask = list.querySelector("span").innerText;
        const newTask = prompt("Updated task: " , oldTask)
        if(newTask !== null && newTask.trim() !== ""){
            list.querySelector("span").innerText =newTask
            saveLocal()
        }

  
    }
})




window.onload= ()=>{
    const savedTasks = JSON.parse(localStorage.getItem("todoList")) || [];
    savedTasks.forEach((taskText)=>{
        const date = new Date().toLocaleDateString();
        const li = createElement(taskText, date)
        unordered.appendChild(li)
    })
}