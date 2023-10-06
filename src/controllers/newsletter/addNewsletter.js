const database = require('../../utils/mockDatabse.js');

function addNewsletter (req,res) {
    console.log(req.body, "Request body");
    database.push(req.body);
    res.status(201).json({
        message: "NewsLetter created",
    });
};

module.exports = addNewsletter;