const Cards = require('../models/cards.js');

const cards = new Cards();

const allCards = async (_, res) => {
  try {
    const allCards = await cards.getCards();

    res.status(200).json(allCards);
  } catch (err) {
    console.error(err);
  }
};
const currentCardsInfo = async (req, res) => {
  try {
    const { userId } = req.params;

    const currentCards = await cards.getCardsInfo(userId);

    res.status(200).json(currentCards);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { allCards, currentCardsInfo };
