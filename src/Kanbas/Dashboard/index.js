import { React, useState } from "react";
import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";
import KanbasNavigation from "../KanbasNavigation";

function getClassForCourse(index) {
  return index % 2 === 0 ? "course-gray" : "course-blue";
}


function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
) {

  return (

    <div className="container mt-4">
      <h2>Dashboard</h2>

      <div className="row">
        <div className="col-md-6">
          <h5>Course</h5>

          <div className="mb-2">
            <input type="text" className="form-control" placeholder="Course Name"
              value={course.name}
              onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          </div>

          <div className="mb-2">
            <input type="text" className="form-control" placeholder="Course Number"
              value={course.number}
              onChange={(e) => setCourse({ ...course, number: e.target.value })} />
          </div>

          <div className="mb-2">
            <input type="date" className="form-control"
              value={course.startDate}
              onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
          </div>

          <div className="mb-2">
            <input type="date" className="form-control"
              value={course.endDate}
              onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
          </div>

          <button className="btn btn-warning" style={{ marginTop: "6px", marginRight: "8px" }} onClick={addNewCourse}>
            Add
          </button>
          <button className="btn btn-info" style={{ marginTop: "6px" }} onClick={() => updateCourse(course)}>
            Update
          </button>
        </div>
      </div>

      <hr />
      <div className="container">
        <h4>Published Courses ({courses.length})</h4>
        <hr />
        <div className="d-flex flex-row flex-wrap">
          {courses.map((course, index) => (
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} 
              className="course-card">
              <button className="btn btn-success" style={{ marginRight: "8px" }}
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}>
                Edit
              </button>

              <button className="btn btn-danger"
                onClick={(event) => { event.preventDefault(); deleteCourse(course._id); }}>
                Delete
              </button>

              <div className={`course-card-top ${getClassForCourse(index)}`}>
                <i className="fas fa-ellipsis-v"></i>
              </div>
              <div className="card-body">
                {course.number} {course.name} <br />
                <span style={{ color: "#b0b5b9" }}>
                  {course._id} Fall 2023 Semester Full Term
                </span>
                <i className="fas fa-pen-square text-muted card-icon"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

}

export default Dashboard;