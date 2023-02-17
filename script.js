//your code here
var inputElement = document.getElementById("newTodoInput");
var btn = document.getElementById("addTodoBtn");
var olElement = document.getElementById("todoList");

function addToDoElement (){
    if(inputElement.value){
        //we need to create li in after the ol element
    var li = document.createElement('li');
    li.textContent = inputElement.value;
    //add li as a child of ol element
    olElement.appendChild(li);
    inputElement.value = "";
    }
}
// cal;l function
btn.addEventListener("click",addToDoElement);

