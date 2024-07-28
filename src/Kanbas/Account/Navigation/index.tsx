import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './index.css';

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser
    ? [{ label: 'Profile', path: '/Kanbas/Account/Profile' }]
    : [
        { label: 'Sign In', path: '/Kanbas/Account/Signin' },
        { label: 'Sign Up', path: '/Kanbas/Account/Signup' },
      ];
  const { pathname } = useLocation();

  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`list-group-item border-0 py-1
            ${pathname.includes(link.label) ? 'active' : 'text-danger'}`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
