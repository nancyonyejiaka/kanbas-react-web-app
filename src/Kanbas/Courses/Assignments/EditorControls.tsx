import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as db from '../../Database';
import './index.css';

export default function EditorControls() {
  const { pathname } = useLocation();
  const courseId = pathname.split('/')[3];
  const courses = db.courses;
  const course = courses.find((course) => course._id === courseId);
  console.log(`PATHNAME: ${JSON.stringify(pathname)}`);
  console.log(`COURSE ID: ${JSON.stringify(course)}`);
  return (
    <div id="wd-assignment-controls" className="text-nowrap">
      <Link
        id="wd-assignment-save-btn"
        key={`/Kanbas/Courses/${course?._id}`}
        to={`/Kanbas/Courses/${course?._id}/Assignments`}
        className="btn btn-lg btn-danger me-1 float-end"
      >
        Save
      </Link>
      <div className="d-inline me-1 float-end">
        <Link
          id="wd-assignment-cancel-btn"
          key={`/Kanbas/Courses/${course?._id}`}
          to={`/Kanbas/Courses/${course?._id}/Assignments`}
          className="btn btn-lg btn-secondary"
        >
          Cancel
        </Link>
      </div>
      <br />
      <br />
    </div>
  );
}
