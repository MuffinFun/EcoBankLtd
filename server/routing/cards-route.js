const express = require('express');

const router = new express.Router();

const {
  allCards,
  currentCardsInfo,
} = require('../controllers/cards-controller.js');

router.get('/user-cards', allCards);
router.get('/user-cards/:userId', currentCardsInfo);

module.exports = router;
