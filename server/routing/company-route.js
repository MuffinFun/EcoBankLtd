const express = require('express');

const router = new express.Router();

const {
  allCompanies,
  getCurrentCompanyInfo,
  getCurrentCompanyOffers,
} = require('../controllers/companies-controller.js');

router.get('/companies', allCompanies);
router.get('/companies/current-company-info', getCurrentCompanyInfo);
router.get(
  '/companies/current-company-info/:companyId',
  getCurrentCompanyOffers
);

module.exports = router;
