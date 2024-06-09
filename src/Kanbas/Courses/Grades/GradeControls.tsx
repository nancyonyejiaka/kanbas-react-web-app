import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TbFileImport } from 'react-icons/tb';
import { TbFileExport } from 'react-icons/tb';
import { IoMdSettings } from 'react-icons/io';

export default function GradeControls() {
  const { pathname } = useLocation();
  const course = pathname.split('/')[3];
  return (
    <div id="wd-assignment-controls" className="text-nowrap">
      <div className="d-inline me-1 float-end">
        <button
          id="wd-view-progress"
          className="btn btn-lg btn-secondary"
          type="button"
        >
          <IoMdSettings />
        </button>
      </div>
      <div className="dropdown d-inline me-1 float-end">
        <button
          id="wd-export-btn"
          className="btn btn-lg btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          <TbFileExport className="me-2" />
          Export
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link
              id="wd-export-all-btn"
              key={`/Kanbas/Courses/${course}`}
              to={`/Kanbas/Courses/${course}/Grades`}
              className="dropdown-item"
            >
              Export All
            </Link>
          </li>
        </ul>
      </div>
      <div className="d-inline me-1 float-end">
        <button
          id="wd-import-grades"
          className="btn btn-lg btn-secondary"
          type="button"
        >
          <TbFileImport className="me-2" />
          Import
        </button>
      </div>
    </div>
  );
}
