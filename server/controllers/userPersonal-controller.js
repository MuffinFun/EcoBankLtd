const userPersonal = require('../models/userPersonal.js');

const users = new userPersonal();

const getAllUserPersonal = async (_, res) => {
  try {
    const allUsers = await users.getAllUsersPersonal();

    res.status(200).json(allUsers);
  } catch (err) {
    console.error(err);
  }
};

const getCurrentUserInfo = async (_, res) => {
  try {
    const currentUser = await users.getCurrentUserInfo();

    res.status(200).json(currentUser);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getAllUserPersonal, getCurrentUserInfo };
