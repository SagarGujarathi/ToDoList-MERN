import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBars, faLayerGroup, faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import Taskitem from './components/Taskitem'
const tasks = [
    {
        taskName: 'Complete this project ASAP!',
        taskTags: ['code', 'project'],
        taskHours: '3:15',
        taskAssignName: 'Sagar Gujarathi',
        taskDueDate: 'Dont know',
        isCompleted: false,
        isToDo: false
    },
    {
        taskName: 'Start new project soon!',
        taskTags: ['code', 'project'],
        taskHours: '-',
        taskAssignName: 'Sagar Gujarathi',
        taskDueDate: '17/4/2023',
        isCompleted: false,
        isToDo: true
    },
    {
        taskName: 'Learn new tech!',
        taskTags: ['tech', 'learn'],
        taskHours: '-',
        taskAssignName: 'Sagar Gujarathi',
        taskDueDate: 'Dont know',
        isCompleted: false,
        isToDo: true
    },
    {
        taskName: 'Post the project progress in linkedin',
        taskTags: ['post', 'project'],
        taskHours: '1:00',
        taskAssignName: 'Sagar Gujarathi',
        taskDueDate: 'Today',
        isCompleted: false,
        isToDo: true
    }
]
function App() {
    return (
        <>
            <div className="main-layout">
                <div className="right-container">
                    <div className="search-bar">
                        <input type="text" placeholder='Search' className='input-bar' />
                        <div className="search-right-container">
                            <FontAwesomeIcon icon={faBell} style={{ color: "#ffffff" }} />
                            <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} />
                        </div>
                    </div>
                    <div className="design-bar">
                        <div className="toggle-view">
                            <div className="toggle-dash">
                                <FontAwesomeIcon icon={faBars} style={{ color: "#FFFFFF", }} />
                            </div>
                            <div className="toggle-box">
                                <FontAwesomeIcon icon={faLayerGroup} style={{ color: "#ffffff", }} />
                            </div>
                        </div>
                        <div className="add-task">
                            <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff", }} />
                        </div>
                    </div>
                    <div className="primary-task-container">
                        <div className="secondary-task-container">
                            <Taskitem taskName={'# Task name'} taskTags={'Task Tags'} taskHours={'Hours'} taskAssignName={'Task Assign name'} taskDueDate={'Due Date'} style={{ fontWeight: '600' }} />
                        </div>
                        <div className="secondary-task-container">
                            <Taskitem taskName={'To Do'} style={{ fontWeight: '600' }} />
                            {
                                tasks.filter(task => { return task.isToDo }).map(task => {
                                    return (
                                        <Taskitem taskName={task.taskName} taskTags={task.taskTags} taskHours={task.taskHours} taskAssignName={task.taskAssignName} taskDueDate={task.taskDueDate} isTask={true} isCompleted={task.isCompleted} />
                                    )
                                })
                            }
                        </div>
                        <div className="secondary-task-container">
                            <Taskitem taskName={'In Progress'} style={{ fontWeight: '600' }} />
                            {
                                tasks.filter(task => { return !task.isToDo }).map(task => {
                                    return (
                                        <Taskitem taskName={task.taskName} taskTags={task.taskTags} taskHours={task.taskHours} taskAssignName={task.taskAssignName} taskDueDate={task.taskDueDate} isTask={true} isCompleted={task.isCompleted} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App