const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static("public"));

// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
