import db from "../Database";  
import { Link } from "react-router-dom";
import "./index.css";
import KanbasNavigation from "../KanbasNavigation";

function getClassForCourse(index) {
  return index % 2 === 0 ? "course-gray" : "course-blue";
}


function Dashboard() {
    const courses = db.courses;
    return (
        <>
        <h2>Dashboard</h2>
        <hr />
        <div className="container">
            <h4>Published Courses ({courses.length})</h4>
            <hr/>
            <div className="d-flex flex-row flex-wrap">
              {courses.map((course, index) => (
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="course-card">
                  <div className={`course-card-top ${getClassForCourse(index)}`}>
                    <i className="fas fa-ellipsis-v"></i>
                  </div>
                  <div className="card-body">
                      {course.number} {course.name} <br />
                      <span style={{color: "#b0b5b9"}}>
                          {course._id} Fall 2023 Semester Full Term
                      </span>
                    <i className="fas fa-pen-square text-muted card-icon"></i>
                  </div>
                </Link>
              ))}
            </div>
          </div>
      </>
    );
  
}

export default Dashboard;
