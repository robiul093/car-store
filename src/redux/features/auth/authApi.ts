import { baseApi } from "../../api/baseApi";


const authApi = baseApi.injectEndpoints({
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
        }),
        changePassword: builder.mutation({
            query: (info) => ({
                url: '/change-password',
                method: 'POST',
                body: info
            })
        })
    })
});


export const { useRegisterMutation, useLoginMutation, useChangePasswordMutation } = authApi;