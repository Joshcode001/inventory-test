
const buttonElem = document.querySelector('.js3');
const displayElem = document.querySelector('.js4');
let item = '';
let dueDate = '';
const todoList = [];



function getValue () { 
 const InputElem = document.querySelector('#js1');
 item = InputElem.value 
 InputElem.value = "";
  
 const dateElem = document.querySelector('#js2');
  dueDate = dateElem.value;
 dateElem.value = "";
 todoList.push({
   item,
   dueDate,
 });
 } 

function renderTodolist() {
   let todolistHTML = '';
   for (let i = 0; i < todoList.length; i++) {
   const todoObject = todoList[i];
   const {item, dueDate} = todoObject;
  
   const html = `<div>${item}</div>  <div>${dueDate}</div>  
   <div><button onclick="todoList.splice(${i},1); renderTodolist(); function2();" id= "del">DELETE</button></div>`
   todolistHTML += html;
   displayElem.innerHTML = todolistHTML;
   }};

function function2() {
 if (todoList.length === 0) {
  displayElem.innerHTML = "";
  }
 };

 buttonElem.addEventListener('click', () => {
  getValue();
  console.log(todoList);
  renderTodolist();
 });

 

