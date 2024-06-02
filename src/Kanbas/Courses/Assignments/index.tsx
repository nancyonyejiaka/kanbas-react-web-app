import AssignmentsControlsPanel from './AssignmentsControls';
import AssignmentButtons from './AssignmentButtons';
import AssignmentsControlButtons from './AssignmentControlButtons';
import { BsGripVertical } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import { LuClipboardSignature } from 'react-icons/lu';

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentsControlsPanel />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown />
            <strong>ASSIGNMENTS</strong>
            <AssignmentsControlButtons />
          </div>
          <ul
            className="wd-assignment-items list-group rounded-0"
            style={{
              borderLeft: '4px solid green',
            }}
          >
            <li className="wd-assignment-item list-group-item p-3 ps-1 align-items-center">
              <div className="row">
                <div className="col-auto d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <LuClipboardSignature
                    style={{ marginRight: '0.5rem', color: 'green' }}
                  />
                </div>
                <div className="col">
                  <h5 style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    <a
                      className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/123"
                      style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontWeight: 'bold',
                      }}
                    >
                      A1
                    </a>
                  </h5>
                  <span
                    className="text-danger"
                    style={{ marginRight: '0.5rem' }}
                  >
                    Multiple Modules
                  </span>
                  <span style={{ marginRight: '0.5rem' }}> | </span>
                  <strong style={{ marginRight: '0.5rem' }}>
                    Not available until
                  </strong>
                  <span style={{ marginRight: '0.5rem' }}>
                    May 6 at 12:00am
                  </span>
                  <span style={{ marginRight: '0.5rem' }}> | </span>
                  <strong style={{ marginRight: '0.5rem' }}>Due</strong>
                  <span style={{ marginRight: '0.5rem' }}>
                    May 13 at 11:59pm
                  </span>
                  <span> | </span>
                  <span>100 pts</span>
                </div>
                <div className="col-auto d-flex align-items-right">
                  <AssignmentButtons />
                </div>
              </div>
            </li>

            <li className="wd-assignment-item list-group-item p-3 ps-1 align-items-center">
              <div className="row">
                <div className="col-auto d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <LuClipboardSignature
                    style={{ marginRight: '0.5rem', color: 'green' }}
                  />
                </div>
                <div className="col">
                  <h5 style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    <a
                      className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/123"
                      style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontWeight: 'bold',
                      }}
                    >
                      A2
                    </a>
                  </h5>
                  <span
                    className="text-danger"
                    style={{ marginRight: '0.5rem' }}
                  >
                    Multiple Modules
                  </span>
                  <span style={{ marginRight: '0.5rem' }}> | </span>
                  <strong style={{ marginRight: '0.5rem' }}>
                    Not available until
                  </strong>
                  <span style={{ marginRight: '0.5rem' }}>
                    May 13 at 12:00am
                  </span>
                  <span style={{ marginRight: '0.5rem' }}> | </span>
                  <strong style={{ marginRight: '0.5rem' }}>Due</strong>
                  <span style={{ marginRight: '0.5rem' }}>
                    May 20 at 11:59pm
                  </span>
                  <span> | </span>
                  <span>100 pts</span>
                </div>
                <div className="col-auto d-flex align-items-right">
                  <AssignmentButtons />
                </div>
              </div>
            </li>

            <li className="wd-assignment-item list-group-item p-3 ps-1 align-items-center">
              <div className="row">
                <div className="col-auto d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <LuClipboardSignature
                    style={{ marginRight: '0.5rem', color: 'green' }}
                  />
                </div>
                <div className="col">
                  <h5 style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    <a
                      className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/123"
                      style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontWeight: 'bold',
                      }}
                    >
                      A3
                    </a>
                  </h5>
                  <span
                    className="text-danger"
                    style={{ marginRight: '0.5rem' }}
                  >
                    Multiple Modules
                  </span>
                  <span style={{ marginRight: '0.5rem' }}> | </span>
                  <strong style={{ marginRight: '0.5rem' }}>
                    Not available until
                  </strong>
                  <span style={{ marginRight: '0.5rem' }}>
                    May 20 at 12:00am
                  </span>
                  <span style={{ marginRight: '0.5rem' }}> | </span>
                  <strong style={{ marginRight: '0.5rem' }}>Due</strong>
                  <span style={{ marginRight: '0.5rem' }}>
                    May 27 at 11:59pm
                  </span>
                  <span> | </span>
                  <span>100 pts</span>
                </div>
                <div className="col-auto d-flex align-items-right">
                  <AssignmentButtons />
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
