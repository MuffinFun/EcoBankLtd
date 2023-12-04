const userPersonal = require('../models/userPersonal.js');

const users = new userPersonal();

const getAllUserPersonal = async (_, res) => {
  try {
    const allUsers = await users.getAllUsersPersonal();

    res.status(200).json(allUsers);
  } catch (err) {
    console.error(err.message);
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
const deleteCurrentUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const userForDelete = await users.deleteUser(userId);

    res.status(200).json(`User was deleted`);
  } catch (error) {
    console.error(error.message);
  }
};
const updateCurrentUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { body } = req.body;
    const updateUser = await users.updateUser(userId, ...body);
    res.status(200).json('User was Updated!!!');
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getAllUserPersonal,
  getCurrentUserInfo,
  deleteCurrentUser,
  updateCurrentUser,
};
