import './style.css';
const arr = [];
const root = document.getElementById("root");
const addButton = document.getElementById("addBtn");

const mainContainer = document.createElement("div");
mainContainer.className = "mainContainer";

let input = document.getElementById("input");

input.addEventListener("keyup", function(event) {
    if(event.key === "Enter") {
        newNode();
    }
})

function newNode() {
    if(input.value === "") {
        return;
    } 
    const mainContainer = document.createElement("div");
    const incomingText = document.createElement("div");
    const removeBtnDiv = document.createElement("button");

    mainContainer.className = "mainContainer";
    mainContainer.id = "mainContainer";
    incomingText.className = "incomingText";
    removeBtnDiv.className = "removeBtn";

    let newTodo = document.createElement("p");
    newTodo.innerText = input.value;
    mainContainer.appendChild(incomingText);
    incomingText.appendChild(newTodo);
    root.appendChild(mainContainer);
    input.value = "";
    mainContainer.addEventListener("click", function() {
        const COMPLETED_COLOR = "rgb(139, 202, 139)";
        const isCompleted = mainContainer.style.background === COMPLETED_COLOR;
        mainContainer.style.background = isCompleted ? "rgb(113, 150, 150)" : 'rgb(139, 202, 139)'
    });
    mainContainer.addEventListener("dblclick", function() {
        mainContainer.remove();
    });
    mainContainer.addEventListener("mouseover", function() {
        mainContainer.style.transform = "scale(0.95)"
    });
    mainContainer.addEventListener("mouseleave", function() {
        mainContainer.style.transform = ""
    });
}

addButton.addEventListener("click", function() {
    newNode();
});