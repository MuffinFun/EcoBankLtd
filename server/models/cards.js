const pool = require('../utils/db.js');

class Cards {
  getCards = async () => {
    try {
      const allCards = await pool.query('select * from usersaccounts');
      return allCards.rows;
    } catch (error) {
      console.error(error);
    }
  };

  getCardsInfo = async (id) => {
    try {
      const currentCards = await pool.query(
        `select * from get_user_card_data_by_id(${id})`
      );
      return currentCards.rows;
    } catch (error) {
      console.error(error);
    }
  };
}

module.exports = Cards;
