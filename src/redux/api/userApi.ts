import { baseApi } from './baseApi';

const userApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => {
        return {
          url: '/auth/login/',
          method: 'post',
          body: data
        };
      },
    }),
    register: builder.mutation({
        query: (data) => {
          return {
            url: '/auth/register/',
            method: 'post',
            body: data
          };
        },
      }),

  })
});

export const {
    useLoginMutation,
    useRegisterMutation
} = userApi;

export default userApi;
