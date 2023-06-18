const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

import User from '../models/userModel'

const protect = asyncHandler( async (req: any, res: any, next: any) => {

    let token;
    token = req.cookies.jwt;

    if(token){

        try {

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password')
            next();

        } catch (error) {
            res.status(400);
            throw new Error('Invalid token');
        }

    } else{
        res.status(401);
        throw new Error('Not authorized, no token');
    }

});

const getUserIdFromCookie =  async (req: any) => {

    let token;
    token = req.cookies.jwt;


    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.userId)

    } catch (error) {

        throw new Error('No Token to Find User Id');
    }

    return req.user._id

};

export { protect, getUserIdFromCookie }