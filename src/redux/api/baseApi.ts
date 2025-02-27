import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api',
        credentials: 'include',
        prepareHeaders: (headers, { getState }) => {
            headers.set('Content-Type', 'application/json');
            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set('Authorization', `${token}`);
            }
            return headers;
        }
    }),
    endpoints: () => ({})
});

'http://localhost:5000/api'
// 'https://l2-assignment2-eta.vercel.app/api'