import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const ManageInventories = () => {
    const[user]= useAuthState(auth);

    return (
        <div>
            

        </div>
    );
};

export default ManageInventories;