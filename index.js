const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());

const port = 4397


app.get("/", (req, res)=>{
    res.json(
        {"slackUsername": "BStephen",
        "backend": true,
        "age": 24,
        "bio": "I'm curious, and I love the intellectual challenge of creatively overcoming limitations"},)
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})


