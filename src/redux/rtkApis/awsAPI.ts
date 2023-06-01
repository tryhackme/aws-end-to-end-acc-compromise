import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const awsAPI = createApi({
  reducerPath: 'mainServer',
  tagTypes: ['Contact'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://0hor8sa3bf.execute-api.us-east-1.amazonaws.com', // fake url
  }),
  endpoints: builder => ({
    // callLambda: builder.mutation({
    //   query: contact => ({
    //     url: '/dev/callByReactJS',
    //     method: 'POST',
    //     body: contact,
    //   }),
    //   invalidatesTags: ['Contact'],
    // }),
  }),
});
