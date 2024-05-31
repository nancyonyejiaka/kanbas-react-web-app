import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { CiSearch } from 'react-icons/ci';
import './index.css';

export default function AssignmentsControls() {
  return (
    <div id="wd-assignment-controls" className="text-nowrap">
      <button
        id="wd-add-assignment-btn"
        className="btn btn-lg btn-danger me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: '1px' }} />
        Assignment
      </button>
      <div className="d-inline me-1 float-end">
        <button
          id="wd-view-progress"
          className="btn btn-lg btn-secondary"
          type="button"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: '1px' }}
          />
          Group
        </button>
      </div>
      <div className="position-relative flex-grow-1 me-5 float-end ">
        <input
          type="text"
          className="form-control form-control-lg"
          id="wd-assignments-search"
          placeholder="Search..."
        />
        <CiSearch
          className="position-absolute"
          style={{
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            color: 'gray',
            fontSize: '1.5rem',
          }}
        />
      </div>
    </div>
  );
}
