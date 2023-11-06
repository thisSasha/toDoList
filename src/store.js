import { mainRender } from ".";

let taskListStore = [

];




function localSave() {
    localStorage.setItem('localTaskList', JSON.stringify(taskListStore));
    localStorage.setItem('localTheme', selectedThemeStore);
};




export let renamedTaskText = 'SUI';
export let wrapperStatus = 'hide';

export function changeWrapperStatus(id = 528) {
    if(wrapperStatus == 'hide'){
        wrapperStatus = 'visible';
        renamedTaskText = taskListStore[id].text;
    } else {
        wrapperStatus = 'hide';
    };

    mainRender()
};




export let selectedThemeStore = '_blueBlack';
export let selectedGroup = 'All';

export function selectedThemeSet(theme) {
    selectedThemeStore = theme;
    localSave();
    mainRender();
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

export function renameTask(id, changedText) {
    taskListStore[id].text = changedText;
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



if (localStorage.getItem('localTaskList')) {
    taskListStore = JSON.parse(localStorage.getItem('localTaskList'));
};
if (localStorage.getItem('localTheme')) {
    selectedThemeStore = localStorage.getItem('localTheme');
};

export default taskListStore;