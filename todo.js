const btn = document.getElementById("btn");
const inputText = document.querySelector("input[type='text']")
const unordered = document.getElementById("unordered")


btn.addEventListener("click", (e)=>{
    e.preventDefault()
   const textValue = inputText.value;
   const date = new Date()
   const li = document.createElement("li")
   if(textValue===""){
    alert("please input the text")
    return
   }
//   onclick="deleteTask(this)
 li.innerHTML= `
 <span>${textValue}</span>
 <span>${date}</span>
 <button>Edit</button>
 <button">Delete</button>
 `
 unordered.appendChild(li)
 li.style.color="red"

 inputText.value=""
})

// event delegation
unordered.addEventListener("click", (e)=>{
const clickedElement = e.target;
const createInput = document.createElement("input")
if(clickedElement.innerText==="Delete"){
    clickedElement.parentElement.remove()
}
else if(clickedElement.innerText==="Edit"){
    const listItem = clickedElement.parentElement;
    const oldTask = listItem.querySelector("span").innerText;
    const newTask = prompt("Edit your task: ", oldTask)
  if(newTask !== null && newTask.trim()!==""){
    listItem.querySelector("span").innerText = newTask
  }
}
})


// onclick listener
// function deleteTask(button){
// button.parentElement.remove()
// }