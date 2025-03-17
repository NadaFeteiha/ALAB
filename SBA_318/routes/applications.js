const express = require("express");
const router = express.Router();

// Joi is a validator library that can be used to validate request data
const Joi = require("joi");

const applications = require("../data/applications");
const companies = require("../data/companies");
const users = require("../data/users");

const validStatuses = ["pending", "accepted", "rejected"];

//  ** Joi Schema for Validation **
const applicationSchema = Joi.object({
    company: Joi.string().min(2).max(100).required(),
    position: Joi.string().min(2).max(100).required(),
    status: Joi.string().valid(...validStatuses).default("pending")
});


// Helper functions 
const getUserDetails = (userId) => users.find(user => user.id === userId);
const getCompanyDetails = (companyId) => companies.find(company => company.id === companyId);
const getCompanyByName = (name) => {
    return companies.find(company => company.name.toLowerCase() === name.toLowerCase());
}
const formatApplication = (application) => {
    const user = getUserDetails(application.userId);
    const company = getCompanyDetails(application.companyId);

    delete application.userId;
    delete application.companyId;

    return {
        ...application,
        user: user,
        company: company
    };
};

router.get("/form", (req, res) => {
    const newFormatApplications = applications.map(formatApplication);
    res.render('applications', { applications: newFormatApplications });
});

router
    .get("/", (req, res) => {
        const { status, company } = req.query;
        let filteredApps = applications;

        // Filter by status
        if (status) {
            filteredApps = filteredApps.filter(app => app.status.toLowerCase() === status.toLowerCase());
        }

        // Filter by company name
        if (company) {
            const companyObj = companies.find(c => c.name.toLowerCase() === company.toLowerCase());
            if (!companyObj) {
                return res.status(404).json({ error: "Company not found, try to add it first to companies." });
            }
            filteredApps = filteredApps.filter(app => app.companyId === companyObj.id);
        }

        const formattedApps = filteredApps.map(formatApplication);

        res.json(formattedApps);
    })
    .post("/", (req, res) => {
        const newApplication = { id: applications.length + 1, ...req.body };


        const { error, value } = applicationSchema.validate(req.body);

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const company = getCompanyByName(newApplication.company);
        if (!company) {
            return res.status(400).json({ msg: "Company not found" });
        }

        // Set default status to pending if not found
        newApplication.status = newApplication.status || "pending";

        // Remove company from the object and push to applications
        delete newApplication.company;

        newApplication.companyId = company.id;

        applications.push(newApplication);

        res.status(200).json(newApplication);
    })
    .patch("/:id", (req, res) => {
        const application = applications.find(app => app.id == req.params.id);
        if (!application) {
            return res.status(404).json({ error: "Application not found" });
        }

        if (req.body.status && !validStatuses.includes(req.body.status.toLowerCase())) {
            return res.status(400).json({ error: `Status should be one of: ${validStatuses.join(", ")}` });
        }

        application.status = req.body.status.toLowerCase();
        res.json(application);
    })
    .delete("/:id", (req, res) => {
        const applicationIndex = applications.findIndex(app => app.id == req.params.id);
        if (applicationIndex === -1) {
            return res.status(404).json({ error: "Application not found" });
        }

        applications.splice(applicationIndex, 1);
        res.status(200).send("Application deleted successfully");
    });


module.exports = router;