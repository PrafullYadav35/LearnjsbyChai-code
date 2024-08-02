const input = document.getElementById('input-box');
const list_container = document.getElementById("list-container");
showData();
function addTask(){
    if(input.value ==''){
        alert("Please enter your task !");
    }
    else{
        const li = document.createElement('li');
        li.innerHTML =input.value;
        list_container.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7"
        li.appendChild(span);
        saveData();
    }
    input.value =' ';
   
}

list_container.addEventListener("click",function(e){
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

    /*The code adds a click event listener to ist_container.
If a LI element is clicked, it toggles the "checked" class on the LI element.
If a SPAN element is clicked, it removes the parent LI element of the SPAN from the DOM.
     */

    //The classList property returns the CSS classnames of an element.

    //Get the element where the event occurred:

//const element = event.target;
//Get the name of the element where the event occurred:
//let text = event.target.tagName;

})

function saveData(){
    localStorage.setItem("data",list_container.innerHTML);
}

function showData(){
   list_container.innerHTML= localStorage.getItem("data");
}
