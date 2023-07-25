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

        res.status(201).json(workout)

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

    if(!userId){
        throw new Error('NO USER ID')
    }

    const {compoundName, repRange, compoundSets, accessoryExercises} = req.body;
    console.log(compoundName, repRange, compoundSets, accessoryExercises)


    const workout = await Workout.findById(req.params.id)
    if(!workout){
        res.status(400)
    }

    console.log(req.params.id)

    const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedWorkout)

});

const deleteWorkout = asyncHandler ( async (req: any, res: any) => {

    let userId = await getUserIdFromCookie(req);
    if(!userId){
        throw new Error('User Not Found')
    }

    const workout = await Workout.findById(req.params.id)


    if(!workout){
        res.status(400)
        throw new Error('Workout Not Found')
    }

    // console.log(userId.value)
    // console.log(workout.userId.value)
    // console.log(userId == workout.userId)

    // if(userId.value !== workout.userId.value){
    //     res.status(400)
    //     throw new Error('Incorrect User Error')
    // }

    console.log(workout)
    try {
        const res = await workout.deleteOne()     

    } catch (error) {
        console.log(error)
        res.status(400).json("Error")
    }


    res.status(200).json({id: req.params.id })
});

export {
    createWorkout,
    readWorkouts,
    updateWorkout,
    deleteWorkout
}