import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, } from '../controllers/userControllers'

const express = require('express');
const router = express.Router();


router.post('/auth', authUser)
router.post('/', registerUser)
router.post('/logout', logoutUser)
router.route('/profile').get(getUserProfile)
router.route('/profile').put(updateUserProfile)

export default router;