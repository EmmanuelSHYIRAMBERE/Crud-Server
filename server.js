const express = require("express");
const bodyParser = require("body-parser");

const app  = express();
app.use(bodyParser.json());

const port = 3000;

let  database = [
    {
    id: 1,
    title: "Fuel prices have increase",
    body: "RURA has announced the effective of 4th October prices will increase",
    },
];

app.get("/",(req, res) => {
    res.send(database);
});

app.get("/getOneLetter/:id", (req, res) => {
    let id = 
});

app.post("/", (req,res) => {
    console.log(req.body);
    database.push(req.body);
    res.sendStatus(201).json({
        message: "NewsLetter created",
    });
});

app.put("/", (req, res) => {
    res.send("Put request");
});

app.patch("/", (req, res) => {
    console.log(req.body);
    res.send("Patch request");
});

app.delete("/", (req, res) => {
    res.send("Delete request");
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost: ${port}`)
});
