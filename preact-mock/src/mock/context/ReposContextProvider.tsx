import { FunctionComponent } from "preact";
import { h } from "preact";
import ReposContext from "./ReposContext";
import useRepos from "../hooks/useRepos";

const ReposContextProvider: FunctionComponent = ({ children }) => {
  const { data, loading, error } = useRepos();

  const value = { data, loading, error };

  return (
    <ReposContext.Provider value={value}>{children}</ReposContext.Provider>
  );
};

export default ReposContextProvider;
