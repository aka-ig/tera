import React, { useState } from 'react';
import './body.component.scss';

interface ITeraBodyProps { }

const TeraBody: React.FunctionComponent<ITeraBodyProps> = (props: ITeraBodyProps) => {
    return (
        <div className='component-tera-body flex-this'>
            Body
        </div>
    );
};

export default TeraBody;
