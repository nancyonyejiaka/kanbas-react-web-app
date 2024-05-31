import { FaPlus } from 'react-icons/fa6';
import { IoEllipsisVertical } from 'react-icons/io5';
export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <FaPlus className="fs-4" style={{ margin: '0 10px' }} />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
