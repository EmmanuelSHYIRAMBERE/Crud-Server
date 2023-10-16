import { generateToken, hashPassword } from "../../utils";
import { User } from "../../models";

export const signUp = async (req, res) => {
    // console.log(generateToken({
    //     myData: "this is my data",
    // })
    // )
    try {
        const user = await User.findOne({email: req.body.email });

    if (user) {
        return res.status(409).json({
            message: "this email already exists, try others",
        });
    }

    let hashedPassword = await hashPassword(req.body.password);

    req.body.password = hashedPassword;

    let newUser = await User.create(req.body);

    let token = generateToken({_id: newUser._id,});

    res.status(201).json({
        message: "you've registerd successfully",
        access_token: token,
        user: {
            email: newUser.email,
            fullNames: newUser.fullNames,
            location: newUser.location,
            role: newUser.role,
        },
    });
        
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
        });
    }
    
};