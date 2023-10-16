import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    try {
        let authorise = req.headers.authorization;

        let token = authorise?.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                message: "please, provide the access token!",
            });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
            if (err) {
                return res.status(401).json({
                    message: err.message,
                });
            }
            req.userId = verified._id;
            next();

        });
        
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    // const getToken = req.headers;
    // console.log(getToken.authorization);
    // res.status(200).json({
    //     message: "verified",
    // })
};

