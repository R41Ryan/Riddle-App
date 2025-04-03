import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://riddles-api.vercel.app/random");
        res.render("index.ejs", {
            riddle: result.data.riddle,
            answer: result.data.answer
        });
    } catch(error) {
        console.log(error.message);
        res.status(500);
    }
})

app.listen(port, () => {
    console.log("Listening on port " + port);
})