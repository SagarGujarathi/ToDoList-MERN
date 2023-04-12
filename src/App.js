import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBars, faLayerGroup, faBell, faUser, faChartLine } from '@fortawesome/free-solid-svg-icons'
import Taskitem from './components/Taskitem'

function App() {
    return (
        <>
            {/* <div className="left-container">
                <span> <FontAwesomeIcon icon={faChartLine} />  &nbsp; DASHBOARD</span>
                <span> <FontAwesomeIcon icon={faChartLine} />  &nbsp; DASHBOARD</span>
                <span> <FontAwesomeIcon icon={faChartLine} />  &nbsp; DASHBOARD</span>
                <span> <FontAwesomeIcon icon={faChartLine} />  &nbsp; DASHBOARD</span>
                <span> <FontAwesomeIcon icon={faChartLine} />  &nbsp; DASHBOARD</span>
                <span> <FontAwesomeIcon icon={faChartLine} />  &nbsp; DASHBOARD</span>
                <span> <FontAwesomeIcon icon={faChartLine} />  &nbsp; DASHBOARD</span>

            </div> */}
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
                    <table className="task-table">
                        <Taskitem taskName={'#  Task name'} taskTags={'Task Tags'} taskHours={'Hours'} taskAssignName={'Task Assign name'} taskDueDate={'Due Date'} style={{ fontWeight: '600', borderRadius: '5px' }} />
                        <tr className="empty"><td></td></tr>
                        <Taskitem taskName={'To Do'} style={{ fontWeight: '600', fontSize: '1rem' }} />
                        <Taskitem taskName={'goat'} isTask={true} />
                        <Taskitem taskName={'goat'} isTask={true} />
                        <Taskitem taskName={'goat'} isTask={true} />
                        <tr className="empty"><td></td></tr>
                        <Taskitem taskName={'In Progress'} style={{ fontWeight: '600', fontSize: '1rem' }} />
                        <Taskitem taskName={'goat'} isTask={true} />
                        <Taskitem taskName={'goat'} isTask={true} />
                        <Taskitem taskName={'goat'} isTask={true} />
                    </table>
                </div>
            </div>
            <div className="task-add-popup">
                <div className="search-bar">
                    <input type="text" placeholder='Enter your task here' className='input-bar' />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder='Enter the task tags here' className='input-bar' />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder='Enter the task assign name' className='input-bar' />
                </div>
                <div className="task-date-popup">

                    <div className="search-bar">
                        <label htmlFor="input-hours">Hours : </label>
                        <input type="time" className='input-bar' name='input-hours' />
                    </div>
                    <div className="search-bar">
                        <label htmlFor="input-due-date">Due Date : </label>
                        <input type="date" className='input-bar' name='input-due-date' />
                    </div>
                </div>
                <div className="task-date-popup">

                    <div className="search-bar" style={{ backgroundColor: 'transparent' }}>
                        <label htmlFor="input-due-date">Due Date : </label>
                        <input type="radio" className='input-bar' name='input-due-date' />
                    </div>
                    <div className="search-bar" style={{ backgroundColor: 'transparent' }}>
                        <label htmlFor="input-due-date">In Progress : </label>
                        <input type="radio" className='input-bar' name='input-due-date' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default App