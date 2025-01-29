import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api',
        credentials: 'include',
        // prepareHeaders: (headers) => {
        //     headers.set('Content-Type', 'application/json');
        //     return headers;
        // }
    }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (userInfo) => ({
                url: '/register',
                method: "POST",
                body: userInfo
            })
        }),
        login: builder.mutation({
            query: (userInfo) => ({
                url: '/login',
                method: "POST",
                body: userInfo,
                // headers: {
                //     'Content-Type': 'application/json'
                //   }
            })
        })
    })
});



export const {useRegisterMutation, useLoginMutation } = baseApi;