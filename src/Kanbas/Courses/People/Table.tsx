import React, { useState, useEffect } from 'react';
import * as client from './client';
import { FaUserCircle, FaPlus } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import PeopleDetails from './Details';
import './Table.css';

export default function PeopleTable() {
  const { id } = useParams();
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const createUser = async () => {
    const user = await client.createUser({
      firstName: 'New',
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: 'password123',
      section: 'S101',
      role: 'STUDENT',
    });
    setUsers([user, ...users]);
    navigate(`/Kanbas/Courses/${id}/People/${user._id}`);
  };

  const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div id="wd-people-table">
      <button
        onClick={createUser}
        className="float-end btn btn-danger wd-add-people"
      >
        <FaPlus className="me-2" />
        People
      </button>

      <input
        onChange={(e) => filterUsersByName(e.target.value)}
        placeholder="Search people"
        className="form-control float-start w-25 me-2 wd-filter-by-name"
      />
      <select
        value={role}
        onChange={(e) => filterUsersByRole(e.target.value)}
        className="form-select float-start w-25 wd-select-role"
      >
        <option value="">All Roles</option>
        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>
        <option value="FACULTY">Faculty</option>
      </select>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name">
                <div
                  className="d-flex align-items-center"
                  onClick={() =>
                    navigate(`/Kanbas/Courses/${id}/People/${user._id}`)
                  }
                  style={{ cursor: 'pointer' }} // Added cursor pointer to indicate clickable element
                >
                  <FaUserCircle
                    className="me-2 fs-4"
                    style={{ color: 'gray' }}
                  />
                  <span className="text-danger">{`${user.firstName} ${user.lastName}`}</span>
                </div>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <PeopleDetails fetchUsers={fetchUsers} />
    </div>
  );
}
