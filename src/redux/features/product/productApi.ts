import { baseApi } from "../../api/baseApi";

// Update your productApi.ts to properly transform parameters
export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: (params) => {
        const backendParams: Record<string, unknown> = {
          page: params?.page || 1,
          limit: params?.limit || 9,
        };

        // Transform search to searchTerm
        if (params?.search) backendParams.searchTerm = params.search;
        
        // Add other filters only if they have values
        if (params?.brand) backendParams.brand = params.brand;
        if (params?.category) backendParams.category = params.category;
        if (params?.['price[gte]']) backendParams['price[gte]'] = params['price[gte]'];
        if (params?.['price[lte]']) backendParams['price[lte]'] = params['price[lte]'];
        
        // Transform sorting
        if (params?.sortBy) {
          backendParams.sort = `${params.sortBy}:${params.sortOrder || 'desc'}`;
        }

        return {
          url: '/cars',
          method: 'GET',
          params: backendParams
        };
      },
    }),
  }),
});

export const { useGetAllCarsQuery } = productApi;