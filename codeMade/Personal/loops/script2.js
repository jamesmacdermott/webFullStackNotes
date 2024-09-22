function displayTasks(){
    Items.forEach(item => {
        item.innerHTML = "";
    });
    currentTasks.forEach((task,index) => {
        task.forEach((detail,index2) => {
            let created = document.createElement('div');
            created.classList.add(detailList[index2]);
            created.innerText = detail;
            Items[index2].appendChild(created);
        });
        let deleteSec = document.createElement('div');
        deleteSec.classList.add('deleteItem');
        let newDeleteButton = document.createElement('button');
        newDeleteButton.classList.add('deleteButton');
        newDeleteButton.innerText = '-';
        newDeleteButton.addEventListener('click',function(){
            currentTasks.splice(index,1);
            displayTasks()
        });

        deleteSec.appendChild(newDeleteButton);
        Items[4].appendChild(deleteSec);  

    });
}

const Entries = [document.getElementById('js-nameEntry'),document.getElementById('js-dateEntry'),document.getElementById('js-timeEntry'),document.getElementById('js-descEntry')]

const currentTasks = [];
const detailList = ['textItem','dateItem','timeItem','descItem'];

const Items = [document.getElementById('textItems'),document.getElementById('dateItems'),document.getElementById('timeItems'),document.getElementById('descItems'),document.getElementById('deleteItems')]

let addButton = document.querySelector('.js-addButton');
let nameValue; let dateValue; let timeValue; let descValue;

addButton.addEventListener('click',function(){
    const vals = []
    Entries.forEach(entry => {
        vals.push(entry.value)
        entry.value = '';
    });
    if (vals.every(value => value !== null)){
        currentTasks.push(vals);
        displayTasks();
    }
});

