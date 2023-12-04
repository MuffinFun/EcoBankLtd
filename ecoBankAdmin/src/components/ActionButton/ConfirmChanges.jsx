import { useEffect, useState } from 'react';

const ConfirmChanges = ({selectedId, newData, users,refresh}) => {
    const [cur, setCurrentUserMainInfo] = useState(null);
    useEffect(()=>{
        const data = Object.values(users.find(e=>e.id_accounts==selectedId)).slice(1);

        setCurrentUserMainInfo(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selectedId]);

    const putUpdates = async(e)=>{
        e.preventDefault();
        try {
            const body = newData;
            console.log(JSON.stringify(body));
            console.log(cur);
            const response = await fetch(`http://localhost:5000/api/v1/user-personal/update-current-user/${selectedId}`, {
                method: 'PUT',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({body})
            });
            refresh();
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error.message());
        }
    };


    return (
        <button onClick={(e)=>putUpdates(e)}>YES</button>
    );
};

export default ConfirmChanges;