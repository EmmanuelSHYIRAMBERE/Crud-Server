import {NewsLetter} from '../../models';

export const addNewsletter = async (req, res) => {
    try{
        const product = await NewsLetter.create(req.body)
        res.status(201).json(product)

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
};
