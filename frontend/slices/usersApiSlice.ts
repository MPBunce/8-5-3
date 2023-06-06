import { apiSlice } from "./apiSlice";

//web computer
//const USERS_URL = 'http://localhost:6969/api/users'

//iphone
const USERS_URL = 'http://192.168.2.160:6969/api/users'

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data: any) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
    }),
    register: builder.mutation({
      query: (data: any) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    updateUser: builder.mutation({
      query: (data: any) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
} = userApiSlice;