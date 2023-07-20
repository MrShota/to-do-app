const employeesList = document.getElementById('employees-list');
const input = document.getElementById('input');
const inputBtn = document.getElementById('input-btn');
const btnAll = document.getElementById('btn-all');
const btnActive = document.getElementById('btn-active');
const btnACompleted = document.getElementById('btn-completed');
const toDoList = document.getElementById('to-do-list');

fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(allUser => {
        const users = allUser.users
        for (user of users) {
            const singleUserDiv = document.createElement('div');
            singleUserDiv.classList.add('single-user-div');
            singleUserDiv.innerText = user.firstName + ' ' + user.lastName;
            employeesList.append(singleUserDiv);
            let userId = user.userId;
            console.log(userId)
            // singleUserDiv.addEventListener('click', function () {
            //     fetch('https://dummyjson.com/todos')
            //         .then(res => res.json())
            //         .then(allTodo => {
            //             const todo = allTodo.todos[userId];
            //             const singleUserTodo = document.createElement('div')

            //             singleUserTodo.append(todo.todo);
            //             toDoList.append(singleUserTodo)
            //             console.log(todo)

            //         })
            // });
        }
    });