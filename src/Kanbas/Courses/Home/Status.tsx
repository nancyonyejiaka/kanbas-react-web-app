import { MdDoNotDisturbAlt } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';
import { BiImport } from 'react-icons/bi';
import { LiaFileImportSolid } from 'react-icons/lia';
import { FaCreativeCommons } from 'react-icons/fa';
import { PiCrosshairLight } from 'react-icons/pi';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { SiGoogleanalytics } from 'react-icons/si';
import { CiBullhorn } from 'react-icons/ci';
import { GoBell } from 'react-icons/go';
{
  /* Find more icons */
}
export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: '300px' }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" />
            Unpublish
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" />
            Publish
          </button>
        </div>
      </div>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" />
        Import Existing Content
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaCreativeCommons className="me-2 fs-5" />
        Import from Commons
      </button>
      {/* Complete the rest of the buttons */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <PiCrosshairLight className="me-2 fs-5" />
        Choose Home Page
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiSolidBarChartAlt2 className="me-2 fs-5" />
        View Course Stream
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <CiBullhorn className="me-2 fs-5" />
        New Announcement
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <SiGoogleanalytics className="me-2 fs-5" />
        New Analytics
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <GoBell className="me-2 fs-5" />
        View Course Notifications
      </button>
    </div>
  );
}

//       <br />
//       <button>Course Home Page</button>
//       <br />
//       <button>View Course Stream</button>
//       <br />
//       <button>New Announcement</button>
//       <br />
//       <button>New Analytics</button>
//       <br />
//       <button>View Course Notifications</button>
//     </div>
//   );
// }
