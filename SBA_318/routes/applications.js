import { Router } from "express";
import Joi from 'joi';
import applications from "../data/applications.js";
import companies from "../data/companies.js";
import users from "../data/users.js";

export const applicationRoutes = new Router();
const validStatuses = ["pending", "accepted", "rejected"];

//  ** Joi Schema for Validation **
export const applicationSchema = Joi.object({
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

    const result = {
        ...application,
        user: user || { id: null, name: 'Unknown User' },
        company: company || { id: null, name: 'Unknown Company' }
    };

    console.log(result);

    return result;
};

const newFormatApplications = applications.map(formatApplication);

applicationRoutes.get("/form", (req, res) => {
    res.render('applications', { applications: newFormatApplications });
});

applicationRoutes
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
            return res.status(400).json({ error: value });
        }

        const company = getCompanyByName(newApplication.company);
        if (!company) {
            return res.status(400).json({ msg: "Company not found Please add this company " });
        }

        // Set default status to pending if not found
        newApplication.status = newApplication.status || "pending";

        // Remove company from the object and push to applications
        delete newApplication.company;

        newApplication.companyId = company.id;

        applications.push(newApplication);

        res.status(200).json({
            status: "success",
            data: newApplication
        });
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
