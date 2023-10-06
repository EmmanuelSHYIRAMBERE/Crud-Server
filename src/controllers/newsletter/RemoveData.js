const database = require('../../utils/mockDatabse.js');

function RemoveData(req, res) {
    let requestId = req.params.id;
  
    // Find the index of the item to be deleted
    const index = database.findIndex((item) => item.id == requestId);
  
    if (index !== -1) {
      // Remove the item from the array
      database.splice(index, 1);
      res.status(204).send();
    } else {
      // If the item with the given ID is not found, return a 404 response
      res.status(404).json({
        message: "Newsletter not found",
      });
    }
  };


module.exports = RemoveData;