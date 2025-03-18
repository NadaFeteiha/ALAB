import express from "express";
// import db from "../db/conn.js";
import { ObjectId } from "mongodb";
import Grades from "../models/Grades.js";

const router = express.Router();

// GET /grades/:id
// Get a single grade entry
router.get("/:id", async (req, res) => {
    let result = await Grades.findById(req.params.id);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

// Student route for backwards compatibility
router.get("/student/:id", async (req, res) => {
    res.redirect(`/grades/learner/${req.params.id}`);
});

// Get a learner's grade data
router.get("/learner/:id", async (req, res) => {
    let result = await Grades.findOne({ learner_id: req.params.id });
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

// Get a class's grade data
router.get("/class/:id", async (req, res) => {
    let result = await Grades.findOne({ class_id: req.params.id });

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});


// Create a single grade entry
router.post("/", async (req, res) => {
    // let collection = await db.collection("grades");
    let newDocument = req.body;

    // rename fields for backwards compatibility
    if (newDocument.student_id) {
        newDocument.learner_id = newDocument.student_id;
        delete newDocument.student_id;
    }

    let result = await Grades.create(newDocument);
    res.send(result).status(204);
});

/*
PATCH routes to update the scores array.
Add a new score.
*/

router.patch("/:id/add", async (req, res) => {
    let collection = await db.collection("grades");
    let query = { _id: new ObjectId(req.params.id) };
    let newScore = req.body;

    let result = await
        collection
            .updateOne(query, { $push: { scores: newScore } }); // Add a new score to the scores array  

    res.send(result).status(204);
}
);

//Remove a score.
router.patch("/:id/remove", async (req, res) => {
    let collection = await db.collection("grades");
    let query = { _id: new ObjectId(req.params.id) };
    let newScore = req.body;

    let result = await
        collection
            .updateOne(query, { $pull: { scores: newScore } }); // Remove a score from the scores array

    res.send(result).status(204);
}
);


export default router;