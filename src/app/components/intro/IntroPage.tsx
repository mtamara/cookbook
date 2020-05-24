import React from 'react';
import LatestRecipes from '../latestRecipes/LatestRecipes';
import HeaderImage from '../header/HeaderImage';

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