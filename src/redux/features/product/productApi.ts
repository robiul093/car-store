import { baseApi } from "../../api/baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: (params) => {
        const backendParams: Record<string, unknown> = {
          page: params?.page || 1,
          limit: params?.limit || 9,
        };

        if (params?.search) backendParams.searchTerm = params.search;
        if (params?.brand) backendParams.brand = params.brand;
        if (params?.category) backendParams.category = params.category;
        if (params?.['price[gte]']) backendParams['price[gte]'] = params['price[gte]'];
        if (params?.['price[lte]']) backendParams['price[lte]'] = params['price[lte]'];
        if (params?.sortBy) {
          backendParams.sort = `${params.sortBy}:${params.sortOrder || 'desc'}`;
        }

        return {
          url: '/cars',
          method: 'GET',
          params: backendParams,
        };
      },
    }),

    // 🔍 Get single car by ID
    getSingleCar: builder.query({
      query: (id: string) => ({
        url: `/cars/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllCarsQuery, useGetSingleCarQuery } = productApi;
