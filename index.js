const express = require('express');

const fs = require('fs');
const api = express();

api.use(express.static(__dirname + '/public'));

api.listen(3000,() => {
    console.log('API is working!')
})

//funtion to parse JSON data file
// function readJsonFileSync(filepath, encoding){

//     if (typeof (encoding) == 'undefined'){
//         encoding = 'utf8';
//     }
//     var file = fs.readFileSync(filepath, encoding);
//     return JSON.parse(file);
// }

// //funtion to load JSON file
// function getJsonData(file){

//     var filepath = __dirname + '/public/' + file;
//     return readJsonFileSync(filepath);
// }

// //load [task] data from JSON file
// taskData = getJsonData('myTasks.json');
// taskData.forEach(myConsole)

// function myConsole(json){
//     console.log(json.taskId + ':' + json.area);
// }


// // //Method to update Kanban Board with [task] object
// function addTask(task){
//     console.log(task.taskId + ':' + task.area);

//     //create a new element in the DOM
//     var newTask = document.createElement("li");

//     //green RAG by default
//     newTask.classList.add("green");

//     //add text to the new element
//     var node = document.createTextNode(task.taskId)
//     newTask.appendChild(node);

//     //get the conformed status for the task
//     var colIndex;
//     switch(task.status) {
//         case "New":
//             colIndex = 1
//             break;
//         case "Under Investigation":
//             colIndex = 2
//             break;
//         default:
//             colIndex = 3
//     }

//    //get the conformed area for the task
//    var rowIndex;
//    switch(task.area) {
//        case "Authentication":
//         rowIndex = row1
//            break;
//        case "Correspondence":
//         rowIndex = row2
//            break;
//        default:
//         rowIndex = row3
//    }


//     //set the parent element to set location on the Kanban Board
//     var parentList = document.getElementsByClassName(rowIndex)[colIndex];
//     parentList.appendChild(newTask);
// }