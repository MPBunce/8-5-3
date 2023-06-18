import { createWorkout, readWorkouts, updateWorkout, deleteWorkout } from '../controllers/workoutControllers';
import { protect } from '../middleware/authMiddleware';

const express = require('express');
const router = express.Router();


router.route('/').get(protect, readWorkouts)
router.route('/').post(protect, createWorkout)

router.route('/:id').put(protect, updateWorkout)
router.route('/:id').delete(protect, deleteWorkout)

export default router;