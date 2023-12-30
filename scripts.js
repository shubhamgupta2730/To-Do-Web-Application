//object list
let toDoList = [
{
    item: 'first',
    dueDate: '04/10/2023'
},
{
    item: 'second',
    dueDate: '03/10/2023'
}
];


displayItems();

function addToDo()
{
    let inputElement = document.querySelector('#toDoInput');
    let dateElement = document.querySelector('#todo-date');
    let toDoItem = inputElement.value;
    let todoDate = dateElement.value;
    toDoList.push({item: toDoItem, dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
}



function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    containerElement.innerHTML = ''; // Clear the container

    

    for (let i = 0; i < toDoList.length; i++) {
        // Create elements dynamically
        // let item = toDoList[i].item;
        // let dueDate = toDoList[i].dueDate;

        //object destructuring
        let{item, dueDate}= toDoList[i];
       // let divElement = document.createElement('div');
        let spanElement = document.createElement('span');
        let dateElement = document.createElement('span');
        let buttonElement = document.createElement('button');

        // Set the content and attributes
        spanElement.textContent = item;
        dateElement.textContent = dueDate;
        buttonElement.textContent = 'Delete';
        buttonElement.classList.add('delete-button');
        buttonElement.onclick = function() {
            toDoList.splice(i, 1);
            displayItems();
        };

        // Append elements to the container
        containerElement.appendChild(spanElement);
        containerElement.appendChild(dateElement);
        containerElement.appendChild(buttonElement);
        // containerElement.appendChild(divElement);
        
    }

}


