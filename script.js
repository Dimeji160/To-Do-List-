 // Function to add a new task to the task list
 function addTask() {

 // Get the input
 const input =document.getElementById("task-input");

 // Get what the user typed in
 const taskText = input.value

 // Create a new list item
 const taskList = document.getElementById("task-list");

 // Check if the input is empty 
 if (taskText ==="") {
   alert("Please enter a task.");
   return;
 }

 // creates the list item 
 const li = document.createElement("li");

 // puts the task inside the <li>
 li.textContent = taskText;

 // create delete button
 const deleteButton = document.createElement("button");

 // Put "Delete" inside the button
 deleteButton.textContent = "Delete";

 // delete the task when the button is clicked
 deleteButton.addEventListener("click", function () {
 li.remove();
 });

 // Put the Delete button inside the list item
 li.appendChild(deleteButton);

 // Add the list item to the task list
 taskList.appendChild(li);

 // Clear the input box
 input.value = "";
 
 }