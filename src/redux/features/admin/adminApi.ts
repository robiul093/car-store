import { baseApi } from "../../api/baseApi";


export const adminApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: () => ({
                url: '/admin/get-user',
                method: 'GET',
            }),
        }),
        manageUserStatus: builder.mutation({
            query: (user) => ({
                url: '/admin/manage-status',
                method: 'POST',
                body: user
            }),
        }),
        manageAllOrder: builder.query({
            query: () => ({
                url: '/admin/manage-all-order',
                method: 'Get',
            }),
        }),
    }),
});


export const { useGetAllUserQuery, useManageUserStatusMutation, useManageAllOrderQuery } = adminApi;