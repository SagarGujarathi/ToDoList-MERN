import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
function Taskitem(props) {
    const primary = { color: '#909395' }
    const secondary = { color: '#60B058' }
    const [status, setStatus] = useState(primary)

    return (
        <tr className="table-item" style={props.style}>
            <td className="task-name">
                <span>
                    {
                        (props.isTask) ? <FontAwesomeIcon className='pointer' icon={faCircleCheck} style={status} onClick={() => {
                            if (primary.color === status.color) {
                                setStatus(secondary)
                            }
                            else {
                                setStatus(primary)
                            }
                        }} /> : ''
                    }
                </span>
                <span>
                    {props.taskName}
                </span>
            </td>
            <td className="task-tags">{props.taskTags}</td>
            <td className="task-hours">{props.taskHours}</td>
            <td className="task-assign-name">{props.taskAssignName}</td>
            <td className="task-due-date">{props.taskDueDate}</td>
        </tr>
    )
}

export default Taskitem