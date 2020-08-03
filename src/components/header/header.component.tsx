import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTh, faCalendar, faMoneyCheck, faUser, faQuestionCircle, faSignOutAlt, faUserCircle, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../images/logo.png';
import './header.component.scss';
import RootContext from '../../root/root.context';

const navList = [
    { label: 'Home', icon: faHome, url: 'home', children: [] },
    { label: 'Projects', icon: faTh, url: 'projects', children: [] },
    { label: 'Timesheets', icon: faCalendar, url: 'timesheets', children: [] },
    { label: 'Status Reports', icon: faTh, url: 'status-reports', children: [] },
    { label: 'Expenses', icon: faMoneyCheck, url: 'expenses', children: [] },
    { label: 'Time-Off', icon: faCalendar, url: 'time-off', children: [] },
    { label: 'User', icon: faUser, url: 'user', children: [] },
    { label: 'Help', icon: faQuestionCircle, url: 'help', children: [
        {label: 'Create Ticket', url: 'create-ticket', children: []},
        {label: 'View Tickets', url: 'view-tickets', children: []},
        {label: 'Resources', url: 'resources', children: []},
        {label: 'Contact Us', url: 'contact-us', children: []},
        {label: 'Instructions', url: 'instructions', children: []},
    ] },
];


interface ITeraHeaderProps { }

const TeraHeader: React.FunctionComponent<ITeraHeaderProps> = (props: ITeraHeaderProps) => {

    const rootContext = useContext(RootContext);

    const onClickSignOut = () => {
        rootContext.handleSignOut();
    };

    return (
        <div className='component-tera-header flex-row'>
            <div className='container-logo'>
                <img src={Logo} alt='logo' height={40} />
            </div>
            <div className='container-nav flex-this flex-row'>
                {navList.map((navItem, idx) => {
                    return (
                        <div className='nav-item' key={idx}>
                            <FontAwesomeIcon icon={navItem.icon} className='nav-icon' />
                            <label className='nav-label'>{navItem.label}</label>
                            {navItem.children.length > 0 ? (
                                <FontAwesomeIcon icon={faAngleDown} />
                            ) : null}
                        </div>
                    );
                })}
            </div>
            <div className='container-profile flex-row'>
                <div>
                    <FontAwesomeIcon icon={faUserCircle} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faSignOutAlt} title='Sign Out' onClick={onClickSignOut} />
                </div>
            </div>
        </div>
    );
};

export default TeraHeader;
