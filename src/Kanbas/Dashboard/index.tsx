import './index.css';
import { Link } from 'react-router-dom';
import * as db from '../Database';

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1 id="wd-dashboard-title" className="display-3">
        Dashboard
      </h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 rpw-cols-md-5 g-4">
          {courses.map((course) => (
            <div
              key={course._id}
              className="wd-dashboard-course col"
              style={{ width: '300px' }}
            >
              <Link
                key={`${course._id}`}
                to={`/Kanbas/Courses/${course._id}/Home`}
                className="text-decoration-none"
              >
                <div className="card rounded-3 overflow-hidden">
                  <img
                    src={`${course.image}`}
                    height={160}
                    alt="courseImage"
                  />
                  <div className="card-body">
                    <span
                      className="wd-dashboard-course-link"
                      style={{
                        textDecoration: 'none',
                        color: 'navy',
                        fontWeight: 'bold',
                      }}
                    >
                      {course.name}
                    </span>
                    <p
                      className="wd-dashboard-course-title card-text"
                      style={{ maxHeight: 53, overflow: 'hidden' }}
                    >
                      {course.description}
                    </p>
                    <Link
                      key={`${course._id}`}
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      className="btn btn-primary"
                    >
                      Go
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
