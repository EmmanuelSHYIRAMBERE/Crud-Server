import {NewsLetter} from "../../models";

export const getAll = async (req, res) => {
    try {
        const products = await NewsLetter.find({});
        res.status(200).json(products);
        
    } catch (error) {
        // console.log(error.message);
        res.status(500).json({message: error.message})
    }
};

