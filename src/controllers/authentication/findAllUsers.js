import { User } from "../../models";

export const findAllUsers = async (req, res) => {
    try {
        const All = await User.find({});
        res.status(200).json(All);
        
        
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
        
    }
}