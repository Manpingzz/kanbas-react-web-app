import db from "../../Kanbas/Database";
import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useParams, Link, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import "./CourseNavigation/index.css";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import axios from "axios";


function Courses() {
    const { courseId } = useParams();
    const [course, setCourse] = useState({});
    // const findCourseById = async (courseId) => {
    //     const response = await axios.get(
    //         `${URL}/${courseId}`
    //     );
    //     setCourse(response.data);
    // };

    const findCourseById = async (courseId) => {
        try {
            const response = await axios.get(`${URL}/${courseId}`);
            setCourse(response.data);
        } catch (error) {
            console.error("Error fetching course:", error);
        }
    };
    

    useEffect(() => {
        findCourseById(courseId);
      }, [courseId]);

    const { pathname } = useLocation();
    const [empty, kanbas, pathCourses, id, screen] = pathname.split("/");
    // const course = courses.find((course) => course._id === courseId);

   
    

    return (
        <div className="row">
            <div className="container-fluid">
                <nav aria-label="breadcrumb" style={{ background: 'none', padding: 0, marginLeft: '20px' }}>
                    <ol className="breadcrumb d-flex justify-content-between align-items-center"
                        style={{ background: 'none', listStyleType: 'none' }}>
                        <div className="d-flex align-items-center">
                            <i className="fas fa-bars" id="kanbasNavIcon" style={{ color: 'red' }}></i>&nbsp;&nbsp;
                            <li className="breadcrumb-item" style={{ padding: 0 }}>
                                <Link to={`/some/path/${courseId}`} style={{ color: 'red', textDecoration: 'none' }}>
                                    {`${course.number} ${courseId}`}
                                </Link>
                            </li>
                            <li style={{ padding: '0 10px' }}>
                                <i className="fas fa-chevron-right" id="toggleSidebar"></i>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page" style={{ padding: 0 }}>{screen}
                            </li>
                        </div>
                        <div>
                            <button className="btn btn-light">
                                <i className="fa-solid fa-glasses"></i>Student View
                            </button>
                        </div>
                    </ol>
                </nav>

                <hr />
            </div>

            <div className="col-md-2">

                <small style={{ marginLeft: '22px' }}> {course.number} {course.name} </small>
                <CourseNavigation />
            </div>

            {/* Second Column */}
            <div className="col-md-9">
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} style={{ textDecoration: 'none' }}>
                    {course.number} {course.name}
                </Link>

                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route
                        path="Assignments/:assignmentId"
                        element={<AssignmentEditor />}
                    />

                    <Route path="Grades" element={<Grades />} />
                </Routes>
            </div>

        </div>
    );
}
export default Courses;