import React from 'react';
import './index.css';

export default function EditorControls() {
  return (
    <div id="wd-assignment-controls" className="text-nowrap">
      <button
        id="wd-add-assignment-btn"
        className="btn btn-lg btn-danger me-1 float-end"
      >
        Save
      </button>
      <div className="d-inline me-1 float-end">
        <button
          id="wd-view-progress"
          className="btn btn-lg btn-secondary"
          type="button"
        >
          Cancel
        </button>
      </div>
      <br />
      <br />
    </div>
  );
}
