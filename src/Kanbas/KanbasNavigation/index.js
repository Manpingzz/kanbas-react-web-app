
import { Link, useLocation } from "react-router-dom";
import "./index.css";

function KanbasNavigation() {
    const navLinks = [
        { name: "Account", path: "/Kanbas/Account", icon: "fa-user-circle" },
        { name: "Dashboard", path: "/Kanbas/Dashboard", icon: "fa-tachometer-alt" },
        { name: "Courses", path: "/Kanbas/Courses", icon: "fa-book" },
        { name: "Calendar", path: "/Kanbas/Calendar", icon: "fa-calendar" },
        { name: "Inbox", path: "/Kanbas/Inbox", icon: "fa-inbox" },
        { name: "History", path: "/Kanbas/History", icon: "fa-history" },
        { name: "Studio", path: "/Kanbas/Studio", icon: "fa-desktop" },
        { name: "Commons", path: "/Kanbas/Commons", icon: "fa-sign-out-alt" },
        { name: "Help", path:"/Kanbas/Help", icon:"fa-question-circle"},
    ];

    const { pathname } = useLocation();

    return (
        <div className="wd-kanbas-navigation">
            <img className="image-fluid small" src="./images/neulogo.png" alt="NEU Logo" />
            <ul>
            {navLinks.map((link, index) => (
                <li key={index} className={pathname.includes(link.path) ? "wd-active" : ""}>
                    <Link to={link.path}>
                        <i className={`fa ${link.icon}`} aria-hidden="true"></i>
                        {link.name}
                    </Link>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default KanbasNavigation;
