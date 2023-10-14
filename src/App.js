import './App.css';
import Task from './react-components/Task';
import taskListStore, { newTaskStore, selectedThemeSet, selectedThemeStore } from './store';

function App() {
  let tasks = taskListStore.map((taskInfo) =>
    <Task text={taskInfo.text} id={taskInfo.id} status={taskInfo.status} />
  );

  function themeChange(e) {
    let selectedTheme = e.target.className;
    console.log(selectedTheme);
    selectedThemeSet(selectedTheme);
    e.target.parentNode.classList.toggle('theme_open');
    e.target.parentNode.parentNode.classList.toggle('themeChangeButton_open');
  };


  function showThemes(e) {
    if (e.target.classList.contains('settingsBox__themeChangeButton')) {
      e.target.classList.toggle('theme_open');
    }
  };

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

  function themeChangeButtonClick(e) {
    e.target.parentNode.classList.toggle('themeChangeButton_open');
    e.target.parentNode.querySelector('.settingsBox__themeChangeButton').classList.remove('theme_open');
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
      <div className='App__settingsBox'>
        <button className='settingsBox__button' onClick={themeChangeButtonClick}><i className="fa-solid fa-gear"></i></button>
        <button className='settingsBox__themeChangeButton childButton' onClick={showThemes}>
          <i className="fa-solid fa-palette"></i>
          <button className='_black' onClick={themeChange}></button>
          <button className='_blueBlack' onClick={themeChange}></button>
          <button className='_grey' onClick={themeChange}></button>
          <button className='_purple' onClick={themeChange}></button>
        </button>
      </div>
    </div>
  );
};


export default App;
