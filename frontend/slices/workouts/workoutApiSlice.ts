import { apiSlice } from "../apiSlice";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

//My House
const Workouts_URL = 'http://localhost:7000/api/workouts'

//My House andriod emulator
//const Workouts_URL = 'http://192.168.2.18:6969/api/workouts'

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
    updateWorkout: builder.mutation({
      query: (args: { workoutId: any; data: any }) => ({
        url: `${Workouts_URL}/${args.workoutId}`,
        method: 'PUT',
        body: args.data,
      }),
    })  

  }),
});

export const {
  useGetWorkoutsMutation,
  useCreateWorkoutMutation,
  useDeleteWorkoutMutation,
  useUpdateWorkoutMutation
} = workoutApiSlice;






const initialState = {
  userWorkouts: null
};

const workoutSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {
    setSliceWorkouts: (state: any, action: any) => {
      state.userWorkouts = action.payload;
      AsyncStorage.setItem('userWorkouts', JSON.stringify(action.payload))
    },
    createSliceWorkout: (state: any, action: any) => {
      state.userWorkouts.push(action.payload);
      AsyncStorage.setItem('userWorkouts', JSON.stringify(state.userWorkouts));
    },
    updateSliceWorkout: (state: any, action: any) => {
      const updatedWorkout = action.payload;
      const index = state.userWorkouts.findIndex((workout: any) => workout.id === updatedWorkout.id);

      if (index !== -1) {
        state.userWorkouts[index] = updatedWorkout;
        AsyncStorage.setItem('userWorkouts', JSON.stringify(state.userWorkouts));
      }
    },
    deleteSliceWorkout: (state: any, action: any) => {

      const workoutIdToDelete = JSON.stringify(action.payload);
      const parsedObject = JSON.parse(workoutIdToDelete);
      const idString = parsedObject.id;

      const currentWorkouts = JSON.parse(JSON.stringify(state.userWorkouts))
      console.log(currentWorkouts)

      const filteredWorkouts = currentWorkouts.filter((item: any) => {
        return item._id !== idString
      });
    
      console.log(filteredWorkouts)
      state.userWorkouts = filteredWorkouts
      AsyncStorage.setItem('userWorkouts', JSON.stringify(state.userWorkouts));
    },

    
  }
})

export const {
  setSliceWorkouts,
  createSliceWorkout,
  updateSliceWorkout,
  deleteSliceWorkout
} = workoutSlice.actions;

export default workoutSlice.reducer