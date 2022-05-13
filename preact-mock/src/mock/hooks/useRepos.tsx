import { useEffect, useState } from 'preact/hooks';

export const useRepos = () => {
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any>();

    useEffect(() => {
        fetch(
            'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars'
        )
            .then((response) => response.json())
            .then((data) => setData(data))
            .then((loading) => setLoading(false))
            .catch(setError);
    }, []);

    return { data, error, loading };
};

export default useRepos;
