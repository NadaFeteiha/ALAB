const express = require("express");
const router = express.Router();

const applications = require("../data/applications");

const validStatuses = ["pending", "accepted", "rejected"];

router
    .get("/", (req, res) => {
        const { status, company } = req.query;
        let filteredApps = applications;


        if (status) filteredApps = filteredApps.filter(app => app.status.toLowerCase() === status.toLowerCase());
        if (company) filteredApps = filteredApps.filter(app => app.company.toLowerCase() === company.toLowerCase());

        res.json(filteredApps);
    })
    .post("/", (req, res) => {
        const newApplication = { id: applications.length + 1, ...req.body };

        //validate request
        if (!newApplication.company || !newApplication.position) {
            res.status(400).json({ msg: "Please include company, and position" });
            return;
        }

        // set default status to pending if not provided
        if (!newApplication.status) {
            newApplication.status = "pending";
        }

        applications.push(newApplication);
        res.status(200).json(newApplication);
    })
    .patch("/:id", (req, res) => {

        const application = applications.find(app => app.id == req.params.id);

        if (!application) {
            return res.status(404).json({ error: "Application not found" });
        }

        if (req.body.status && !validStatuses.includes(req.body.status.toLowerCase())) {
            return res.status(400).json({ error: `Status should be ${validStatuses}` });
        }

        application.status = req.body.status.toLowerCase();
        res.json(application);
    }).delete("/:id", (req, res) => {
        const application = applications.find(app => app.id == req.params.id);

        if (!application) {
            return res.status(404).json({ error: "Application not found" });
        }

        applications.splice(applications.indexOf(application), 1);

        res.status(200).send("Application deleted successfully");
    })


module.exports = router;