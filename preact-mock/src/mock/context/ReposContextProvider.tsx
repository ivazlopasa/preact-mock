import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import { h } from 'preact';
import ReposContext from './ReposContext';

const ReposContextProvider: FunctionComponent = ({ children }) => {
    const [repos, setRepos] = useState<any>();

    const value = { repos, setRepos };

    return (
        <ReposContext.Provider value={value}>{children}</ReposContext.Provider>
    );
};

export default ReposContextProvider;
