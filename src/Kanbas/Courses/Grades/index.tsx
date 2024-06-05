import React from 'react';
import GradeControls from './GradeControls';
import { CiSearch } from 'react-icons/ci';
import { BsChevronDown } from 'react-icons/bs';
import { PiArrowSquareRightThin } from 'react-icons/pi';
import { CiFilter } from 'react-icons/ci';
import './index.css';

export default function Grades() {
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
                <th style={{ textAlign: 'center' }}>
                  A1 SETUP
                  <br />
                  Out of 100
                </th>
                <th style={{ textAlign: 'center' }}>
                  A2 HTML
                  <br />
                  Out of 100
                </th>
                <th style={{ textAlign: 'center' }}>
                  A3 CSS
                  <br />
                  Out of 100
                </th>
                <th style={{ textAlign: 'center' }}>
                  A4 BOOTSTRAP
                  <br />
                  Out of 100
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-danger">Jane Adams</td>
                <td style={{ textAlign: 'center' }}>100%</td>
                <td style={{ textAlign: 'center' }}>96.67%</td>
                <td style={{ textAlign: 'center' }}>92.18%</td>
                <td style={{ textAlign: 'center' }}>66.22%</td>
              </tr>
              <tr>
                <td className="text-danger">Christina Allen</td>
                <td style={{ textAlign: 'center' }}>100%</td>
                <td style={{ textAlign: 'center' }}>100%</td>
                <td style={{ textAlign: 'center' }}>100%</td>
                <td style={{ textAlign: 'center' }}>100%</td>
              </tr>
              <tr>
                <td className="text-danger">Samreen Ansari</td>
                <td style={{ textAlign: 'center' }}>100%</td>
                <td style={{ textAlign: 'center' }}>100%</td>
                <td style={{ textAlign: 'center' }}>100%</td>
                <td style={{ textAlign: 'center' }}>100%</td>
              </tr>
              <tr>
                <td className="text-danger">Han Bao</td>
                <td style={{ textAlign: 'center' }}>100%</td>
                <td style={{ textAlign: 'center' }}>100%</td>
                <td style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="input-group" style={{ maxWidth: '120px' }}>
                      <input
                        type="text"
                        defaultValue="88.03"
                        className="form-control"
                        style={{ textAlign: 'center' }}
                      />
                      <span className="input-group-text">
                        <PiArrowSquareRightThin style={{ fontSize: '24px' }} />
                      </span>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: 'center' }}>98.99%</td>
              </tr>
              <tr>
                <td className="text-danger">Mahi Sai Srinivas Bobbili</td>
                <td style={{ textAlign: 'center' }}>100%</td>
                <td style={{ textAlign: 'center' }}>96.67%</td>
                <td style={{ textAlign: 'center' }}>98.37%</td>
                <td style={{ textAlign: 'center' }}>100%</td>
              </tr>
              <tr>
                <td className="text-danger">Siran Cao</td>
                <td style={{ textAlign: 'center' }}>100%</td>
                <td style={{ textAlign: 'center' }}>100%</td>
                <td style={{ textAlign: 'center' }}>100%</td>
                <td style={{ textAlign: 'center' }}>100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
