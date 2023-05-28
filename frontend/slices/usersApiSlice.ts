import { apiSlice } from "./apiSlice";

const USERS_URL = 'http://localhost:6969/api/users'

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data: any) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data
            })
        })
    })
})

export const { useLoginMutation } = usersApiSlice;