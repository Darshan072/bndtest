import express from "express";

const app = express();
app.use(express.json());



app.get("/health", (req, res) => {
    res.send("DARSHAN 10001 Ghetiya");
});
app.listen("6000", () => {
    console.log("listening 6000");
});   