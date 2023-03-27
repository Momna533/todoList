/*const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery_form");
const grocery = document.querySelector(".grocery");
const submitBtn = document.querySelector(".submit_btn");
const container = document.querySelector(".grocery_container");
const list = document.querySelector(".grocery_list");
const clearBtn = document.querySelector(".clear_btn");
let editElement;
let editFlag = false;
let editID = '';
// event listeners
form.addEventListener("submit",addItem);
clearBtn.addEventListener("click",clearItems);
window.addEventListener("DOMContentLoaded",setupItems)   
//functions
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if(value && !editFlag){
       createListItem(id,value)
        displayAlert("item added to the list","success");
        container.classList.add("show_container");
        addToLocalStorage(id,value);
        setBackToDefault();
    }
    else if(value && editFlag){
        editElement.innerHTML = value;
        displayAlert("value changed","success");
        editLocalStorage(editID,value);
        setBackToDefault();

    }else{
        displayAlert("enter a value","danger")
    }
}
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert_${action}`)

    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert_${action}`)
    },1000)
}
function clearItems(){
    const items =  document.querySelectorAll(".grocery_item");
    if(items.length > 0){
        items.forEach((item)=>{
            list.removeChild(item);
        })
    }
    container.classList.remove("show_container");
    displayAlert("empty list","success");
    setBackToDefault();
    localStorage.removeItem("list")
}
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0){
        container.classList.remove("show_container");
    }
    displayAlert("item removed", "danger")
    setBackToDefault();
    removeFromLocalStorage(id);
}
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";
    // console.log(editElement)
}
function setBackToDefault(){
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit"
}
function addToLocalStorage(id,value){
    // const grocery = {id,value};
    // let items = getLocalStorage();
    // items.push(grocery);
    // localStorage.setItem("list",JSON.stringify(items));

}
function removeFromLocalStorage(id){
    // let items = getLocalStorage();
    // items = items.filter((item)=>{
    //     if(item.id !== id){
    //         return item;
    //     }
    // })
    // localStorage.setItem("list",JSON.stringify(items));

}
function editLocalStorage(id,value){
    // let items = getLocalStorage();
    // items = items.map((item)=>{
    //     if(item.id === id){
    //         item.value = value;
    //     }
    //     return item;
    // }) 
    // localStorage.setItem("list",JSON.stringify(items));

}
function getLocalStorage(){
    return localStorage.getItem("list")? JSON.parse(localStorage.getItem("list")) : [];
}
//set get remove
// localStorage.setItem("orange",JSON.stringify(["item","item2"]));
// const oranges = JSON.parse(localStorage.getItem("orange"));
// localStorage.removeItem("orange");
function setupItems(){
    let items = getLocalStorage();
    if(items.length > 0){
       items.forEach((item)=>{
        createListItem(item.id,item.value);
       }) 
       container.classList.add("show_container")
    }
}
function createListItem(id,value){
    const element = document.createElement("div");
    element.classList.add("grocery_item");
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<div class="title">${value}</div>
    <div class="btn_container">
        <button type="button" class="edit_btn">edit</button>
        <button type="button" class="delete_btn">delete</button>
    </div>` 
    const deleteBtn = element.querySelector(".delete_btn");
    const editBtn = element.querySelector(".edit_btn");
    deleteBtn.addEventListener("click",deleteItem);
    editBtn.addEventListener("click",editItem);
    list.appendChild(element);
}*/

const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery_form");
const grocery = document.querySelector(".grocery");
const submitBtn = document.querySelector(".submit_btn");
const container = document.querySelector(".grocery_container");
const list = document.querySelector(".grocery_list");
const clearBtn = document.querySelector(".clear_btn");

let editFlag = false;
let editElement;
let editId = '';
form.addEventListener("submit",addItem);
clearBtn.addEventListener("click",clearItems);
window.addEventListener("DOMContentLoaded",setupItems)

function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if(value && !editFlag){
       createListItem(id,value);
        container.classList.add("show_container");
        displayAlert("item added","success");
        addToLocalStorage(id,value);
        setBackToDefault();
    }else if(value && editFlag){
        editElement.innerHTML = grocery.value;
        displayAlert("value edited","success");
        editLocalStorage(editID,value);
        setBackToDefault();
    }else{
        displayAlert("empty","danger");
    }
}
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert_${action}`);
    setTimeout(()=>{
        alert.textContent = '';
        alert.classList.remove(`alert_${action}`)
    },1000);
}
function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = "submit";
}
function clearItems(){
    const items = document.querySelectorAll(".grocery_item");
    if(items.length > 0){
        items.forEach(item =>{
            list.removeChild(item);
        })
    }
   container.classList.remove("show_container");
   displayAlert("list cleared", "success");
    localStorage.removeItem("list")
   setBackToDefault();

}
function deleteItems(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0){
        container.classList.remove("show_container");
    }
    displayAlert("item deleted", "success");
    removeFromLocalStorage(id);
    setBackToDefault();
}
function editItems(e){
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";
}
//set get remove
function addToLocalStorage(id,value){
    const grocery = {id,value}
    let items = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
    items.push(grocery)
    localStorage.setItem("list",JSON.stringify(items));
}
function removeFromLocalStorage(id){
    let items = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
    items = items.filter((item)=>{
        if(item.id !== id){
            return item;
        }
    })
    localStorage.setItem("list",JSON.stringify(items));
}
function editLocalStorage(id,value){
    let items = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
    items = items.map((item)=>{
        if(item.id === id){
            item.value = value;
        }
        return item;
    })
    localStorage.setItem("list",JSON.stringify(items));

    console.log("local storage edited")
}
function setupItems(){
    let items = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
    if(items.length > 0){
        items.forEach((item)=>{
            createListItem(item.id,item.value)
        })
        container.classList.add("show_container");
    }
    console.log("set up items")
}
function createListItem(id,value){
    const element = document.createElement("div");
    element.classList.add("grocery_item");
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<div class="title">${value}</div>
    <div class="btn_container">
        <button type="button" class="edit_btn">edit</button>
        <button type="button" class="delete_btn">delete</button>
    </div>`;
    list.appendChild(element);
    deleteBtn = element.querySelector(".delete_btn");
    editBtn = element.querySelector(".edit_btn");
    deleteBtn.addEventListener("click",deleteItems);
    editBtn.addEventListener("click",editItems);
} 
// localStorage.setItem("key",JSON.stringify("value"));
// const items = JSON.parse(localStorage.getItem("key"));
// localStorage.removeItem("key");