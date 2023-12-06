const pool = require('../utils/db.js');

class Companies {
  getCompanies = async () => {
    try {
      const allCompany = await pool.query(
        'select id_commcompany, companyadress, companyname, companyphonenumber, companyemail, countofbuildings from commercialcompany order by id_commcompany limit 100'
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
  deleteCurrentCompanyData = async (id) => {
    const deletedCompany = await pool.query(
      'delete from commercialcompany where id_commcompany = $1',
      [id]
    );
    return deletedCompany.rows;
  };
  updateCompanyData = async (id, countOfBuild, adress, name, phone, email) => {
    const updatedCompany = await pool.query(
      'call update_main_company_info($1, $2, $3, $4, $5, $6)',
      [id, countOfBuild, adress, name, phone, email]
    );
    return updatedCompany.rows;
  };
}

module.exports = Companies;
