import React from 'react';
import { FaSearch, FaFilter, FaArrowRight } from 'react-icons/fa';

export default function Grades() {
  return (
    <div style={{ padding: '1.5rem', fontFamily: 'Arial, sans-serif' }}>
      <div className="row mb-3">
        <div className="col-md-6">
          <h5>Student Names</h5>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search Students"
              aria-label="Search Students"
            />
            <span className="input-group-text">
              <FaSearch />
            </span>
          </div>
        </div>
        <div className="col-md-6">
          <h5>Assignment Names</h5>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search Assignments"
              aria-label="Search Assignments"
            />
            <span className="input-group-text">
              <FaSearch />
            </span>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <button className="btn btn-primary">
          <FaFilter /> Apply Filters
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>
                A1 SETUP
                <br />
                Out of 100
              </th>
              <th>
                A2 HTML
                <br />
                Out of 100
              </th>
              <th>
                A3 CSS
                <br />
                Out of 100
              </th>
              <th>
                A4 BOOTSTRAP
                <br />
                Out of 100
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-danger">Jane Adams</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>92.18%</td>
              <td>66.22%</td>
            </tr>
            <tr>
              <td className="text-danger">Christina Allen</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="text-danger">Samreen Ansari</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Han Bao</td>
              <td>100%</td>
              <td>100%</td>
              <td>
                <div className="input-group">
                  <input
                    type="text"
                    defaultValue="88.03"
                    className="form-control"
                  />
                  <span className="input-group-text">
                    <FaArrowRight />
                  </span>
                </div>
              </td>
              <td>98.99%</td>
            </tr>
            <tr>
              <td className="text-danger">Mahi Sai Srinivas Bobbili</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>98.37%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="text-danger">Siran Cao</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
