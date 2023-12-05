import '../../../assets/css/components/Actions/UpdateDataAction/UpdateUserData.css';
import UpdateFormInputs from '../UpdateFormInputs/UpdateFormInputs';
import { useEffect, useState} from 'react';

const UpdateUserData = ({ hidden, currentValues , selectedUser, getData}) => {
    
    const [newData, setNewData] = useState(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=> getData(newData),[newData]);

    if(!currentValues) return;

    const hideForm = hidden ? 'hidden' : '';

    const checkString = (...arrayOfData) =>arrayOfData.map(item=>isNaN(item) ? item : null);

    const onSubmit = (e)=>{
        e.preventDefault();
        const age =  +e.target[3].value >= 18 ? +e.target[3].value : null;
        const checkedData = checkString(e.target[0].value,e.target[1].value,e.target[2].value,e.target[4].value);
        setNewData({
            newName: checkedData[0],
            newSurName: checkedData[1],
            newLastName: checkedData[2],
            newAge: age,
            newSex: checkedData[3],
        });
        
    };

    const checkEnter = (e) => {
        if(e.keyCode == 13) e.preventDefault();
    };

    return (
        <form className={`update-form ${hideForm}`}
        onSubmit={(e)=>onSubmit(e)}
        onKeyDown={e=>checkEnter(e)}
        >    
            <UpdateFormInputs currVal={currentValues} userId={selectedUser}/>
            <button className='update-form__submit-button' type='submit'>to confirm</button>
        </form>
    );
};

export default UpdateUserData;