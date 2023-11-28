const express = require('express');

const pool = require('../utils/db.js');

class UserPersonal {
  getAllUsersPersonal = async () => {
    try {
      const allUsersPersonal = await pool.query(
        'select ua.id_accounts, ua.username, ua.usersurname, ua.userlastname, ua.userage, ua.usersex from usersAccounts as ua'
      );
      return allUsersPersonal.rows;
    } catch (error) {
      console.error(error.message);
    }
  };
  getCurrentUserInfo = async () => {
    try {
      const currentUser = await pool.query(
        `select * from get_user_info_by_id()`
      );
      return currentUser.rows;
    } catch (error) {
      console.error(error.message);
    }
  };
}

module.exports = UserPersonal;
