function Task(props) {
    
    return (
    <div className={'task-item ' + props.status} id={props.id}>
        <button className='check'><i className='fa-solid fa-check'></i></button>
        <p>{props.text}</p>
        <button className='close'><i className='fa-solid fa-close'></i></button>
    </div>
    );
}

export default Task;