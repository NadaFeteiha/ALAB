const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(morgan("morgan"));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extends: true }));
app.set('view engine', 'ejs');


// Routes
const applicationRoutes = require("./routes/applications");
const companyRoutes = require("./routes/companies");

app.use("/applications", applicationRoutes);
app.use("/companies", companyRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
