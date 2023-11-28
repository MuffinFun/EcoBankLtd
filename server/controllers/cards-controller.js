const Cards = require('../models/cards.js');

const users = new Cards();

const getCards = async (req, res) => {
  try {
    const cards = await users.getAllUsersPersonal();

    res.status(200).json({ cards });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { cards };
