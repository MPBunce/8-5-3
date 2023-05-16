import { authUser } from '../controllers/userControllers'

const express = require('express');
const router = express.Router();


router.post('/auth', authUser)

export default router;