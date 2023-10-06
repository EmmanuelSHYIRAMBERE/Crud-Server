const express = require("express");
const bodyParser = require("body-parser");
const logger = require("./src/middleware/logger.js");
const newsletterRouter = require('./src/routes/newsletter.js');

const app  = express();

app.use(bodyParser.json());
app.use(logger);

app.use("/newsLetter", newsletterRouter);

const port = 3000;



app.listen(port, () => {
    console.log(`Server is running on http://localhost: ${port}`)
});
