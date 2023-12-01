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
}

module.exports = UserPersonal;
