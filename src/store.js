import { mainRender } from ".";
let taskListStore = [

];
if(localStorage.getItem('localTaskList')){
    taskListStore = JSON.parse(localStorage.getItem('localTaskList'));
};

function localSave(){
    localStorage.setItem('localTaskList', JSON.stringify(taskListStore));
};

export function newTaskStore(text) {
    let newTask = {
        text: text,
        id: '',
        status: 'task_work',
    };
    taskListStore.unshift(newTask);
    changeTasksId();
    localSave();
    mainRender();
};

export function toogleTaskStatus(id) {
    let taskStatus = taskListStore[id].status;
    if (taskStatus == 'task_work') {
        taskListStore[id].status = 'task_complete';
    } else {
        taskListStore[id].status = 'task_work';
    };
    localSave();
    mainRender()
};

export function deleteTask(id) {
    taskListStore.splice(id, 1);
    changeTasksId();
    localSave();
    mainRender();
};

function changeTasksId() {
    for (let i = 0; i < taskListStore.length; i++) {
        const el = taskListStore[i];
        el.id = i;
    };
};


export default taskListStore;