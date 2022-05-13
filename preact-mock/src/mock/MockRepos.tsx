import { Fragment, FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import Loading from './components/Loading';
import ReposContext from './context/ReposContext';
import useRepos from './hooks/useRepos';

const MockRepos: FunctionalComponent = () => {
    const { repos, setRepos } = useContext(ReposContext);
    const { data, loading, error } = useRepos();

    setRepos(data);

    if (error) {
        console.log(error);
        return <div>Error displaying data</div>;
    }

    console.log('repos', repos);
    if (loading) return <Loading />;

    return (
        <Fragment>
            {repos &&
                repos?.items.map((item: any) => {
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
