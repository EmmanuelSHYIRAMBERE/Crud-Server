import database from '../../utils/mockDatabse.js';
import {NewsLetter} from "../../models";


export const putData = async (req, res) => {
  try {
    const {id} = req.params;
    const product = await NewsLetter.findOneAndReplace({_id:id}, req.body);
    // if we cannot find any product in database
    if (!product) {
        return res.status(404).json({message:`cannot find any product with ID ${id}`})
    }
    const updatedProduct = await NewsLetter.findById(id);
    res.status(200).json(updatedProduct);

  } catch (error) {
    res.status(500).json({message: error.message})

  }
};






  //   const index = database.findIndex((item) => item.id == requestId);
  //   if (index !== -1) {
  //     // Update the item if found
  //     findOneAndReplace(database[index], updateData);
  //     res.status(200).json({ message: "NewsLetter updated", updatedData: database[index] });
  //   } else {
  //     res.status(404).json({ message: "NewsLetter not found" });
  //   }
  // };

