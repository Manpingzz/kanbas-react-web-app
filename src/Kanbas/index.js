import { React, useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import db from "./Database";
import store from "./store";
import { Provider } from "react-redux";
import AssignmentEditor from "./Courses/Assignments/AssignmentEditor";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);

  // const URL = "http://localhost:4000/api/courses";
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;

  const findAllCourses = async () => {
    try {
      const response = await axios.get(URL);
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  // add a new course
  const addNewCourse = async () => {
    try {
      const response = await axios.post(URL, course);
      const newCourse = await response.data;
      setCourses([...courses, newCourse]);
      setCourse({
        name: "",
        number: "",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
      });
    } catch (e) {
      console.log("Error in adding a new course", e);
    }
  };

  // delete a course
  const deleteCourse = async (courseId) => {
    const response = await axios.delete(`${URL}/${courseId}`);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  // update a course
  const updateCourse = async (course) => {
    const response = await axios.put(`${URL}/${course._id}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="d-flex flex-row">
        <KanbasNavigation />
        <div className="d-flex-grow-1">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
            <Route
              path="Courses/:courseId/AssignmentEditor"
              element={<AssignmentEditor />}
            />

            <Route path="Calendar" element={<h1>Calendar</h1>} />
            <Route path="Inbox" element={<h1>Inbox</h1>} />
            <Route path="History" element={<h1>History</h1>} />
            <Route path="Studio" element={<h1>Studio</h1>} />
            <Route path="Commons" element={<h1>Commons</h1>} />
            <Route path="Help" element={<h1>Help</h1>} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
