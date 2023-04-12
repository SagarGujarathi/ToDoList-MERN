import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
function Taskitem(props) {
    const [status, setStatus] = useState(false)
    return (
        <div className="task-item" style={props.style}>
            <div className="task-name">
                <span className="check">
                    {
                        (props.check == true) ? null : (status == true) ? <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#5ead56", }} onClick={() => { setStatus(!status) }} /> : <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#959799" }} onClick={() => { setStatus(!status) }} />
                    }
                </span>
                {props.taskName}</div>
            <div className="task-tags">{props.taskTags}</div>
            <div className="hours">{props.hours}</div>
            <div className="task-assign-name">{props.taskAssignName}</div>
            <div className="due-date">{props.dueDate}</div>
        </div>
    )
}

export default Taskitem