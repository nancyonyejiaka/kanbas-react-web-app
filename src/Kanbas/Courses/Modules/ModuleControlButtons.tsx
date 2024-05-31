import { FaPlus } from 'react-icons/fa6';
import { IoEllipsisVertical } from 'react-icons/io5';
import GreenCheckmark from './GreenCheckmark';
export default function LessonControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <FaPlus className="fs-4" style={{ margin: '0 10px' }} />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
