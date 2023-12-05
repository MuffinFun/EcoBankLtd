const OffersList = ({name, coast, confirmed}) =>{
    return (
        <div className="offers__item">
            <h2 className="item__name"><strong>{name}</strong></h2>
            <div className="item__coast-confirm">
                <p><span>Coast: </span>{coast}</p>
                <p>{confirmed ? 'Confirmed' : 'Declined'}</p>
            </div>
        </div>
    );
};

export default OffersList;