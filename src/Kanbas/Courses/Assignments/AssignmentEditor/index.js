import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignments,
  selectAssignment,
} from "../assignmentsReducer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import * as client from "../client";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const navigate = useNavigate();

  const allAssignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );

  // const assignment = useSelector(
  //   (state) => state.assignmentsReducer.assignment
  // );
  const dispatch = useDispatch();

  const [assignment, setAssignment] = useState(() => {
    if (assignmentId === "Create") {
      // create new assignment
      return {
        title: "",
        description: "",
        dueDate: "",
        availableFromDate: "",
        availableUntilDate: "",
      };
    } else {
      // edit an assignment
      return allAssignments.find(
        (assignment) => assignment._id === assignmentId
      );
    }
  });

  const handleChange = (field) => (e) => {
    setAssignment((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleAddAssignment = async () => {
    const newAssignment = await client.createAssignment(courseId, assignment);
    dispatch(addAssignment(newAssignment));
  };

  const handleUpdateAssignment = async () => {
    const updatedAssignment = await client.updateAssignment(assignment);
    dispatch(updateAssignment(updatedAssignment));
  };

  const handleSave = async () => {
    if (assignmentId === "Create") {
      console.log("Creating New Assignment");
      await handleAddAssignment(assignment); // 等待添加操作完成
    } else {
      console.log("Updating assignment");
      await handleUpdateAssignment(assignment); // 等待更新操作完成
    }

    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div>
      <div className="float-end">
        <i
          className="fas fa-check-circle"
          style={{ color: "green", marginRight: "5px" }}
        ></i>
        <span>Published</span>
        <button className="btn btn-light btn-sm ms-2">
          <i className="fa fa-ellipsis-v" style={{ color: "black" }}></i>
        </button>
      </div>

      <div style={{ clear: "both" }}></div>

      <hr />
      <div>
        <h6>Assignment Name</h6>
        <input
          value={assignment.title}
          onChange={handleChange("title")}
          placeholder="New Assignment"
          className="form-control mb-2"
        />

        <textarea
          value={assignment.description}
          onChange={handleChange("description")}
          placeholder="New Assignment Description"
          className="form-control mb-2"
          rows="3"
        ></textarea>

        <div className="row">
          <div className="col-4"></div>
          <div className="col-8">
            <div className="mb-2 d-flex align-items-center">
              <label className="me-2">Points</label>
              <input
                type="number"
                value={assignment.points || 100}
                onChange={handleChange("points")}
                className="form-control"
              />
            </div>

            <div className="mb-2 d-flex align-items-center">
              <label className="me-2">Assign</label>
              <div className="border p-3 w-100">
                <div className="row mb-2">
                  <div className="col">
                    <label>Due</label>
                    <div className="date-input-container">
                      <input
                        type="date"
                        value={assignment.dueDate}
                        onChange={handleChange("dueDate")}
                        className="form-control"
                      />
                      <i className="fa fa-calendar"></i>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <label>Available from</label>
                    <div className="date-input-container">
                      <input
                        type="date"
                        value={assignment.availableFromDate}
                        onChange={handleChange("availableFromDate")}
                        className="form-control mb-2"
                      />
                      <i className="fa fa-calendar"></i>
                    </div>
                  </div>

                  <div className="col relative-position">
                    <label>Until</label>
                    <div className="date-input-container">
                      <input
                        type="date"
                        value={assignment.availableUntilDate}
                        onChange={handleChange("availableUntilDate")}
                        className="form-control mb-2"
                      />
                      <i className="fa fa-calendar"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="float-end">
          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-light me-2"
          >
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
