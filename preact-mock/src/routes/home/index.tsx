import { FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import ReposContextProvider from '../../mock/context/ReposContextProvider';
import { useRepos } from '../../mock/hooks/useRepos';
import MockRepos from '../../mock/MockRepos';
import style from './style.css';

const Home: FunctionalComponent = () => {
    return (
        <ReposContextProvider>
            <div class={style.home}>
                <h1>Home</h1>
                <p>This is the Home component.</p>
                <MockRepos />
            </div>
        </ReposContextProvider>
    );
};

export default Home;
