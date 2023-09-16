import './App.css';
import Task from './react-components/Task';
import taskListStore, { newTaskStore } from './store';

function App() {
  let tasks = taskListStore.map((taskInfo) =>
    <Task text={taskInfo.text} id={taskInfo.id} status={taskInfo.status} />
  );


  function newTaskButtonClick(e) {
    let input = e.target.parentNode.querySelector('input');
    if (input.value != '' && input.value != ' ') {
      newTaskStore(input.value);
      input.value = '';
    };
  };

  function inputEnterText(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (e.target.value != '' && e.target.value != ' ') {
        newTaskStore(e.target.value);
        e.target.value = '';
      };
    };
  };



  return (
    <div className="App">
      <h1>Список задач</h1>
      <div className='App__control-center'>
        <input type="text" onKeyDown={inputEnterText} />
        <button onClick={newTaskButtonClick}><i className='fa-solid fa-plus fa-fade'></i></button>
      </div>
      <div className='App__task-list'>
        {tasks}
      </div>
    </div>
  );
};


export default App;
