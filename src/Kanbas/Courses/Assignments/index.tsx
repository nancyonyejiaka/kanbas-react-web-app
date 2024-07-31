import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useParams } from 'react-router';
import AssignmentsControlsPanel from './AssignmentsControls';
import AssignmentButtons from './AssignmentButtons';
import AssignmentControlButtons from './AssignmentControlButtons';
import { BsGripVertical } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import { LuClipboardSignature } from 'react-icons/lu';
import { AiOutlineDelete } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { setAssignments, deleteAssignment } from './reducer';
import DeletionModal from './DeletionModal';
import * as client from './client';

Modal.setAppElement('#root');

interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  due: string;
  available: string;
  until: string;
  course: string;
}

export default function Assignments() {
  const { number } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] =
    useState<Assignment | null>(null);

  const openDeleteModal = (assignment: Assignment) => {
    setSelectedAssignment(assignment);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedAssignment(null);
    setModalIsOpen(false);
  };

  const handleDelete = () => {
    if (selectedAssignment) {
      removeAssignment(selectedAssignment._id);
      closeModal();
    }
  };

  const getDate = (dateString: any): any => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };

  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(number as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

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
            <AssignmentControlButtons />
          </div>
          <ul
            className="wd-assignment-items list-group rounded-0"
            style={{ borderLeft: '4px solid green' }}
          >
            {assignments
              .filter((assignment: any) => assignment.course === number)
              .map((assignment: any) => (
                <li
                  className="wd-assignment-item list-group-item p-3 ps-1 align-items-center"
                  key={assignment._id}
                >
                  <div className="row">
                    <div className="col-auto d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3" />
                      <LuClipboardSignature
                        style={{ marginRight: '0.5rem', color: 'green' }}
                      />
                    </div>
                    <div className="col">
                      <h5
                        style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}
                      >
                        <a
                          className="wd-assignment-link"
                          href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}
                          style={{
                            textDecoration: 'none',
                            color: 'black',
                            fontWeight: 'bold',
                          }}
                        >
                          {assignment.title}
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
                        {getDate(assignment.available)}
                      </span>
                      <span style={{ marginRight: '0.5rem' }}> | </span>
                      <strong style={{ marginRight: '0.5rem' }}>Due</strong>
                      <span style={{ marginRight: '0.5rem' }}>
                        {getDate(assignment.due)}
                      </span>
                      <span> | </span>
                      <span>{assignment.points} pts</span>
                    </div>
                    <div className="col-auto d-flex align-items-right">
                      <AssignmentButtons />
                      <AiOutlineDelete
                        className="fs-4"
                        style={{ cursor: 'pointer', color: 'red' }}
                        onClick={() => openDeleteModal(assignment)}
                      />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
      <DeletionModal
        show={modalIsOpen}
        handleClose={closeModal}
        handleConfirm={handleDelete}
      />
    </div>
  );
}
