const asyncHandler = require('express-async-handler');

import generateToken from "../utils/generateToken";
import User from "../models/userModel";

//@desc     Auth user/set token
//route     POST /api/users/auth
//@access   public
const authUser = asyncHandler (async (req: any, res: any) => {

    const {email, password} = req.body;

    const user = await User.findOne({ email });

    if(user && ( await user.matchPassword(password) ) ){
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(401);
        throw new Error(`Invalid email or password`);
    };

});

//@desc     Register a new user
//route     POST /api/users
//@access   public
const registerUser = asyncHandler (async (req: any, res: any) => {

    console.log(req.body)
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email: email})
    if (userExists){
        res.status(400);
        throw new Error('User Already Exists');
    };

    const user = await User.create({
        name,
        email,
        password
    });

    if(user){
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(400);
        throw new Error(`Invalid user data`);
    };

});

//@desc     Logout user
//route     POST /api/users/logout
//@access   public
const logoutUser = asyncHandler (async (req: any, res: any) => {

    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    })

    res.status(200).json({ message: 'User Logged Out'});

});

//@desc     Get user profile
//route     GET /api/users/profile
//@access   Private
const getUserProfile = asyncHandler (async (req: any, res: any) => {

    res.status(200).json({ message: 'User Profile'});

});

//@desc     Update user profile
//route     PUT /api/users/profile
//@access   Private
const updateUserProfile = asyncHandler (async (req: any, res: any) => {

    res.status(200).json({ message: 'Update Profile'});

});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
};