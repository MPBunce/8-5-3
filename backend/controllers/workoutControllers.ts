const asyncHandler = require('express-async-handler');

import Workout from "../models/workoutModel";
import { getUserIdFromCookie } from "../middleware/authMiddleware";

const createWorkout = asyncHandler ( async (req: any, res: any) => {

    const userId = await getUserIdFromCookie(req);

    const {compoundName, repRange, compoundSets, accessoryExercises} = req.body;

    const workout = await Workout.create({
        userId,
        compoundName,
        repRange,
        compoundSets,
        accessoryExercises
    });

    if(workout){

        res.status(201).json({
            userId: userId,
            compoundName: compoundName,
            repRange: repRange,
            compoundSets: compoundSets,
            accessoryExercises: accessoryExercises
        })

    } else {
        res.status(400);
        throw new Error(`Invalid workout data`);
    };

});

const readWorkouts = asyncHandler ( async (req: any, res: any) => {

    const userId = await getUserIdFromCookie(req);

    const {compoundName, repRange, compoundSets, accessoryExercises} = req.body;

    const workout = await Workout.create({
        userId,
        compoundName,
        repRange,
        compoundSets,
        accessoryExercises
    });



});

const updateWorkout = asyncHandler ( async (req: any, res: any) => {

    const userId = await getUserIdFromCookie(req);

    const {compoundName, repRange, compoundSets, accessoryExercises} = req.body;

    const workout = await Workout.create({
        userId,
        compoundName,
        repRange,
        compoundSets,
        accessoryExercises
    });



});

const daleteWorkout = asyncHandler ( async (req: any, res: any) => {

    const userId = await getUserIdFromCookie(req);

    const {compoundName, repRange, compoundSets, accessoryExercises} = req.body;

    const workout = await Workout.create({
        userId,
        compoundName,
        repRange,
        compoundSets,
        accessoryExercises
    });


});

export {
    createWorkout,
    updateWorkout,

}