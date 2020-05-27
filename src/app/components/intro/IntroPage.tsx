import React from 'react';
import LatestRecipes from '../recipes/LatestRecipes';
import HeaderImage from './HeaderImage';

const IntroPage = () => {
    return (
        <React.Fragment>
            <HeaderImage />
            <LatestRecipes />
        </React.Fragment>
    );
}

IntroPage.displayName = 'IntroPage';
export default IntroPage;