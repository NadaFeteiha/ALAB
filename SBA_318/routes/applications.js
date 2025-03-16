const express = require("express");
const router = express.Router();

const applications = require("../data/applications");

router.get("/", (req, res) => {
    const { status, company } = req.query;
    let filteredApps = applications;

    if (status) filteredApps = filteredApps.filter(app => app.status === status);
    if (company) filteredApps = filteredApps.filter(app => app.company === company);

    res.json(filteredApps);
});

module.exports = router;