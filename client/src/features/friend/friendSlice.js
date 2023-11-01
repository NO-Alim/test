import { apiSlice } from '../api/apiSlice';

export const friendApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllFriend: builder.query({
      query: () => ({
        url: '/friend',
        method: 'GET',
      }),
      providesTags: ['Friend'],
    }),
    sendFriendRequest: builder.mutation({
      query: () => ({
        url: '/friend',
        method: 'POST',
      }),
    }),
  }),
});

export const { useGetAllFriendQuery, useSendFriendRequestMutation } = friendApi;
