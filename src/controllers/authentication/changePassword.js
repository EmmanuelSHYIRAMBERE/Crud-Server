import { comparePassword, hashPassword } from "../../utils";
import { User } from "../../models";

export const changePassword = async (req, res) => {
    try {
        const { existingPassword, newPassword } = req.body;

        const { userId } = req;

    const user = await User.findById(userId);

    // compare whether entered existing password matches
    let passCheck = await comparePassword( existingPassword, user.password );

    if (!passCheck) {
        return res.status(401).json({
            message: "wrong email or password",
        });
    }

    let hashPass = await hashPassword(newPassword);

    user.password = hashPass;

    user.save();

    res.status(200).json({
        message: "password has changed!"
    });
        
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({
            message: error.message,
        });
        
    }
    
};