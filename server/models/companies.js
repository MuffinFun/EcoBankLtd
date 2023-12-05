const pool = require('../utils/db.js');

class Companies {
  getCompanies = async () => {
    try {
      const allCompany = await pool.query(
        'select * from commercialcompany order by id_commcompany'
      );
      return allCompany.rows;
    } catch (error) {
      console.error(error);
    }
  };
  getCurrentInfo = async () => {
    const currentInfo = await pool.query(
      'select * from get_current_company_info()'
    );
    return currentInfo.rows;
  };
  getCurrentOffers = async (id) => {
    const offers = await pool.query('select * from get_company_offers($1)', [
      id,
    ]);
    return offers.rows;
  };
}

module.exports = Companies;
