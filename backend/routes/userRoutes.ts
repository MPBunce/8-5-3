import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, } from '../controllers/userControllers'
import { protect } from '../middleware/authMiddleware';

const express = require('express');
const router = express.Router();


router.post('/auth', authUser)
router.post('/', registerUser)
router.post('/logout', logoutUser)
router.route('/profile').get(protect, getUserProfile)
router.route('/profile').put(protect, updateUserProfile)

export default router;