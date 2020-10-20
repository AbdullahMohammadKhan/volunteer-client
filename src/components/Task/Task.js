import React from 'react'
import { useHistory } from 'react-router-dom';

const Task = ({task}) => {
    const history = useHistory()
    const handleBook = (taskType) => {
        history.push(`/book/${taskType}`);
    }
    return (
        <div className="col-md-3" onClick={() => handleBook(task.taskType)}>
            <img src={task.img} style={{height: '300px'}} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
    <h3>{task.name}</h3>
        </div>
    )
}

export default Task
