const express = require("express");
const router = express.Router();

const companies = require("../data/companies");


router
    .get("/", (req, res) => {
        const { name, industry } = req.query;
        let filteredCompanies = companies;

        if (name) filteredCompanies = filteredCompanies.filter(company => company.name.toLowerCase() === name.toLowerCase());

        if (industry) filteredCompanies = filteredCompanies.filter(company => company.industry.toLowerCase() === industry.toLowerCase());

        res.json(filteredCompanies);
    })
    .post("/", (req, res) => {
        const newCompany = { id: companies.length + 1, ...req.body };

        if (!newCompany.name || !newCompany.industry || !newCompany.employees || !newCompany.webpage || !newCompany.email) {
            res.status(400).json({ msg: "Please include company name and industry" });
            return;
        }

        companies.push(newCompany);
        res.status(200).json(newCompany);
    })
    .patch("/:id", (req, res) => {
        const company = companies.find(company => company.id == req.params.id);

        if (!company) {
            return res.status(404).json({ error: "Company not found" });
        }

        company.name = req.body.name;
        company.industry = req.body.industry;
        company.employees = req.body.employees;
        company.webpage = req.body.webpage;
        company.email = req.body.email;

        res.json(company);
    })
    .delete("/:id", (req, res) => {
        const company = companies.find(company => company.id == req.params.id);

        if (!company) {
            return res.status(404).json({ error: "Company not found" });
        }

        companies.splice(companies.indexOf(company), 1);

        res.status(200).send("Company deleted successfully");
    });


module.exports = router;