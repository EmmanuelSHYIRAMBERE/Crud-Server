const database = require('../../utils/mockDatabse.js');

function getAll(req, res)  {
    res.status(200).json(database);
}

module.exports = getAll;