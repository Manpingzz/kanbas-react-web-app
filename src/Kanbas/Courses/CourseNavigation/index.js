import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import KanbasNavigation from "../../KanbasNavigation";

function CourseNavigation() {
  const links = [
    "Home", "Modules", "Piazza", "Zoom Meetings", "Assignments",
    "Quizzes", "Grades", "People", "Panopto Video", "Discussions",
    "Announcements", "Pages", "Files", "Rubrics", "Outcomes",
    "Collaborations", "Syllabus", "Settings"
  ];

  const { courseId } = useParams();
  const { pathname } = useLocation();

  return (
    <div class="row">
      <div class="col-md-2">
        <div className="wd-course-navigation d-none d-md-block">
          {links.map((link, index) => (
            <Link
              key={index}
              to={`/Kanbas/Courses/${courseId}/${link}`}
              className={`wd-course-navigation-item ${pathname.includes(link) ? "active" : ""}`}
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseNavigation;
