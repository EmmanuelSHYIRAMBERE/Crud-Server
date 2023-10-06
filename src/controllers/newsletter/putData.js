const database = require('../../utils/mockDatabse.js');

function putData(req, res) {
    const requestId = req.params.id;
    const updateData = req.body;
  
    const index = database.findIndex((item) => item.id == requestId);
    if (index !== -1) {
      // Update the item if found
      database[index] = updateData;
      res.status(200).json({ message: "NewsLetter updated", updatedData: database[index] });
    } else {
      res.status(404).json({ message: "NewsLetter not found" });
    }
  };

module.exports = putData;