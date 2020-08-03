import React, { useState } from 'react';
import './root.component.scss';
import TeraMasterPage from '../pages/master/master.page';
import TeraLoginPage from '../pages/login/login.page';
import RootContext from './root.context';

interface ITeraRootComponentProps { }

const TeraRoot: React.FunctionComponent<ITeraRootComponentProps> = (props: ITeraRootComponentProps) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleSignIn = (username: string, password: string) => {
        const postData = { username, password };
        // TODO
        setIsLoggedIn(true);
    };
    const handleSignOut = () => {
        // TODO
        setIsLoggedIn(false);
    };

    return (
        <RootContext.Provider value={{ handleSignIn, handleSignOut }}>
            <div className='component-tera-root flex-column'>
                {isLoggedIn ? <TeraMasterPage /> : <TeraLoginPage />}
            </div>
        </RootContext.Provider>
    );
};

export default TeraRoot;