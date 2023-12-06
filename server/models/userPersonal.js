const pool = require('../utils/db.js');

class UserPersonal {
  getAllUsersPersonal = async () => {
    try {
      const allUsersPersonal = await pool.query(
        'select ua.id_accounts, ua.username, ua.usersurname, ua.userlastname, ua.userage, ua.usersex from usersAccounts as ua order by id_accounts'
      );
      return allUsersPersonal.rows;
    } catch (error) {
      console.error(error.message);
    }
  };
  getCurrentUserInfo = async () => {
    try {
      const currentUser = await pool.query(
        `select * from get_current_user_info()`
      );
      return currentUser.rows;
    } catch (error) {
      console.error(error.message);
    }
  };
  deleteUser = async (id) => {
    try {
      const deletedUser = await pool.query(
        'delete from usersaccounts where id_accounts=$1',
        [id]
      );
      return deletedUser.rows;
    } catch (error) {
      console.error(error.message);
    }
  };
  updateUser = async (id, name, surname, lastname, age, sex) => {
    try {
      const updatedUser = await pool.query(
        `call update_main_user_info($1,$2,$3,$4,$5,$6,null,null,null);`,
        [id, name, surname, lastname, age, sex]
      );
      return updatedUser;
    } catch (error) {
      console.error(error.message);
    }
  };
}

module.exports = UserPersonal;
