import { createContext } from "preact";

const ReposContext = createContext<any>({
  repos: {},
});

export default ReposContext;
