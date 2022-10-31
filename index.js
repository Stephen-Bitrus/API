import express from "express";

const express = require(express)

const app = express()

const port = 4567

const task1 = [
    {"slackUsername": "BStephen",
    "backend": true,
    "age": 24,
    "bio": "I'm curious, and I love the intellectual challenge of creatively overcoming limitations."},
]


app.get("/", (req, res)=>{
    res.json(task1)
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})