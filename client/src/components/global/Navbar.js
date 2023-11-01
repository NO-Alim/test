import React from 'react';
import { Link } from 'react-router-dom';
import { useLogoutMutation } from '../../features/auth/authApi';

const Navbar = () => {
  const [logout, { data, isLoading, error }] = useLogoutMutation();
  const handleLogout = () => {
    logout();
  };
  return (
    <div className=" flex justify-between items-center bg-slate-900 text-white py-2 px-5">
      <div className=" flex gap-5 items-start">
        <Link className=" cursor-pointer font-semibold" to="/">
          HOME
        </Link>
        <Link className=" cursor-pointer font-semibold" to="/friend">
          Friend
        </Link>
        <Link className=" cursor-pointer font-semibold" to="/message">
          Message
        </Link>
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
