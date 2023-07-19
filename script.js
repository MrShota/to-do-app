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
        // console.log(users)

        for (user of users) {
            const singleUserDiv = document.createElement('div');
            singleUserDiv.classList.add('single-user-div');
            singleUserDiv.innerText = user.firstName + user.lastName;
            employeesList.append(singleUserDiv);
            let id = user.id;
            singleUserDiv.addEventListener('click', function () {
                getTodo(id)
            });
        }


    });

function getTodo(id) {

    console.log(id)
    fetch('https://dummyjson.com/todos')
        .then(res => res.json())
        .then(allTodo => {
            console.log(allTodo.todos)





            const singleUserTodo = document.createElement('div');
            singleUserTodo.innerText = id;
            toDoList.append(singleUserTodo)

        })

}