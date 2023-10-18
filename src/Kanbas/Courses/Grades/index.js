import db from "../../Database";
import { useParams } from "react-router-dom";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
        <div className="mb-3 d-flex justify-content-between align-items-center">
        <h5 style={{ color: 'red' }}>Gradebook</h5>
            <div className="d-flex">
                <button className="btn btn-light mr-2">
                    <i className="fas fa-file-import"></i> Import
                </button>
                <button type="button" className="btn btn-light dropdown-toggle mr-2" data-toggle="dropdown">
                    <i className="fas fa-file-export"></i> Export
                </button>
                <button className="btn btn-light">
                    <i className="fas fa-cog" style={{ color: 'black' }}></i>
                </button>
            </div>
        </div>

        <div className="row">
            <div className="col-sm">
                <label htmlFor="student-name" className="label-name align-content-center">
                    Student Names
                </label>
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="fa fa-search"></i>
                    </span>
                    <input type="text" className="form-control" id="student-name" placeholder="Search Students" />
                    <span className="input-group-text">
                        <i className="fa fa-chevron-down"></i>
                    </span>
                </div><br/>
                <button className="btn btn-light"><i class="fas fa-filter"></i> Apply Filters</button>
            </div>
            <div className="col-sm">
                <label htmlFor="assignment-name" className="label-name align-content-center">
                    Assignment Name
                </label>
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="fa fa-search"></i>
                    </span>
                    <input type="text" className="form-control" id="assignment-name" placeholder="Search Assignments" />
                    <span className="input-group-text">
                        <i className="fa fa-chevron-down"></i>
                    </span>
                </div>
            </div>
        </div>

        
        <div className="table-responsive mt-4">
            <table className="table table-bordered table-striped">
                <thead className="table-light">
                    <tr>
                    <th>Student Name</th>
                        {assignments.map((assignment) => (<th key={assignment._id}>{assignment.title}</th>))}
                    </tr>
                  
                </thead>

                <tbody>
                    {enrollments.map((enrollment) => {
                    const user = db.users.find((user) => user._id === enrollment.user);
                    return (
                        <tr>
                        <td style={{ color: 'red' }}>{user.firstName} {user.lastName}</td>
                        {assignments.map((assignment) => {
                            const grade = db.grades.find(
                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                            return (<td>{grade?.grade || ""}</td>);})}
                        </tr>);
                    })}
                </tbody>
            </table>
        </div>
    </div>
    );
}
export default Grades;

