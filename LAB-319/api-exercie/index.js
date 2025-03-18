import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/grades.js";

dotenv.config();
// connect to mongoose database
// wait to connect to the database before starting the server
await mongoose.connect(process.env.ATLAS_URI)
    .then(() => console.log("Connected to the database."))
    .catch((err) => console.log("Error connecting to the database: ", err));

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the API.");
});

app.use("/grades", router);

// Global error handling
app.use((err, _req, res, next) => {
    res.status(500).send("Seems like we messed up somewhere...");
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
