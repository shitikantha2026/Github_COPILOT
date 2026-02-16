import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Dashboard: React.FC = () => {
    const { user, signOut } = useAuth();
    const history = useHistory();

    useEffect(() => {
        if (!user) history.replace('/signin');
    }, [user, history]);

    if (!user) return null;

    return (
        <div>
            <h2>Welcome, {user.username}!</h2>
            <button onClick={() => { signOut(); history.push('/signin'); }}>Sign out</button>
        </div>
    );
};

export default Dashboard;