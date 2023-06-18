const asyncHandler = require('express-async-handler');
import Workout from "../models/workoutModel";
import { getUserIdFromCookie } from "../middleware/authMiddleware";

const createWorkout = asyncHandler ( async (req: any, res: any) => {

    const userId = await getUserIdFromCookie(req);

    const {compoundName, repRange, compoundSets, accessoryExercises} = req.body;
    console.log(compoundName, repRange, compoundSets, accessoryExercises)

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

    console.log(userId)

    const workouts = await Workout.find({userId: userId})

    console.log(workouts)
    res.status(200).json(workouts)

    // const {compoundName, repRange, compoundSets, accessoryExercises} = req.body;
    // console.log(compoundName, repRange, compoundSets, accessoryExercises)

});

const updateWorkout = asyncHandler ( async (req: any, res: any) => {

    const userId = await getUserIdFromCookie(req);

    const {compoundName, repRange, compoundSets, accessoryExercises} = req.body;
    console.log(compoundName, repRange, compoundSets, accessoryExercises)



});

const deleteWorkout = asyncHandler ( async (req: any, res: any) => {

    //let userId = await getUserIdFromCookie(req);
    const workout = await Workout.findById(req.params.id)
    console.log("here")
    await workout.deleteOne()
    res.status(200).json({ id: req.params.id })

});

export {
    createWorkout,
    readWorkouts,
    updateWorkout,
    deleteWorkout
}