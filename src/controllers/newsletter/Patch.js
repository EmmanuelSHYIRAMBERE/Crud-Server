const database = require('../../utils/mockDatabse.js');

function UpdateData(req, res) {
    const requestId = req.params.id;
    const updateData = req.body;
  
    const index = database.findIndex((item) => item.id == requestId);
    if (index) {
      // Apply partial updates if the item is found
      database[index] = { ...database[index], ...updateData };
      res.json({ message: "NewsLetter partially updated" });
    } else {
      res.status(404).json({ message: "NewsLetter not found" });
    }
  };

module.exports = UpdateData;