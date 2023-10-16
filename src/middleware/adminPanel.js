import { User } from "../models";


export const admin = async (req, res, next) => {
    try {
        const { userId } = req;
    
        const user = await User.findById(userId);

        if (user?.role != "admin") {
            return res.status(403).json({
                message: "Access denied",
            });
        }

        next();

        
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
        });
        
       }

};