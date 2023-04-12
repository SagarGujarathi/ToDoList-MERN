import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBars, faLayerGroup, faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import Taskitem from './components/Taskitem'

function App() {
    return (
        <>
            <div className="main-layout">
                {/* <div className="left-container"></div> */}
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
                    <div className="task-container">
                        <Taskitem taskName={' # Task name'} taskTags={'Task Tags'} hours={'Hours'} taskAssignName={'Task Assign name'} dueDate={'Due date'} style={{ borderRadius: '5px', fontWeight: '600', padding: '1px' }} check={true} />
                        <div className="to-do">
                            <Taskitem taskName={'To Do'} style={{ borderRadius: '5px', fontSize: '1rem', fontWeight: '600' }} check={true} />
                            <Taskitem taskName={'Tasks'} taskTags={'#Challenge'} hours={'1hr'} taskAssignName={'Sagar'} dueDate={'Tomorrow'} />
                        </div>

                        <div className="in-progress">
                            <Taskitem taskName={'In Progress'} style={{ borderRadius: '5px', fontSize: '1rem', fontWeight: '600' }} check={true} />
                            <Taskitem taskName={'Tasks'} taskTags={'#Challenge'} hours={'1hr'} taskAssignName={'Sagar'} dueDate={'Tomorrow'} />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default App