import { createWorkout } from '../controllers/workoutControllers';
import { protect } from '../middleware/authMiddleware';

const express = require('express');
const router = express.Router();

router.route('/').post(protect, createWorkout)

export default router;