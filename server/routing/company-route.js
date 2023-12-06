const express = require('express');

const router = new express.Router();

const {
  allCompanies,
  getCurrentCompanyInfo,
  getCurrentCompanyOffers,
  deleteCompanyData,
  updateCompanyMainInfo,
} = require('../controllers/companies-controller.js');

router.get('/companies', allCompanies);
router.get('/companies/current-company-info', getCurrentCompanyInfo);
router.get(
  '/companies/current-company-info/:companyId',
  getCurrentCompanyOffers
);
router.delete('/companies/delete/:companyId', deleteCompanyData);
router.put('/companies/update/:companyId', updateCompanyMainInfo);

module.exports = router;
