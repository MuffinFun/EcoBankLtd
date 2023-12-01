import '../../../assets/css/components/CurrentUserData/UserCardList.css';

const UserCardList = ({name, date, pin, cvv}) =>{

    const option = {
        month: 'numeric',
        year: '2-digit'
    };

    const formatedDate = Intl.DateTimeFormat('en-US', option).format(new Date(date));

    return(
        <div className="cards-list__item">
            <h2 className="cards-list__header">{name}</h2>
            <p className="cards-list__date">{formatedDate}</p>
            <div className="cards-list__bottom-block">
                <p><span>PIN:</span>{pin}</p>
                <p><span>CVV:</span>{cvv}</p>
            </div>

        </div>
    );
};

export default UserCardList;