import database from '../../utils/mockDatabse.js';
import {NewsLetter} from "../../models";


export const RemoveData = async (req, res) => {
  try {
    const {id} = req.params;
    const product = await  NewsLetter.findByIdAndDelete(id);
    if (!product) {
        return res.status(404).json({message:`cannot find any product with ID ${id}`})
    } 
    res.status(200).json(product);
    
} catch (error) {
    res.status(500).json({message:error.message})

}
  };


