const employeesList = document.getElementById('employees-list');
const input = document.getElementById('input');
const inputBtn = document.getElementById('input-btn');
const btnAll = document.getElementById('btn-all');
const btnActive = document.getElementById('btn-active');
const btnACompleted = document.getElementById('btn-completed');
const toDoList = document.getElementById('to-do-list');
let singleUserDiv = '';
fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(allUser => {
        const users = allUser.users
        for (user of users) {
            singleUserDiv = document.createElement('div');
            singleUserDiv.setAttribute('id', 'singleUserDiv')
            singleUserDiv.classList.add('single-user-div');
            singleUserDiv.innerText = user.firstName + ' ' + user.lastName;
            const userId = user.id;
            // console.log(user)
            employeesList.append(singleUserDiv);
            singleUserDiv.addEventListener('click', function () {
                // getAllTodo(userId)
            })
        }
    });

// function getAllTodo(id) {
fetch('https://dummyjson.com/todos')
    .then(res => res.json())
    .then(allTodo => {
        console.log(allTodo.todos)
        for (userId in allTodo.todos) {
            console.log()
        }


        // toDoList.innerText = allTodo.todos[id].todo
    })
// }