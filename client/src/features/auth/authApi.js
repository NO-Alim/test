import { apiSlice } from '../api/apiSlice';
import { userLoggedIn, userLoggedOut } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: () => ({
        url: '/register',
        method: 'POST',
        credentials: 'include',
      }),
      invalidatesTags: ['User'],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const user = {
            id: result?.data?.id || null,
            name: result?.data?.name || null,
          };

          localStorage.setItem(
            'auth',
            JSON.stringify({
              user,
            })
          );
          dispatch(
            userLoggedIn({
              user,
            })
          );
        } catch (error) {}
      },
    }),
    login: builder.mutation({
      query: () => ({
        url: '/login',
        method: 'POST',
        credentials: 'include',
      }),
      invalidatesTags: ['User', 'Friend', 'Messages'],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const user = {
            id: result?.data?.id || null,
            name: result?.data?.name || null,
          };

          localStorage.setItem(
            'auth',
            JSON.stringify({
              user,
            })
          );
          dispatch(
            userLoggedIn({
              user,
            })
          );
        } catch (error) {}
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'DELETE',
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(userLoggedOut());
          localStorage.clear();
        } catch (error) {}
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
  authApi;
