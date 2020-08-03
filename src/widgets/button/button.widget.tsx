
import React from 'react';

interface ITeraButton {
    text?: string;
    className?: string;
    onClick?: Function;
    color?: string;
}

export const TeraButton: React.FunctionComponent<ITeraButton> = (props: ITeraButton) => {

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (props.onClick) {
            props.onClick(event);
        }
    };

    return <button className={props.className || ''} onChange={clickHandler}>{props.text || ''}</button>
};
