const express = require('express');

const router = new express.Router();

const { getCards } = require('../controllers/cards-controller.js');

router.get('/user-personal', getAllUserPersonal);

module.exports = router;
