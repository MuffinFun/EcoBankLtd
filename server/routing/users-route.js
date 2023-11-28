const express = require('express');

const router = new express.Router();

const {
  getAllUserPersonal,
  getCurrentUserInfo,
} = require('../controllers/userPersonal-controller.js');

router.get('/user-personal', getAllUserPersonal);
router.get('/user-personal/current-user-info', getCurrentUserInfo);

module.exports = router;
