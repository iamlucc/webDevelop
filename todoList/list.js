var todos = ["Wait to add..."];

var input = prompt("What would you like to do?");

while(input !== "quit") {

	if(input === "list") {
		listTodo();
	} else if(input === "new") {
		addTodo();
	} else if(input === "delete") {
		deleteTodo();
	}

	input = prompt("What would you like to do?");
}

console.log("You quit the App!");

function listTodo() {
	console.log("**********");
	todos.forEach(function(todo, i) {
		console.log(i + ": " + todo);
	});
	console.log("**********");
}

function addTodo() {
	var addTodo = prompt("Enter a new todo");
	todos.push(addTodo);
	console.log(addTodo + " added to todo");
}

function deleteTodo() {
	var index = prompt("Which item you want to delete? Enter it's Index.");
	console.log(todos[index] + " removed from todo");
	todos.splice(index, 1); // splice(index, how many items after index)
}