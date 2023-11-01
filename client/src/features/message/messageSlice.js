import { apiSlice } from '../api/apiSlice';

export const messageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllMessage: builder.query({
      query: () => ({
        url: '/message',
        method: 'GET',
      }),
      providesTags: ['Friend'],
    }),
    sendMessage: builder.mutation({
      query: () => ({
        url: '/message',
        method: 'POST',
      }),
    }),
  }),
});

export const { useGetAllMessageQuery, useSendMessageMutation } = messageApi;
