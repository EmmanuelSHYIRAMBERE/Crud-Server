import { User } from "../../models";
import { comparePassword, generateToken } from "../../utils";

export const login = async (req, res) => {
try {
    const user = await User.findOne({email: req.body.email });

    if (!user) {
        return res.status(404).json({
            message: "User's email not found",
        });
    } 

    let isPasswordMatch = comparePassword(req.body.password, user.password);

    if (!isPasswordMatch) {
        return res.status(401).json({
            message: "you've provided wrong password",
        });
    }

    let token = generateToken({_id: user._id,});

    res.status(200).json({
        message: "Authorised!",
        access_token: token,
        user: {
            email: user.email,
            fullNames: user.fullNames,
            location: user.location,
            role: user.role,
        },
    });
    
} catch (error) {
    res.status(500).json({
        message: "Internal server error",
    });
}   
};