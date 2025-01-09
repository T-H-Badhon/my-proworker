import { baseApi } from './baseApi';

const jobApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllJobs: builder.query({
        query: () => {
          return {
            url: '/jobs',
            method: 'get',
          };
        },
      }),
  })
});

export const {
    useGetAllJobsQuery
} = jobApi;

export default jobApi;
