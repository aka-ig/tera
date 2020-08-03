import React, { useState } from 'react';
import './master.page.scss';
import TeraHeader from '../../components/header/header.component';
import TeraBody from '../../components/body/body.component';

interface ITeraMasterPageProps { }

const TeraMasterPage: React.FunctionComponent<ITeraMasterPageProps> = (props: ITeraMasterPageProps) => {
    return (
        <div className='component-tera-master-page'>
            <TeraHeader />
            <TeraBody />
        </div>
    );
};

export default TeraMasterPage;