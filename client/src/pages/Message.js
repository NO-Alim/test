import React, { useEffect } from 'react';
import { useLoginMutation } from '../features/auth/authApi';
import { useGetAllMessageQuery } from '../features/message/messageSlice';

const Message = () => {
  const { data, isLoading, isError, error: resError } = useGetAllMessageQuery();

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className=" flex items-center justify-center h-screen w-screen">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Message
      </button>
    </div>
  );
};

export default Message;
