import React from 'react';
import { useLocation } from 'react-router-dom';
import * as db from '../../Database';
import GradeControls from './GradeControls';
import { CiSearch } from 'react-icons/ci';
import { BsChevronDown } from 'react-icons/bs';
import { CiFilter } from 'react-icons/ci';
import './index.css';

export default function Grades() {
  const { pathname } = useLocation();
  const course = pathname.split('/')[3];
  console.log(`PATHNAME: ${JSON.stringify(pathname)}`);
  console.log(`COURSE ID: ${JSON.stringify(course)}`);

  const assignments = [...db.assignments];
  const courseAssignments = assignments.filter(
    (assignment: any) => assignment.course === course
  );

  const grades = db.grades;
  const courseGrades = grades.filter((grade: any) => grade.course === course);
  console.log(`ASSIGNMENTS: ${JSON.stringify(courseGrades)}`);

  const enrollments = db.enrollments;
  const enrolled = enrollments.filter(
    (enrollee: any) => enrollee.course === course
  );
  console.log(`ASSIGNMENTS: ${JSON.stringify(enrolled)}`);

  const users = db.users;
  const enrolledUserIds = [...enrolled].map((enrollment) => enrollment.user);
  const roster = users.filter((student: any) =>
    enrolledUserIds.includes(student._id)
  );

  return (
    <div id="wd-grades">
      <GradeControls />
      <br />
      <br />
      <div style={{ padding: '1.5rem', fontFamily: 'Arial, sans-serif' }}>
        <div className="row mb-3">
          <div className="col-md-6">
            <h6>
              <strong>Student Names</strong>
            </h6>
            <div className="position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Search Students"
                aria-label="Search Students"
                style={{ paddingLeft: '2.5rem' }}
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
              <BsChevronDown
                className="position-absolute"
                style={{
                  top: '50%',
                  right: '10px',
                  transform: 'translateY(-50%)',
                  color: 'gray',
                  fontSize: '1.5rem',
                }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <h6>
              <strong>Assignment Names</strong>
            </h6>
            <div className="position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Search Assignments"
                aria-label="Search Assignments"
                style={{ paddingLeft: '2.5rem' }}
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
              <BsChevronDown
                className="position-absolute"
                style={{
                  top: '50%',
                  right: '10px',
                  transform: 'translateY(-50%)',
                  color: 'gray',
                  fontSize: '1.5rem',
                }}
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <button className="btn btn-secondary">
            <CiFilter style={{ fontSize: '1.5rem' }} /> Apply Filters
          </button>
        </div>
        <div className="table-responsive">
          <table className="table table-striped wd-grades-table">
            <thead>
              <tr>
                <th>Student Name</th>
                {courseAssignments.map((assignment: any) => (
                  <th style={{ textAlign: 'center' }}>
                    {`${assignment?.title}`}
                    <br />
                    {`Out of ${assignment?.points}`}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {roster.map((student: any) => (
                <tr>
                  <td className="text-danger">{`${student.firstName} ${student.lastName}`}</td>
                  {courseAssignments.map((assignment) => {
                    const grade = grades.find(
                      (grade) =>
                        grade.student === student._id &&
                        grade.assignment === assignment._id
                    );
                    return (
                      <td key={assignment._id} style={{ textAlign: 'center' }}>
                        {grade ? `${grade.grade}%` : '-'}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
