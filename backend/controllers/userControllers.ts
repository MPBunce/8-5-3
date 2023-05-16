//@desc     Auth user/set token
//route     post /api/user/auth
//@access   public

const authUser = (req: any, res: any) => {
    res.status(200).json({ message: 'auth user'});
}

export {
    authUser
};