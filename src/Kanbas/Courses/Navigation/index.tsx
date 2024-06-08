import './index.css';
import { Link, useLocation, useParams } from 'react-router-dom';

export default function CoursesNavigation() {
  const { id } = useParams();
  const { pathname } = useLocation();

  const links = [
    { label: 'Home', path: `/Kanbas/Courses/${id}/Home` },
    { label: 'Modules', path: `/Kanbas/Courses/${id}/Modules` },
    { label: 'Piazza', path: `/Kanbas/Courses/${id}/Piazza` },
    { label: 'Zoom', path: `/Kanbas/Courses/${id}/Zoom` },
    { label: 'Assignments', path: `/Kanbas/Courses/${id}/Assignments` },
    { label: 'Quizzes', path: `/Kanbas/Courses/${id}/Quizzes` },
    { label: 'Grades', path: `/Kanbas/Courses/${id}/Grades` },
  ];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`list-group-item border border-0
              ${pathname.includes(link.label) ? 'active' : 'text-danger'}`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
