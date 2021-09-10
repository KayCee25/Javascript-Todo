
let button = document.getElementById("submit")
let text = document.getElementById("todoInput")
let todos = document.getElementById("todo-list")

function btn () {
    let todo = text.value
    if(todo === ""){
        alert("Input Todo")
    }
    else{

    }
}
function done (e) {
    if (e.target.tagName == "LI"){
        e.target.classList.toggle("checked")
    }
    
}

button.addEventListener("click", btn)

todos.addEventListener("click", done)