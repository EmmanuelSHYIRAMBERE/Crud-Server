const express = require("express")

const logger = function (req, res, next) {
    console.log(req.body);
    next();
}

module.exports = logger;