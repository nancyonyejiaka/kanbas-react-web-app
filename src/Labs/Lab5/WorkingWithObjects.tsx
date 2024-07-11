import React, { useState } from 'react';
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: 'NodeJS Assignment',
    description: 'Create a NodeJS server with ExpressJS',
    due: '2021-10-10',
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: 1,
    name: 'Introduction to NodeJS',
    description: 'Basic introduction to the NodeJS framework',
    course: 'RS101',
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>

      <div className="mt-3">
        <h5>Modifying Assignment</h5>
        <a
          id="wd-update-assignment-title"
          className="btn btn-primary float-end"
          href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
        >
          Update Title
        </a>
        <input
          className="form-control w-75"
          id="wd-assignment-title"
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
      </div>
      <div className="mt-3">
        <a
          id="wd-update-module-description"
          className="btn btn-primary float-end"
          href={`${ASSIGNMENT_API_URL}/description/${assignment.description}`}
        >
          Update Assignment Description
        </a>
        <input
          className="form-control w-75"
          id="wd-assignment-description"
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
        />
      </div>
      <div className="mt-3">
        <a
          id="wd-update-assignment-score"
          className="btn btn-primary float-end"
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
        >
          Update Score
        </a>
        <input
          type="number"
          className="form-control w-75 mt-2"
          id="wd-assignment-score"
          value={assignment.score}
          onChange={(e) =>
            setAssignment({ ...assignment, score: Number(e.target.value) })
          }
        />
      </div>
      <div className="mt-3">
        <input
          type="checkbox"
          className="form-check-input mt-2"
          id="wd-assignment-completed"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        <label className="form-check-label" htmlFor="wd-assignment-completed">
          Completed?
        </label>
        <a
          id="wd-update-assignment-completed"
          className="btn btn-primary float-end"
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
        >
          Update Completed
        </a>
      </div>

      <div className="mt-3">
        <h5>Modifying Module</h5>
        <a
          id="wd-update-module-name"
          className="btn btn-info float-end"
          href={`${MODULE_API_URL}/name/${module.name}`}
        >
          Update Name
        </a>
        <input
          className="form-control w-75"
          id="wd-module-name"
          value={module.name}
          onChange={(e) => setModule({ ...module, name: e.target.value })}
        />
      </div>
      <div className="mt-3">
        <a
          id="wd-update-module-description"
          className="btn btn-info float-end"
          href={`${MODULE_API_URL}/description/${module.description}`}
        >
          Update Module Description
        </a>
        <input
          className="form-control w-75"
          id="wd-module-description"
          value={module.description}
          onChange={(e) =>
            setModule({ ...module, description: e.target.value })
          }
        />
      </div>

      <hr />

      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary me-2"
        href={`${REMOTE_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <a
        id="wd-retrieve-modules"
        className="btn btn-info"
        href={`${REMOTE_SERVER}/lab5/module`}
      >
        Get Module
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary me-2"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-info"
        href={`${REMOTE_SERVER}/lab5/module/name`}
      >
        Get Name
      </a>
      <hr />
    </div>
  );
}
