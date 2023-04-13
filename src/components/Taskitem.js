import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCaretDown, faTrash, faPenToSquare, faClock, faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons'
import '../css/Taskitem.css'
function Taskitem(props) {
    const primary = { color: '#909395' }
    const secondary = { color: '#60B058' }
    const [status, setStatus] = useState(props.isCompleted)
    const [rotation, setRotation] = useState({ rotate: '-90deg' })
    const Colors = [{ backgroundColor: 'rgba(95, 175, 88, 0.1)', color: '#5FAF58' }, { backgroundColor: 'rgba(246, 182, 44 , 0.1)', color: '#F6B62C' }, { backgroundColor: 'rgba(247, 65, 60, 0.1)', color: '#F7413C' }, { backgroundColor: 'rgba(207, 226, 255,0.1)', color: '#CFE2FF' }, { backgroundColor: 'rgba(209, 231, 221, 0.1)', color: '#D1E7DD' }]
    return (
        <div className="task-item" style={props.style}>
            <div className="task-name">

                {
                    (props.isTask) ? <>
                        <FontAwesomeIcon className="clickable" icon={faCaretDown} style={rotation} onClick={() => {
                            if (rotation.rotate == '-90deg') {
                                setRotation({ rotate: '0deg' })
                            }
                            else {
                                setRotation({ rotate: '-90deg' })
                            }
                        }} />
                        <FontAwesomeIcon className='clickable' icon={faCircleCheck} style={status ? secondary : primary} onClick={() => {
                            if (status) {
                                setStatus(false)
                            }
                            else {
                                setStatus(true)
                            }
                        }} />
                    </> : ''
                }
                <span style={{ textDecoration: (status) ? 'line-through' : '' }}>{props.taskName}</span>
            </div>
            <div className="task-tags">
                {
                    (typeof (props.taskTags) == 'object') ?
                        props.taskTags.map((tag, i) => {
                            return (
                                <div className="tag-container" style={Colors[i]}>
                                    {tag}
                                </div>
                            )
                        })
                        : props.taskTags
                }

            </div>
            <div className="task-hours">{props.taskHours}</div>
            <div className="task-assign-name">{props.taskAssignName}</div>
            <div className="task-due-date">{props.taskDueDate}</div>
            {
                <div className={`view-full-detail ${(rotation.rotate == '0deg' ? 'active' : '')}`}>
                    <div className='tag-container' style={{ fontWeight: '600' }}>{props.taskName}</div>
                    <div className='view-full-detail-time'>
                        <div className="tag-container" style={Colors[2]}>
                            <FontAwesomeIcon icon={faClock} />
                            {props.taskHours}</div>
                        <div className='tag-container' style={Colors[3]}>
                            <FontAwesomeIcon icon={faCalendarDays} />
                            {props.taskDueDate}</div>
                    </div>
                    <div className='tag-container' style={Colors[4]}>
                        <FontAwesomeIcon icon={faUser} />
                        {props.taskAssignName}</div>
                    <div className="view-full-detail-footer">
                        <div className='view-full-detail-tag-container'>
                            {(typeof (props.taskTags) == 'object') ?
                                props.taskTags.map((tag, i) => {
                                    if (i == Colors.length) {
                                        i = i - Colors.length
                                    }
                                    return (
                                        <div className="tag-container" style={Colors[i]}>{tag}</div>
                                    )
                                })
                                : ''}
                        </div>
                        <div className='view-full-detail-edit'>
                            <FontAwesomeIcon icon={faTrash} className='clickable' />
                            <FontAwesomeIcon icon={faPenToSquare} className='clickable' />
                        </div>
                    </div>
                </div>
            }
        </div >
    )
}

export default Taskitem