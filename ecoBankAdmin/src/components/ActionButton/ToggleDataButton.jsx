import { useEffect, useState } from 'react';
import '../../assets/css/components/ActionButton/ToggleButton.css';

const ToggleDataButton = ({switchData, switchCurrData, toggleColumnsName, checking, clearData})=>{

    const [isUsers, setIsUsers] = useState(true);

    useEffect(()=>{
        clearData();
        const dataAbout = isUsers ? 'http://localhost:5000/api/v1/user-personal' : 'http://localhost:5000/api/v1/companies';
        const currDataAbout = isUsers ? 'http://localhost:5000/api/v1/user-personal/current-user-info' : 'http://localhost:5000/api/v1/companies/current-company-info';
        
        switchData(dataAbout);
        switchCurrData(currDataAbout);
        checking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isUsers]);

    const changeData = ()=> {
        setIsUsers(!isUsers);
        toggleColumnsName(!isUsers);
    };

    return (
        <button className='toggle-button' onClick={()=>changeData()}>{isUsers ? 'view companies' : 'view users'}</button>
    );
};

export default ToggleDataButton;