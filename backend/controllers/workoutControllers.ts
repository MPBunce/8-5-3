const asyncHandler = require('express-async-handler');

import Workout from "../models/workoutModel";
import { getUserIdFromCookie } from "../middleware/authMiddleware";

const createWorkout = asyncHandler ( async (req: any, res: any) => {

    const userId = await getUserIdFromCookie(req);
    console.log("test")
    console.log(userId)

    const {compoundName, repRange, compoundSets, accessoryExercises} = req.body;

    // const compoundName = req.body.compoundName;
    // const repRange = req.body.repRange;
    // const compoundSets = req.body.compoundSets;
    // const accessoryExercises = req.body.accessoryExercises;

    console.log(userId, compoundName, repRange, compoundSets, accessoryExercises)

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

export {
    createWorkout,
}