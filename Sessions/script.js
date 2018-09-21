window.onload = function()
{
let newtask = document.getElementById('newtask')
let addtask = document.getElementById('addtask')
addtask.className = "fa fa-plus-square"
let tasklist = document.getElementById('tasklist')
let deletetask = document.getElementById('deletetask')
deletetask.className = "fa fa-minus-square"
let sorttask = document.getElementById('sorttask')
sorttask.className ="fa fa-sort"

//array for storing the data 
var array = []
var count = 0
console.log(array)

// add the new task
addtask.onclick = function () {
 var newArray ={}
 let item = newtask.value
 if(item == ""){
   alert("please enter the task")
   return false;
}
 let newtasklistitem = document.createElement("li")
 newtasklistitem.innerText = item
 newtasklistitem.id = count
 let upButton = document.createElement("button")
 upButton.className = "fa fa-level-up"
 //upButton.disabled = true

 let downButton = document.createElement("button")
 downButton.className = "fa fa-level-down"

 let crossButton = document.createElement("i")
 crossButton.className = "fa fa-trash"

 let checkbox = document.createElement("input")
 checkbox.type = "checkbox"
 //checkbox.onchange = dochange(this.parentElement)
 newArray["task"] = item
 newArray["checkbox"] = checkbox.value
 array.push(newArray)

 newtasklistitem.appendChild(checkbox)
 newtasklistitem.appendChild(upButton)
 newtasklistitem.appendChild(downButton)
 newtasklistitem.appendChild(crossButton)

 downButton.disabled = true
 if (tasklist.children.length == 0) {
     console.log('first')
     upButton.disabled = true
 }else{
    tasklist.lastChild.lastChild.previousSibling.disabled = false
    }
    tasklist.appendChild(newtasklistitem)
 count++
 //console.log(array)

 // up the particular task
 upButton.addEventListener("click", function(event){
    let index = getItemIndex(event.target.parentNode)
    console.log(index)
    if (tasklist.children.length > 1) {
        if (index == 1 ) {
            if(tasklist.children.length ==2)
            {
                event.target.parentNode.previousSibling.lastChild.previousSibling.previousSibling.disabled = false
                event.target.parentNode.lastChild.previousSibling.disabled = false
                event.target.parentNode.previousSibling.lastChild.previousSibling.disabled=true
            }
            if (tasklist.children.length > 2) {
                event.target.parentNode.previousSibling.lastChild.previousSibling.previousSibling.disabled = false // UP button enabled
            }
            event.target.parentNode.lastChild.previousSibling.previousSibling.disabled = true // UP button disabled
        }
        else if (index == tasklist.children.length - 1) {
            if (tasklist.children.length > 2) {
                event.target.parentNode.lastChild.previousSibling.disabled = false // down button enabled
                console.log(event.target.parentNode.lastChild.previousSibling)
            }
            event.target.parentNode.previousSibling.lastChild.previousSibling.disabled=true // down button disabled
            console.log(event.target.parentNode.lastChild.previousSibling)
        }
    }
    event.target.parentNode.parentNode.insertBefore(event.target.parentNode, event.target.parentNode.previousSibling)

});

// down the task priority
downButton.addEventListener("click", function(event){
    let index = getItemIndex(event.target.parentNode)
    //console.log(index)
    if (tasklist.children.length > 1) {
        if (index == 0) {
            if(tasklist.children.length ==2)
            {
                event.target.parentNode.lastChild.previousSibling.previousSibling.disabled = false
                event.target.parentNode.nextSibling.lastChild.previousSibling.disabled = false
                event.target.parentNode.lastChild.previousSibling.disabled=true
            }
            if (tasklist.children.length > 2) {
                event.target.parentNode.lastChild.previousSibling.previousSibling.disabled = false // UP button enabled
            }
            event.target.parentNode.nextSibling.lastChild.previousSibling.previousSibling.disabled=true //up button disabled
        }
        else if (index == tasklist.children.length - 2) {
            if (tasklist.children.length > 2) {
                event.target.parentNode.nextSibling.lastChild.previousSibling.disabled = false // down button enabled
            }
            event.target.parentNode.lastChild.previousSibling.disabled=true // down button disabled
        }
    }
    event.target.parentElement.parentNode.
    insertBefore(event.target.parentNode.nextSibling,event.target.parentNode);
});

// delete the particular task
crossButton.addEventListener("click", function(event){
    let index = getItemIndex(event.target.parentNode)
    //console.log(index)
    if(tasklist.children.length > 1)
    {
    if(index == 0) // makes second task to first 
        {
            event.target.parentNode.nextSibling.lastChild.previousSibling.previousSibling.disabled = true

        }
    else if(index == tasklist.children.length-1) // makes last task to second last 
    {
        event.target.parentNode.previousSibling.lastChild.previousSibling.disabled = true
    }
}
    event.target.parentNode.parentNode.removeChild(event.target.parentNode)
});

// change the text decoration of text on checked
checkbox.addEventListener("change", function(event){
   if(event.target.checked){
     event.target.parentNode.className ="overlined"}
   else{event.target.parentNode.className = "normal"}
}); 
}

// Delete all checked tasks
  deletetask.onclick = function () 
  {
    document.querySelectorAll("input:checked[type=checkbox]").
    forEach(e => e.parentNode.parentNode.removeChild(e.parentNode))
    changeTheStructure()
}
// sort the checked tasks
  sorttask.onclick = function () {
    document.querySelectorAll("input:checked[type=checkbox]").
    forEach(e => e.parentNode.parentNode.insertBefore(e.parentNode,null))
    document.querySelectorAll("input:checked[type=checkbox]").
    forEach(e => e.parentNode.parentNode.insertBefore(e.parentNode,null))
    changeTheStructure()
  }

  function getItemIndex(child){
    var parent = child.parentNode;
    var children = parent.children;
    var i = children.length - 1;
    for (; i >= 0; i--){
        if (child == children[i]){
            break;
        }
    }
    return i;
}

function changeTheStructure()
{
    for(let i=0;i<tasklist.children.length;i++)
    {
     if(tasklist.children.length >  1)
     {
        if(i == 0){
         tasklist.children[i].children[1].disabled = true
         tasklist.children[i].children[2].disabled = false
    }
    else if(i == tasklist.children.length-1)
    {
        tasklist.children[i].children[1].disabled = false
         tasklist.children[i].children[2].disabled = true
    }
    else
    {
        tasklist.children[i].children[1].disabled = false
         tasklist.children[i].children[2].disabled = false
    }
}
else{
    tasklist.children[i].children[1].disabled = true
    tasklist.children[i].children[2].disabled = true
}
}
}

}
