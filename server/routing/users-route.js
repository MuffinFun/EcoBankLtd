const express = require('express');

const router = new express.Router();

const {
  getAllUserPersonal,
  getCurrentUserInfo,
  deleteCurrentUser,
  updateCurrentUser,
} = require('../controllers/userPersonal-controller.js');

router.get('/user-personal', getAllUserPersonal);
router.get('/user-personal/current-user-info', getCurrentUserInfo);
router.delete('/user-personal/delete-current-user/:userId', deleteCurrentUser);
router.put('/user-personal/update-current-user/:userId', updateCurrentUser);

module.exports = router;
