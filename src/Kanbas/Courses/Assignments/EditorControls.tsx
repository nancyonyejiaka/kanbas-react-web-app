import React from 'react';
import './index.css';

export default function EditorControls({
  addAssignment,
  cancel,
}: {
  addAssignment: () => void;
  cancel: () => void;
}) {

  return (
    <div id="wd-assignment-controls" className="text-nowrap">
      <button
        id="wd-assignment-save-btn"
        className="btn btn-lg btn-danger me-1 float-end"
        onClick={addAssignment}
      >
        Save
      </button>
      <div className="d-inline me-1 float-end">
        <button
          id="wd-assignment-cancel-btn"
          className="btn btn-lg btn-secondary"
          onClick={cancel}
        >
          Cancel
        </button>
      </div>
      <br />
      <br />
    </div>
  );
}
