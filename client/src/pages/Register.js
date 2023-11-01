import React, { useEffect } from 'react';
import { useLoginMutation } from '../features/auth/authApi';

const Register = () => {
  const [login, { data, isLoading, isError, error: resError }] =
    useLoginMutation();
  const handleSubmit = () => {
    login();
  };

  useEffect(() => {
    console.log(data);
  }, [isLoading]);
  return (
    <div className=" flex items-center justify-center h-screen w-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Register
      </button>
    </div>
  );
};

export default Register;
