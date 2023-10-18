import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);

  return (
    <div>
        <div className="container mt-2">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <input type="text" className="form-control w-25" placeholder="Search for Assignment" />
                <div>
                    <button className="btn btn-light me-2">+Group</button>
                    <button className="btn btn-danger">+Assignment</button>
                    <button className="btn btn-light btn-sm ms-2">
                        <i className="fa fa-ellipsis-v" style={{ color: 'black' }}></i>
                    </button>
                </div>
            </div>
            <div className="list-group">
                <div className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
                    <span>
                        <i className="fas fa-grip-vertical mr-2" style={{paddingRight: '10px'}}></i> 
                        <i className="fas fa-caret-down mr-2" style={{paddingRight: '6px'}}></i>
                        ASSIGNMENTS
                    </span>
                    <div className="d-flex align-items-center">
                        <button type="button" class="btn btn-light rounded-pill">40% of Total</button>
                        <i className="fas fa-plus mr-3" style={{ paddingRight: '10px' }}></i>
                        <i className="fas fa-ellipsis-v" style={{ color: 'black', paddingTop: '7px'}}></i>
                    </div>
                </div>
                
                <div className="list-group">
                    {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item green-border-left d-flex align-items-center"
                    >
                        <div className="d-flex align-items-center mr-2">
                            <i className="fas fa-grip-vertical mr-2" style={{ paddingRight: '18px' }}></i>
                            <i className="fas fa-edit" style={{ color: 'green', marginRight: '22px' }}></i>
                        </div>
                        
                        <div className="flex-grow-1">
                            <h5>{assignment.title}</h5>
                            <p>
                                <span className="text-danger">Multiple Modules </span>
                                <span className="line">| </span>
                                <span className="text-muted"> Due</span> 
                                <span className="text-secondary">{assignment.dueDate} Oct 16 at 11:59pm </span> 
                                <span className="text-muted">|</span>
                                <span className="text-secondary"> {assignment.points} 100pts</span>
                            </p>
                        </div>

                        <div className="d-flex align-items-center">
                            <i className="fas fa-check-circle" style={{ color: 'green', marginRight: '16px' }}></i>
                            <i className="fas fa-ellipsis-v" style={{color:'black',marginTop: "26px"}}></i>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
</div>

  );
}
export default Assignments;

