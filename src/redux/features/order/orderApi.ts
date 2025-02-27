
import { baseApi } from "../../api/baseApi";


export const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (orderInfo) => ({
                url: '/orders',
                method: "POST",
                body: orderInfo,
            }),
        }),
        getSingleUserOrder: builder.query({
            query: () => ({
                url: '/user/orders',
                method: 'GET',
            }),
        }),
        verifyOrder: builder.query({
            query: (order_id) => ({
                url: '/orders/verify',
                params: { order_id },
                method: 'GET',
            }),
        }),
    }),
});



export const { useCreateOrderMutation, useVerifyOrderQuery, useGetSingleUserOrderQuery } = orderApi;