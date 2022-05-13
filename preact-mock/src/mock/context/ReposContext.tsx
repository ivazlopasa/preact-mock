import { createContext } from 'preact';

const ReposContext = createContext<any>({
    repos: {},
    setRepos: () => {},
});

export default ReposContext;
