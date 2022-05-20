import { Fragment, FunctionalComponent, h } from "preact";
import { useContext } from "preact/hooks";
import Loading from "./components/Loading";
import ReposContext from "./context/ReposContext";

const MockRepos: FunctionalComponent = () => {
  const { data: repos, loading, error } = useContext(ReposContext);

  if (error) {
    console.log(error);
    return <div>Error displaying data</div>;
  }

  console.log("repos", repos);
  if (loading) return <Loading />;

  return (
    <Fragment>
      {repos.items.map((item: any) => {
        return (
          <p key={item.id}>
            {item.id} {item.name}
          </p>
        );
      })}
    </Fragment>
  );
};

export default MockRepos;
