
let toDoValues = ['clean dishes','wash clothes','food'];

const addButton = document.getElementById('js-toDoEntryButton');
let entryValue = document.getElementById('js-toDoEntry')
let toDoList = document.getElementById('js-toDoList')
const deleteButton = document.getElementById('js-toDoDeleteButton');
let deleteMode = false;

addButton.addEventListener('click',function(){
    let text = entryValue.value;
    if (text){
        toDoValues.push(text);
        entryValue.value = '';
        displayAll();
    }

});
deleteButton.addEventListener('click',function(){
    deleteMode = !deleteMode;
    if (deleteMode){
        deleteButton.innerText = 'Stop';
    }
    else{
        deleteButton.innerText = 'Delete'
    }
    displayAll();
});

function displayAll(){
    toDoList.innerHTML = ''; // Clear the list before displaying
    toDoValues.forEach((task,index) => {
        let taskItem = document.createElement('li');
        taskItem.classList.add('taskItem');
        let taskText = document.createElement('span');
        taskText.innerHTML = task;
        taskItem.appendChild(taskText);
        if (deleteMode){
            let deleteItem = document.createElement('button');
            deleteItem.innerText = 'X';
            
            deleteItem.addEventListener('click',function(){
                toDoValues.splice(index,1);
                displayAll()
            });
            taskItem.appendChild(deleteItem)
        }
        toDoList.appendChild(taskItem);
    });
};

displayAll();
