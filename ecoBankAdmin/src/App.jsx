import './assets/css/App/App.css';
import TopLeftLayout from './components/layouts/TopLeftLayout/TopLeftLayout';
import TopRightLayout from './components/layouts/TopRightLayout/TopRightLayout';
import BotLeftLayout from './components/layouts/BotLeftLayout/BotLeftLayout';
import BotRightLayout from './components/layouts/BotRightLayout/BotRightLayout';
import UpdateUserData from './components/UpdateForm/UpdateDataAction/UpdateUserData';
import ConfirmWindow from './components/UpdateForm/ConfirmWindow/ConfirmWindow';

import useFetch from './hooks/useFetch';
import { useEffect, useState } from 'react';

function App() {

    //DATA

    const [currentDataId, setCurrenDataId] = useState(null);
    const [currentDataInfo, setCurrentDataInfo] = useState(null);
    const [dataToUpdate, setDataToUpdate] = useState(null);
    const [dataToDelete, setDataToDelete] = useState(null);

    //URL

    const [dataAbout, setDataAbout] = useState('http://localhost:5000/api/v1/user-personal');
    const [currentDataURL, setCurrentDataURL] = useState('http://localhost:5000/api/v1/user-personal/current-user-info');

    //CHECKING

    const [checkWhatDataAbout, setCheckWhatDataAbout] = useState(false);
    const [checkColumnsName, setCheckColumnsName] = useState(true);
    const [isAction, setIsAction] = useState(null);

    //UTILS
    
    const [retry, setRetry] = useState(false);
    
    const [hiddenConfirm, setHiddenConfirm] = useState(true);
    const [hiddenForm, setHiddenForm] = useState(true);
    
    //GET DATA

    const { value } = useFetch(dataAbout, {}, [retry,dataAbout]);

    useEffect(()=>{
        if(!currentDataId) return;
        const data = value.find(item => item.id_accounts == currentDataId || item.id_commcompany == currentDataId);
        setDataToDelete(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currentDataId]);

    //UTILS FUNC

    const refresh = () => {
        setRetry(!retry);
    };

    const activateConfirmWindow = () => {
        setHiddenConfirm(!hiddenConfirm);
    };
    const activateUpdateForm = () => {
        setHiddenForm(!hiddenForm);
    };
    
    const setAction = (action) =>{
        setIsAction(action);
    };

    //DATA ACTIONS

    const getDataToUpdate = (data) => {
        setDataToUpdate(data);
    };

    const clearCurrentData = () =>{
        setCurrentDataInfo(null);
    };

    //CHECK WHAT DATA 

    const switchCheck = () =>{
        setCheckWhatDataAbout(!checkWhatDataAbout);
    };

    //SWITCH DATA

    const switchDataAbout = (propertyDataAbout) =>{
        setDataAbout(propertyDataAbout);
    };
    const switchcurrentDataURL = (propertyCurrDataAbout) => {
        setCurrentDataURL(propertyCurrDataAbout);
    };
    const toggleColumnsName = (property) =>{
        setCheckColumnsName(property);
    };

    return (
        <>
            <TopLeftLayout clearCurrentData={clearCurrentData} checking={switchCheck} toggleColumnsName={toggleColumnsName} switchData={switchDataAbout} switchCurrData={switchcurrentDataURL}/>
            <TopRightLayout
                selectedId={currentDataId}
                data={currentDataInfo}
                setAction={setAction}
                activateConfirm={activateConfirmWindow}
                activateForm={activateUpdateForm}
                toRetry={refresh}
            />
            <BotLeftLayout
                values={value}
                checkColumnNames={checkColumnsName}
                checkWhatData={checkWhatDataAbout}
                dataURL={currentDataURL}
                setLastId={setCurrenDataId}
                getDataInfo={setCurrentDataInfo}
            />
            <BotRightLayout selectedData={currentDataInfo} checkData={checkWhatDataAbout}/>         
            <UpdateUserData
                hidden={hiddenForm}
                currentData={value}
                selectedId={currentDataId}
                checkWhatData={checkWhatDataAbout}
                getData={getDataToUpdate}
                activateConfirm={activateConfirmWindow}
            />
            <ConfirmWindow
                dataToUpdate={dataToUpdate}
                dataToDelete={dataToDelete}
                selectId={currentDataId}
                users={value}
                action={isAction}
                hidden={hiddenConfirm}
                checkData={checkWhatDataAbout}
                refresh={refresh}
                activateConfirm={activateConfirmWindow}
            />
        </>
    );
}

export default App;
