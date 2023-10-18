import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div>
      <div className="float-end">
        <i className="fas fa-check-circle" style={{ color: 'green', marginRight: '5px' }}></i>
        <span>Published</span>
        <button className="btn btn-light btn-sm ms-2">
            <i className="fa fa-ellipsis-v" style={{ color: 'black' }}></i>
        </button>
    </div>

    {/* Add a clear fix after the floated content */}
    <div style={{ clear: 'both' }}></div>

    <hr />
      <div>
        <h6>Assignment Name</h6>
        <input value={assignment.title}
          className="form-control mb-2" />
        <hr />
        <div className="float-end">
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-light me-2">
            Cancel
          </Link>
          <button onClick={handleSave} className="btn btn-danger">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}


export default AssignmentEditor;

