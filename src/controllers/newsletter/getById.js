import {NewsLetter} from "../../models";

export const getOneLetter = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await NewsLetter.findById(id);
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message})

    }
};

