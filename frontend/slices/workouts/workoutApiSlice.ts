import { apiSlice } from "../apiSlice";

//My House
const Workouts_URL = 'http://localhost:7000/api/workouts'

//Tenzins House
//const Workouts_URL = 'http://192.168.2.160:6969/api/workouts'

export const workoutApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getWorkouts: builder.mutation({
        query: (data: any) => ({
          url: `${Workouts_URL}`,
          method: 'GET',
          credentials: 'include',
        }),
    }),
    createWorkout: builder.mutation({
      query: (data: any) => ({
        url: `${Workouts_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    deleteWorkout: builder.mutation({
      query: (workoutId: any) => ({
        url: `${Workouts_URL}/${workoutId}`,
        method: 'DELETE',

      }),
    }),


  }),
});

export const {
  useGetWorkoutsMutation,
  useCreateWorkoutMutation,
  useDeleteWorkoutMutation,
} = workoutApiSlice;