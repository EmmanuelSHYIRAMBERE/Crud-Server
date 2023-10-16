import { User } from "../../models";


export const findOneAndReplace = async (req, res) => {
    try {
      const {id} = req.params;
      const user = await User.findOneAndReplace({_id:id}, req.body);
      // if we cannot find any product in database
      if (!user) {
          return res.status(404).json({message:`cannot find any user with ID ${id}`})
      }
      const updatedUser = await User.findById(id);
      res.status(200).json(updatedUser);
  
    } catch (error) {
      res.status(500).json({message: error.message})
  
    }
  };
  