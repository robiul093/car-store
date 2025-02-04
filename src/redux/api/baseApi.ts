import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://l2-assignment2-eta.vercel.app/api',
        credentials: 'include',
        // prepareHeaders: (headers) => {
        //     headers.set('Content-Type', 'application/json');
        //     return headers;
        // }
    }),
    endpoints: () => ({})
});


