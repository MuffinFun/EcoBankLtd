const express = require('express');

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
}

module.exports = UserPersonal;
