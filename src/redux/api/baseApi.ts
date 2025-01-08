import {
    BaseQueryApi,
    BaseQueryFn,
    DefinitionType,
    FetchArgs,
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
// import { RootState } from '../store';
import Cookies from 'js-cookie';

const baseQuery = fetchBaseQuery({
    baseUrl: '/api',
    // credentials: 'include',
    prepareHeaders: (headers,) => {
        const token = Cookies.get('access_token');

        if (token) {
            headers.set('authorization', `${token}`);
        }

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
            '/api/auth/refresh/',
            {
                method: 'post',
                credentials: 'include',
                body: JSON.stringify({
                    refresh: Cookies.get("refresh_token")
                })
            }
        );

       

        const data = await res.json();

        console.log(data)

        if (data?.access) {
            Cookies.set("access_token", data?.access, { expires: 1, path: "/" });

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