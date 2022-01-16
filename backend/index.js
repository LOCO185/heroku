require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/', (req, res) => {
    res.send("OK");
})


const PORT = process.env.PORT;
app.listen(PORT || 8080, () => console.log(`Server listening to port ${PORT}`));
