import express from "express";
import morgan from "morgan";
import { applicationRoutes } from "./routes/applications.js";
import { router as companyRoutes } from "./routes/companies.js";

const PORT = process.env.PORT || 4000;

const app = express();

// view engine 
app.set('views', './views');
app.set('view engine', 'ejs');


// Middleware
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));


// Routes
app.get("/", (req, res) => {
    res.send("Welcome to Job Application Tracker");
});

app.use("/applications", applicationRoutes);
app.use("/companies", companyRoutes);


// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
