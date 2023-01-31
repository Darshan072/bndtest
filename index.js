import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
    res.send("Kashi");
});
app.listen("8000", () => {
    console.log("listening 8000");
});