import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userLoggedOut } from '../auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_SERVER_URL,
  prepareHeaders: async (headers, { getState, endpoint }) => {
    headers.set('content-type', 'application/json');
    return headers;
  },
  credentials: 'include',
});

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
      api.dispatch(userLoggedOut());
      localStorage.clear();
    }
    return result;
  },
  tagTypes: ['User', 'Friend', 'Messages', 'Conversations'],
  endpoints: (builder) => ({}),
});
