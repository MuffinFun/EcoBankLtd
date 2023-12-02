import '../../../assets/css/components/Actions/UpdateDataAction/UpdateUserData.css';
import SubmitButton from '../SubmitButton/SubmitButton';
import UpdateFormInputs from '../UpdateFormInputs/UpdateFormInputs';
import { useState, useEffect } from 'react';

const UpdateUserData = ({ hidden, currentValues , selectedUser, refresh}) => {
    const [newData, setNewData] = useState({
        newName: '',
        newSurName: '',
        newLastName: '',
        newAge: '',
        newSex: '',
    });

    useEffect(()=>console.log(newData),[newData]);

    if(!currentValues) return;

    const hideForm = hidden ? 'hidden' : '';

    const onSubmit = (e)=>{
        e.preventDefault();
        setNewData({
            newName: e.target[0].value || null,
            newSurName: e.target[1].value || null,
            newLastName: e.target[2].value || null,
            newAge: e.target[3].value || null,
            newSex: e.target[4].value || null,
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
            <SubmitButton refresh={refresh} data={newData}/>
        </form>
    );
};

export default UpdateUserData;