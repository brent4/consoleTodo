//What you would like to do?
// enter new to-do.
// Must be able to add new, delete, list and quit.
// after each item added, console.log Item added to list.
// the list command should produce the list 
// with the index with *** above and below the list.

// I think I should set up an empty array, then try to fill it.


// console.log('JavaScript is connected and working.');

// let myList = [];

// //'kiss Myra', 'burp baby', 'make dinner'  bhv I think not needed.

// let myTemp = prompt("Type a todo item");

// console.log(myTemp)


// myList.push(myTemp);

// console.log(myList);

// while ((myTemp !== '') || (myTemp !== 'quit')) {
//     myTemp = prompt("Please type another todo item")
// };

// console.log(myTemp);



// console.log(myTemp);
// myList.forEach(function(entry) {
//     console.log(entry);
// });

let input = prompt(`What would you like to do now? Type 'new' to enter a new todo item. Type 'list'
to console log the todo list. Type 'delete' to delete a list item and 'quit' or 'q' to quit`);
const todos = ['Collect eggs', 'Clean cat litter box'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('****************')
        for (let i = 0; i < todos.length; i++)
            console.log(`${i}: ${todos[i]}`)

        console.log('****************')
    } else if (input === 'new') {
        const newTodo = prompt('Okay, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    } else if (input === 'delete') {
        const index = prompt('Okay, enter an index to delete:');
        const deleted = todos.splice(index, 1);
        console.log(`Okay deleted $(deleted[0])`);
    }
    input = prompt('What would you like to do today?')
}

console.log('Okay, you quit the app!')