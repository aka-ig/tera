import React from 'react';

interface IRootContext {
    handleSignIn: (username: string, password: string) => void;
    handleSignOut: () => void;
};

const RootContext = React.createContext<IRootContext>({
    handleSignIn: (username: string, password: string) => {},
    handleSignOut: () => {}
});

export default RootContext;
