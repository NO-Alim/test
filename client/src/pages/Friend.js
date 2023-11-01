import React, { useEffect } from 'react';
import { useGetAllFriendQuery } from '../features/friend/friendSlice';

const Friend = () => {
  const { data, isLoading, error } = useGetAllFriendQuery();
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className=" flex items-center justify-center h-screen w-screen">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Friend
      </button>
    </div>
  );
};

export default Friend;
