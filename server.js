const cors = require("cors");
const express = require("express");
const app = express();
const PORT = 8000;

// This middleware allows any origin (front-end) to interact with our API
app.use(cors());

// This middleware allows us to post JSON in request.body
app.use(express.json());

// This middleware allows us to serve static files
// app.use("/public-images", express.static("./files"));
app.use(express.static("./"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "./index.html")
})

// Start the server listening
// It's convention to have this at the end of the file
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});