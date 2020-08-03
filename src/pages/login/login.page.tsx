import React, { useContext, useEffect, useState } from 'react';
import './login.page.scss';
import Logo from '../../images/logo.png';
import RootContext from '../../root/root.context';

interface ITeraLoginPageProps { }

const TeraLoginPage: React.FunctionComponent<ITeraLoginPageProps> = (props: ITeraLoginPageProps) => {

    const rootContext = useContext(RootContext);

    const [rememberUser, setRememberUser] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    useEffect(() => {
        const nextRememberUser = window.localStorage.getItem('remember-user');
        setRememberUser(nextRememberUser === 'true');
        if (nextRememberUser === 'true') {
            const nextUsername = window.localStorage.getItem('username');
            setUsername(nextUsername || '');
        }
    }, []);

    const onClickSignIn = () => {
        window.localStorage.setItem('username', username);
        rootContext.handleSignIn(username, password);
    };

    const onChangeRemeberUser = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nextRememberUser = event.target.checked;
        setRememberUser(nextRememberUser);
        window.localStorage.setItem('remember-user', String(nextRememberUser));
    }

    return (
        <div className='component-tera-login-page flex-this'>
            <div className='container-login'>
                <div className='group-logo'>
                    <img src={Logo} alt='logo' />
                </div>
                <div className='form-group flex-column'>
                    <label className='form-label'>Username</label>
                    <input className='form-control' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='form-group flex-column'>
                    <label className='form-label'>Password</label>
                    <input className='form-control' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='form-group flex-row margin-top-20'>
                    <button className='btn btn-primary flex-this' onClick={onClickSignIn} disabled={!username || !password}>Sign In</button>
                </div>
                <div className='form-group'>
                    <div className='pull-left'>
                        <input type='checkbox' checked={rememberUser} onChange={onChangeRemeberUser} />
                        <span>Remember Me</span>
                    </div>
                    <div className='pull-right'>
                        <a className='link-forgot-password'>Forgot Password</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeraLoginPage;
