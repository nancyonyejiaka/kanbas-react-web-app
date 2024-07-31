import './index.css';
import { Link, useLocation, useParams } from 'react-router-dom';

export default function CoursesNavigation() {
  const { number } = useParams();
  const { pathname } = useLocation();

  const links = [
    { label: 'Home', path: `/Kanbas/Courses/${number}/Home` },
    { label: 'Modules', path: `/Kanbas/Courses/${number}/Modules` },
    { label: 'Piazza', path: `/Kanbas/Courses/${number}/Piazza` },
    { label: 'Zoom', path: `/Kanbas/Courses/${number}/Zoom` },
    { label: 'Assignments', path: `/Kanbas/Courses/${number}/Assignments` },
    { label: 'Quizzes', path: `/Kanbas/Courses/${number}/Quizzes` },
    { label: 'Grades', path: `/Kanbas/Courses/${number}/Grades` },
    { label: 'People', path: `/Kanbas/Courses/${number}/People` },
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
