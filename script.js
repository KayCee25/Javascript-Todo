
let button = document.getElementById("submit")
let text = document.getElementById("todoInput")


function btn () {
    if(text.value === ""){
        alert("Input Todo")
    }
    else{
        alert("I will " + text.value + "")
        text.value = "" 
    }
}

button.addEventListener("click", btn)