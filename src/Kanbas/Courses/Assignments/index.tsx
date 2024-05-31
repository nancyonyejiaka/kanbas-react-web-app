import AssignmentsControlsPanel from './AssignmentsControls';
import AssignmentButtons from './AssignmentButtons';
import AssignmentsControlButtons from './AssignmentControlButtons';
import { BsGripVertical } from 'react-icons/bs';

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
            ASSIGNMENTS
            <AssignmentsControlButtons />
          </div>
          <ul className="wd-assignment-items list-group rounded-0">
            <li className="wd--assignment-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              A1
              <AssignmentButtons />
            </li>
            <li className="wd-assignment-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              A2
              <AssignmentButtons />
            </li>
            <li className="wd-assignment-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              A3
              <AssignmentButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

// export default function Assignments() {
//   return (
//     <div id="wd-assignments">
//       <input id="wd-search-assignment" placeholder="Search for Assignments" />
//       <button id="wd-add-assignment-group">+ Group</button>
//       <button id="wd-add-assignment">+ Assignment</button>
//       <h3 id="wd-assignments-title">
//         ASSIGNMENTS 40% of Total <button>+</button>
//       </h3>
//       <ul id="wd-assignment-list">
//         <li className="wd-assignment-list-item">
//           <a
//             className="wd-assignment-link"
//             href="#/Kanbas/Courses/1234/Assignments/123"
//           >
//             A1 - ENV + HTML
//           </a>
//           <br />
//           Multiple Modules | <strong>Not available until</strong> May 6 at
//           12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
//         </li>
//         <li className="wd-assignment-list-item">
//           <a
//             className="wd-assignment-link"
//             href="#/Kanbas/Courses/1234/Assignments/124"
//           >
//             A2 - CSS + BOOTSTRAP
//           </a>
//           <br />
//           Multiple Modules | <strong>Not available until</strong> May 13 at
//           12:00am | <strong>Due</strong> May 20 at 11:59pm | 100 pts
//         </li>
//         <li className="wd-assignment-list-item">
//           <a
//             className="wd-assignment-link"
//             href="#/Kanbas/Courses/1234/Assignments/125"
//           >
//             A3 - JAVASCRIPT + REACT
//           </a>
//           <br />
//           Multiple Modules | <strong>Not available until</strong> May 20 at
//           12:00am | <strong>Due</strong> May 27 at 11:59pm | 100 pts
//         </li>
//       </ul>
//     </div>
//   );
// }
