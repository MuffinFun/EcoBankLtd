import '../../../assets/css/components/Actions/ConfirmWindow/ConfirmWindow.css';

const ConfirmWindow = ({hidden})=>{

    const hiddenModal = hidden ? 'hidden' : '';

    return (
        <div className={`confirm ${hiddenModal}`}>
            <div className="confirm__text-block">
                <h2><strong>want to chage data?</strong></h2>
                <p>tut budut data kotorie izmenutsya</p>
            </div>
            <div className="confirm__button-block">
                <button>YES</button>
                <button>NO</button>
            </div>
        </div>
    );
};

export default ConfirmWindow;