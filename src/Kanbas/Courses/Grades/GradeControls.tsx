import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { TbFileImport } from 'react-icons/tb';
import { TbFileExport } from 'react-icons/tb';
import { IoMdSettings } from 'react-icons/io';

export default function GradeControls() {
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
            <a
              id="wd-export-all-btn"
              className="dropdown-item"
              href="#/Kanbas/Courses/1234/Grades" /* TODO: update with actual link */
            >
              Export All
            </a>
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
      {/* <div className="position-relative flex-grow-1 me-5 float-end ">
        <input
          type="text"
          className="form-control form-control-lg"
          id="wd-assignments-search"
          placeholder="Search..."
          style={{ paddingLeft: '2.5rem' }}
        />
        <CiSearch
          className="position-absolute "
          style={{
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            color: 'gray',
            fontSize: '1.5rem',
          }}
        />
      </div> */}
    </div>
  );
}
