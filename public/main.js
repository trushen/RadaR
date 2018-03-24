/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//upload button
function hover(element) {
    element.setAttribute('src', 'uploadBlack.svg');
}
function unhover(element) {
    element.setAttribute('src', 'uploadWhite.svg');
}

//clear button
function hoverClear(element) {
    element.setAttribute('src', 'deleteRed.svg');
}
function unhoverClear(element) {
    element.setAttribute('src', 'deleteWhite.svg');
}

// Get the upload modal
var uploadModal = document.getElementById('uploadModal');

// Get the <span> element that closes the modal
var closeUploadModal = document.getElementsByClassName("closeButton")[0];

//Get the button that opens the modal
var uploadButton = document.getElementById("uploadLogo");

// When the user clicks on the button, open the modal
uploadButton.onclick = function(){
    //window.alert("hello world")
    uploadModal.style.display = "block";

};

// When the user clicks on <span> (x), close the modal
closeUploadModal.onclick = function () {
    uploadModal.style.display = "none";
};


function loadFile() {
    var input, file;

    // if (typeof window.FileReader !== 'function') {
    //   alert("The file API isn't supported on this browser yet.");
    //   return;
    // }

    input = document.getElementById('uploadFileForm');

    if (!input) {
      console.log("Error: Could not find the fileinput element");
    }
    
    else if (!input.files) {
      alert("This browser does not support RadaR");
      console.log("Error: This browser does not support RadaR");
    }
    else if (!input.files[0]) {
        console.log("Error: File not selected");
    }
    else {
    file = input.files[0];
    //   fr = new FileReader();
    //   fr.onload = receivedText;
    //   fr.readAsText(file);
    

    uploadModal.style.display = "none";
    Papa.parse(file, {
        header:true,
        complete: function(results) {
            var taskData = results.data;
            console.log("Successfully finished parsing " + taskData.length + " records" );

            //Load taskData into Kanban
            taskData.forEach(addTask);
        }
    });
    }
}



// //Method to update Kanban Board with [task] object
function addTask(task){
    // console.log(task);

    //create a new element in the DOM
    var newTask = document.createElement("li");

    //green RAG by default
    switch(task.TaskRAG) {
        case "Red":
            newTask.classList.add("red")
            break;
        case "Amber":
            newTask.classList.add("amber")
            break;
        case "Green":
            newTask.classList.add("green")
            break;
        default:
            newTask.classList.add("green")
    }
   //add open task method onclick
    newTask.onclick = function(){
        openTask(task)
    }

    //add text to the new element
    var node = document.createTextNode(task.TaskId)
    newTask.appendChild(node);

    //get the conformed status for the task
    var colIndex;
    switch(task.TaskStatus) {
        case "New":
            colIndex = 0
            break;
        case "Under Investigation":
            colIndex = 1
            break;
        case "Fix in Progress":
            colIndex = 2
            break;
        case "Fixed":
            colIndex = 3
            break;
        case "Fix Blocked":
            colIndex = 4
            break;
        default:
            colIndex = 5
    }

   //get the conformed area for the task
   var rowIndex;
   switch(task.TaskArea) {
        case "Authentication":
        rowIndex = "row1"
           break;
        case "Correspondence":
        rowIndex = "row2"
           break;
        case "Fees & Charges":
        rowIndex = "row3"
           break;
        case "Illustrations":
        rowIndex = "row4"
           break;    
       default:
        rowIndex = "row5"
   }




    //set the parent element to set location on the Kanban Board
    var parentList = document.getElementsByClassName(rowIndex)[colIndex];
    parentList.appendChild(newTask);

}
    
//open task info modal

// Get the task modal
var taskModal = document.getElementById('taskModal');

// Get the task modal elements
var taskModalHeader = document.getElementById('taskModalHeader');
var taskIdText = document.getElementById('taskIdText');
var taskSummaryText = document.getElementById('taskSummaryText');
var taskStatusText = document.getElementById('taskStatusText');
var taskAssigneeText = document.getElementById('taskAssigneeText');
var taskOwnerText = document.getElementById('taskOwnerText');
var taskPriorityText = document.getElementById('taskPriorityText');
var taskAreaText = document.getElementById('taskAreaText');

// Get the <span> element that closes the modal
var closeTaskModal = document.getElementsByClassName("closeButton")[1];


// When the user clicks on <span> (x), close the modal
closeTaskModal.onclick = function () {
    taskModal.style.display = "none";
}

function openTask(clickTask){
//console.log(clickTask.TaskId);
//update the task modal elements

taskModalHeader.childNodes[0].nodeValue = clickTask.TaskName;
//taskModalHeader.childNodes[0].nodeValue = clickTask.TaskId;

taskIdText.childNodes[0].nodeValue = clickTask.TaskId;
taskSummaryText.childNodes[0].nodeValue = clickTask.TaskSummary;
taskStatusText.childNodes[0].nodeValue = clickTask.TaskStatus;
taskAssigneeText.childNodes[0].nodeValue = clickTask.TaskAssignee;
taskOwnerText.childNodes[0].nodeValue = clickTask.TaskOwner;
taskPriorityText.childNodes[0].nodeValue = clickTask.TaskPriority;
taskAreaText.childNodes[0].nodeValue = clickTask.TaskArea;


//open the task modal
taskModal.style.display = "block";

}


// clear all tasks from the kanban
function clearKanban(){

var redPostIts = document.getElementsByClassName('red');
var amberPostIts = document.getElementsByClassName('amber');
var greenPostIts = document.getElementsByClassName('green');

 while(redPostIts[0]) {
    redPostIts[0].parentNode.removeChild(redPostIts[0]);
 }

 while(amberPostIts[0]) {
    amberPostIts[0].parentNode.removeChild(amberPostIts[0]);
 }
 while(greenPostIts[0]) {
    greenPostIts[0].parentNode.removeChild(greenPostIts[0]);
 }

}
