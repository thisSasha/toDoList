import { deleteTask, toogleTaskStatus } from "../store";

function Task(props) {
    function checkButtonClick(e){
        let taskId = e.target.parentNode.id;
        toogleTaskStatus(taskId);
    };
    function closeButtonClick(e){
        let taskId = e.target.parentNode.id;
        deleteTask(taskId);
    };


    return (
    <div className={'task-item ' + props.status} id={props.id}>
        <button className='check' onClick={checkButtonClick}><i className='fa-solid fa-check'></i></button>
        <p>{props.text}</p>
        <button className='close' onClick={closeButtonClick}><i className='fa-solid fa-close'></i></button>
    </div>
    );
};

export default Task;