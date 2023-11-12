import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignments,
} from "./assignmentsReducer";
import * as client from "./client";
import { findAssignmentsForCourse } from "./client";

function Assignments() {
  const { courseId, assignmentId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    findAssignmentsForCourse(courseId).then((assignments) => {
      dispatch(setAssignments(assignments));
    });
  }, [courseId, dispatch]);

  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  const handleDelete = (assignmentId) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };

  return (
    <div>
      <div className="container mt-2">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <input
            type="text"
            className="form-control w-25"
            placeholder="Search for Assignment"
          />
          <div>
            <button className="btn btn-light me-2">+Group</button>
            {/* <Link to={`/Kanbas/Courses/${courseId}/AssignmentEditor`}>
                        <button className="btn btn-danger">+Assignment</button>
                    </Link> */}
            <Link to={`/Kanbas/Courses/${courseId}/Assignments/Create`}>
              <button className="btn btn-danger">+Assignment</button>
            </Link>

            <button className="btn btn-light btn-sm ms-2">
              <i className="fa fa-ellipsis-v" style={{ color: "black" }}></i>
            </button>
          </div>
        </div>
        <div className="list-group">
          <div className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
            <span>
              <i
                className="fas fa-grip-vertical mr-2"
                style={{ paddingRight: "10px" }}
              ></i>
              <i
                className="fas fa-caret-down mr-2"
                style={{ paddingRight: "6px" }}
              ></i>
              ASSIGNMENTS
            </span>
            <div className="d-flex align-items-center">
              <button type="button" className="btn btn-light rounded-pill">
                40% of Total
              </button>
              <i
                className="fas fa-plus mr-3"
                style={{ paddingRight: "10px" }}
              ></i>
              <i
                className="fas fa-ellipsis-v"
                style={{ color: "black", paddingTop: "7px" }}
              ></i>
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
                  <i
                    className="fas fa-grip-vertical mr-2"
                    style={{ paddingRight: "18px" }}
                  ></i>
                  <i
                    className="fas fa-edit"
                    style={{ color: "green", marginRight: "22px" }}
                  ></i>
                </div>

                <div className="flex-grow-1">
                  <h5>{assignment.title}</h5>
                  <p>
                    <span className="text-danger">Multiple Modules </span>
                    <span className="line">| </span>
                    <span className="text-muted">Due</span>
                    <span
                      className="text-secondary"
                      style={{ marginLeft: "6px" }}
                    >
                      {assignment.dueDate}
                    </span>
                    <span className="text-muted" style={{ marginLeft: "6px" }}>
                      |
                    </span>
                    <span
                      className="text-secondary"
                      style={{ marginLeft: "6px" }}
                    >
                      {" "}
                      {assignment.points} pts{" "}
                    </span>
                  </p>
                </div>

                <div className="d-flex align-items-center">
                  <i
                    className="fas fa-check-circle"
                    style={{ color: "green", marginRight: "18px" }}
                  ></i>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(assignment._id);
                    }}
                    className="btn btn-danger"
                    style={{ marginRight: "12px" }}
                  >
                    Delete
                  </button>
                  <i
                    className="fas fa-ellipsis-v"
                    style={{ color: "black", marginTop: "26px" }}
                  ></i>
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
