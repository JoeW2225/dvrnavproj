import express, { application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express()

app.use(express.json())
app.use(cors())
dotenv.config()

app.listen(8080, function(){
    console.log("You're running on port 8080fm")
})


const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
})

app.get("/", function (req,res) {
    res.json("this is the home route")
})

app.get("/comments", async function (req,res) {
    const comments = await db.query("SELECT id, name, message FROM guestbook");
    res.json(comments.rows);
})

app.post("/comments", async function (req,res) {
    const name = req.body.name;
    const message = req.body.message;

    const newName = await db.query (
        "INSERT INTO guestbook (name, message) VALUES ($1, $2)",
        [name, message]
    )

    res.json(newName)

})