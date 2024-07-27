import { useEffect, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { FaPencil } from 'react-icons/fa6';
import { FaCheck, FaUserCircle } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import * as client from './client';

export default function PeopleDetails({
  fetchUsers,
}: {
  fetchUsers: () => void;
}) {
  const navigate = useNavigate();
  const { uid, id } = useParams();

  const [user, setUser] = useState<any>({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [editing, setEditing] = useState(false);

  const saveUser = async () => {
    const [firstName, lastName] = name.split(' ');
    const updatedUser = { ...user, firstName, lastName, email, role };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    fetchUsers();
    navigate(`/Kanbas/Courses/${id}/People`);
  };

  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    fetchUsers();
    navigate(`/Kanbas/Courses/${id}/People`);
  };

  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
    setName(`${user.firstName} ${user.lastName}`);
    setEmail(user.email);
    setRole(user.role);
  };

  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);

  if (!uid) return null;

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <IoCloseSharp
        className="fs-1"
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          zIndex: 1,
          cursor: 'pointer',
        }}
        onClick={() => navigate(`/Kanbas/Courses/${id}/People`)}
      />
      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary me-2 fs-1" />
      </div>
      <hr />
      <div className="text-danger fs-4 wd-name">
        {!editing && (
          <FaPencil
            onClick={() => setEditing(true)}
            className="float-end fs-5 mt-2 wd-edit"
          />
        )}

        {editing && (
          <FaCheck
            onClick={() => saveUser()}
            className="float-end fs-5 mt-2 me-2 wd-save"
          />
        )}

        {!editing && (
          <div className="wd-name" onClick={() => setEditing(true)}>
            {user.firstName} {user.lastName}{' '}
          </div>
        )}

        {user && editing && (
          <input
            className="form-control w-50 wd-edit-name"
            defaultValue={`${user.firstName} ${user.lastName}`}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                saveUser();
              }
            }}
          />
        )}
      </div>
      <b>Email:</b>
      {editing ? (
        <input
          type="email"
          className="form-control w-100 wd-edit-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      ) : (
        <span className="wd-email">{user.email}</span>
      )}
      <br />
      <b>Roles:</b>
      {editing ? (
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="form-select w-100 wd-edit-role"
        >
          <option value="STUDENT">Student</option>
          <option value="TA">Assistant</option>
          <option value="FACULTY">Faculty</option>
          <option value="USER">User</option>
        </select>
      ) : (
        <span className="wd-roles">{user.role}</span>
      )}
      <br />
      <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span>{' '}
      <br />
      <b>Section:</b> <span className="wd-section">{user.section}</span> <br />
      <b>Total Activity:</b>{' '}
      <span className="wd-total-activity">{user.totalActivity}</span>
      <hr />
      <button
        onClick={() => deleteUser(uid)}
        className="btn btn-danger float-end wd-delete"
      >
        Delete
      </button>
      <button
        onClick={() => navigate(`/Kanbas/Courses/${id}/People`)}
        className="btn btn-secondary float-start float-end me-2 wd-cancel"
      >
        Cancel
      </button>
    </div>
  );
}
