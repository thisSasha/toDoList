import './App.css';
import Task from './react-components/Task';
import taskListStore from './store';

function App() {
  let tasks = taskListStore.map((taskInfo) =>
    <Task text={taskInfo.text} id={taskInfo.id} status={taskInfo.status}/>
  )
  return (
    <div className="App">
      <h1>Список задач</h1>
      <div className='App__control-center'>
        <input type="text" />
        <button><i className='fa-solid fa-plus fa-fade'></i></button>
      </div>
      <div className='App__task-list'>
        {tasks}
      </div>
    </div>
  );
}

export default App;
