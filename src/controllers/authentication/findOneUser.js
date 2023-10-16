import { User } from "../../models";

export const findOneUser = async (req, res) => {
    try {
        const findOneUser =  await User.findById(req.params.id);

        if (!findOneUser) {
            res.status(404).json({
                message: "User not found",
            });

        }

        res.status(200).json(findOneUser);


    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
        });
        
    }
}