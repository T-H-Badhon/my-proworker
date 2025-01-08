import {
    BaseQueryApi,
    BaseQueryFn,
    DefinitionType,
    FetchArgs,
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
// import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://interview.pencilwoodbd.org/api',
    // credentials: 'include',
    prepareHeaders: (headers,) => {
        // // const token = (getState() as RootState).auth.access_token;

        // if (token) {
        //     headers.set('authorization', `Bearer ${token}`);
        // }

        return headers;
    }
});

const baseQueryWithRefreshToken: BaseQueryFn<
    FetchArgs,
    BaseQueryApi,
    DefinitionType
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
> = async (args, api, extraOptions): Promise<any> => {
    let result = await baseQuery(args, api, extraOptions);
    console.log(result);

    if (result?.error?.status === 404) {
        // toast.error(result.error.data.message);
    }
    if (result?.error?.status === 401 || result?.error?.status === 403) {
        //* Send Refresh
        console.log('Sending refresh token');

        const res = await fetch(
            'https://interview.pencilwoodbd.org/api/auth/refresh/',
            {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({
                    // refresh_token: (api.getState() as RootState).auth.refresh_token
                })
            }
        );

        const data = await res.json();

        if (data?.access_token) {
            // const user = (api.getState() as RootState).auth.user;

            // if new token generate then save this token for future use
            // api.dispatch(logOutUser());

            result = await baseQuery(args, api, extraOptions);
        } else {
            // if token not refresh then sign out
            // api.dispatch(logOutUser());
        }
    }

    return result;
};

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({})
});