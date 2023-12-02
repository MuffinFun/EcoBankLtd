import '../../../assets/css/components/Actions/UpdateDataAction/UpdateUserData.css';

const UpdateFormInputs = ({currVal, userId})=>{
    
    const startValue = currVal.find(item => item.id_accounts == userId);
    if(!startValue) return;

    return(
        <div className='update-form__input-container'>
                <input className='update-form__input' type="text" placeholder={startValue.username} name='name'/>
                <input className='update-form__input' type="text" placeholder={startValue.usersurname} name='surname' />
                <input className='update-form__input' type="text" placeholder={startValue.userlastname} name='lastname' />
                <input className='update-form__input' type="text" placeholder={startValue.userage} name='age' />
                <input className='update-form__input' type="text" placeholder={startValue.usersex} name='sex' />
        </div>
    );
};

export default UpdateFormInputs;