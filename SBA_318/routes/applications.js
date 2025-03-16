const express = require("express");
const router = express.Router();

const applications = require("../data/applications");
const companies = require("../data/companies");

const validStatuses = ["pending", "accepted", "rejected"];

router
    .get("/form", (req, res) => {

        const newFormatApplications = applications.map(application => {
            const company = companies.find(company => company.id === application.companyId);
            return {
                ...application,
                company: {
                    name: company.name,
                    industry: company.industry,
                    employees: company.employees,
                    webpage: company.webpage,
                    email: company.email
                }
            };
        });

        res.render('applications', { applications: newFormatApplications });
    });

router
    .get("/", (req, res) => {
        const { status, company } = req.query;
        let filteredApps = applications;

        if (status) filteredApps = filteredApps.filter(app => app.status.toLowerCase() === status.toLowerCase());

        // get company id from company name
        if (company) {
            const companyObj = companies.find(c => c.name.toLowerCase() === company.toLowerCase());
            if (!companyObj) {
                return res.status(404).json({ error: "Company not found try to add first to companies." });
            }
            filteredApps = filteredApps.filter(app => app.companyId === companyObj.id);
        }

        const filteredApps2 = applications.map(application => {
            const company = companies.find(company => company.id === application.companyId);

            return {
                ...application,
                company: {
                    name: company.name,
                    industry: company.industry,
                    employees: company.employees,
                    webpage: company.webpage,
                    email: company.email
                }
            };
        });

        res.json(filteredApps2);
    })
    .post("/", (req, res) => {
        const newApplication = { id: applications.length + 1, ...req.body };

        //validate request
        if (!newApplication.company || !newApplication.position) {
            return res.status(400).json({ msg: "Please include company, and position" });
        }

        const company = companies.find(c => c.id === newApplication.companyId);
        // check if company exists
        if (!company) {
            return res.status(400).json({ msg: "Company not found" });
        } else {
            newApplication.companyId = company.id;
            // remove company from the object newApplication
            delete newApplication.company;
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