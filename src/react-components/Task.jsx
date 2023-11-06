import { renameTaskOpen } from "../App";
import { deleteTask, renamedTaskId, toogleTaskStatus } from "../store";

function Task(props) {
    function checkButtonClick(e){
        let taskId = e.target.parentNode.id;
        toogleTaskStatus(taskId);
    };
    function closeButtonClick(e){
        let taskId = e.target.parentNode.id;
        deleteTask(taskId);
    };
    function renameButtonClick(e){
        let taskId = e.target.parentNode.id;
        renameTaskOpen(taskId);
    }


    return (
    <div className={'task-item ' + props.status} id={props.id}>
        <button className='check' onClick={checkButtonClick}><i className='fa-solid fa-check'></i></button>
        <p><input value={props.text} disabled/></p>
        <button className='rename' onClick={renameButtonClick}><i className='fa-solid fa-pencil'></i></button>
        <button className='close' onClick={closeButtonClick}><i className='fa-solid fa-close'></i></button>
    </div>
    );
};

export default Task;