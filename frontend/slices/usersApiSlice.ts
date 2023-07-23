import { apiSlice } from "./apiSlice";

//My House
const USERS_URL = 'http://localhost:7000/api/users'

//My House andriod emulator
//const USERS_URL = 'http://192.168.2.18:6969/api/users'

//Tenzins House
//const USERS_URL = 'http://192.168.2.160:6969/api/users'

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data: any) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        credentials: 'include',
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