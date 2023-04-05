//Getting all required elements
 
 const inputField = document.querySelector(".input-field textarea");
 todoList = document.querySelector(".todolist");
 pendingNum = document.querySelector(".pending-num");
 clearButton = document.querySelector(".clear-button");
 
 //we will call this function while adding, deleting and checking - unchecking the task
 function allTask(){
     let tasks = document.querySelectorAll(".pending");
 
     //if tasks length is 0 then pending num text content will be no, if not then pending num will be tasks's length.
     pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;
 }
 
 console.log(inputField,todoList,pendingNum,clearButton);
 
 //add task while we put value in text area and press enter
 
 inputField.addEventListener("keyup", (e) => {
     
     let inputValue = inputField.value.trim(); //trim function removes space of front and back of the inputed value
     
     //if enter button is clicked and inputed value length is greater than 0.
     if(e.key==="Enter" && inputValue.length>0 ){
         let liTag = `
             <li class="list pending" onclick="handlestatus(this)">
             <input type="checkbox"/>
             <span class="task">${inputValue}</span>
             <i class="uil uil-trash" onclick="deleteTask(this)"></i>
             </li>`;
         
             todoList.insertAdjacentHTML("beforeend", liTag); //inserting li tag inside the todolist div
             inputField.value = "" ;//removing alue from input field
             allTask();
 
     }
 } );
 
 //checking and unchecking the checkbox while we click on the task
 
 function handlestatus(e){
     const checkbox = e.querySelector("input");  //getting checkbox
     checkbox.checked = checkbox.checked ? false : true;
     e.classList.toggle("pending");
     allTask();
 }
 
 //deleting tasks while we click on the delete icon.
 function deleteTask(e) {
    e.parentElement.remove();  //getting parent element and remove it
    allTask();  
 }
 
 //deleting all the tasks while we click on the clear button
 clearButton.addEventListener("click", ()=>{
     todoList.innerHTML = "";
     allTask();
 })

 