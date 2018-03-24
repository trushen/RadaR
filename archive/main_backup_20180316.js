/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function loadFile() {
    var input, file, fr;

    if (typeof window.FileReader !== 'function') {
      alert("The file API isn't supported on this browser yet.");
      return;
    }

    input = document.getElementById('fileinput');
    if (!input) {
      alert("Um, couldn't find the fileinput element.");
    }
    else if (!input.files) {
      alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
      alert("Please select a file before clicking 'Load'");
    }
    else {
      file = input.files[0];
      fr = new FileReader();
      fr.onload = receivedText;
      fr.readAsText(file);
    }

    function receivedText(e) {
      lines = e.target.result;
      var taskData = JSON.parse(lines); 


//load [task] data from JSON file
taskData.forEach(addTask)

// function myConsole(json){
//     console.log(json.taskId + ':' + json.area);
// }


// //Method to update Kanban Board with [task] object
function addTask(task){
    console.log(task.taskId + ':' + task.area);

    //create a new element in the DOM
    var newTask = document.createElement("li");

    //green RAG by default
    newTask.classList.add("green");

    //add text to the new element
    var node = document.createTextNode(task.taskId)
    newTask.appendChild(node);

    //get the conformed status for the task
    var colIndex;
    switch(task.status) {
        case "New":
            colIndex = 1
            break;
        case "Under Investigation":
            colIndex = 2
            break;
        default:
            colIndex = 3
    }

   //get the conformed area for the task
   var rowIndex;
   switch(task.area) {
       case "Authentication":
        rowIndex = "row1"
           break;
       case "Correspondence":
        rowIndex = "row2"
           break;
       default:
        rowIndex = "row3"
   }


    //set the parent element to set location on the Kanban Board
    var parentList = document.getElementsByClassName(rowIndex)[colIndex];
    parentList.appendChild(newTask);
}



    }

}


// console.log("hello");

// // Get the modal
// var modal = document.getElementById('defectPopup');

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// //Get the button that opens the modal
// var button = document.getElementsByClassName("btn")[0];

// // When the user clicks on the button, open the modal
// button.onclick = function(){
//     //window.alert("hello world")
//     modal.style.display = "block";

// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.style.display = "none";
// };

// // Get the class of top
//  var kanbanTop = document.getElementsByClassName("top");
//  var kanbanMiddle = document.getElementsByClassName("middle");
//  var kanbanBottom = document.getElementsByClassName("bottom");

// //Resize top row on load
// window.onload = function(){

// for (var i =0; i < 5; i++) {kanbanTop.item(i).style.height = "100px";};
// for (var i =0; i < 5; i++) {kanbanMiddle.item(i).style.height = "100px";};
// for (var i =0; i < 5; i++) {kanbanBottom.item(i).style.height = "100px";};

// };



// //Add elements to class
// var addItemButton = document.getElementById("addItemButton");
// addItemButton.onclick = addItem;

// function addItem(){

// var newItem = document.createElement("li");
// var node = document.createTextNode("New");
// newItem.appendChild(node);

// var parentList = document.getElementsByClassName("middle")[2];
// parentList.appendChild(newItem);

// };
