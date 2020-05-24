import React from 'react';
import LatestRecipe from './LatestRecipe';
import { RecipeCategoryEnum, ReceipeOriginEnum } from './types';
import { MDBCard, MDBCardBody } from 'mdbreact';
import { FormattedMessage } from 'react-intl';

const LatestRecipes = () => {
    return (
        <MDBCard className="my-5 px-5 pb-5 border-none max-width-1300px homepage">
            <MDBCardBody>
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    <FormattedMessage id="yummyfood.title.recent-recipes" />
                </h2>
                <LatestRecipe
                    imgSource="/images/sopa_de_mani.JPG"
                    category={RecipeCategoryEnum.MAIN_DISH}
                    readMoreLink=""
                    titleId="yummyfood.recipe.title.sopa-mani"
                    origin={ReceipeOriginEnum.BOLIVIA}
                />
                <hr className="my-5" />
                <LatestRecipe
                    imgSource="/images/rolat1.jpg"
                    category={RecipeCategoryEnum.MAIN_DISH}
                    readMoreLink=""
                    titleId="yummyfood.recipe.title.swiss-roll"
                    origin={ReceipeOriginEnum.SWISS}
                />
                <hr className="my-5" />
                <LatestRecipe
                    imgSource="/images/chickpea_curry.jpg"
                    category={RecipeCategoryEnum.MAIN_DISH}
                    readMoreLink=""
                    titleId="yummyfood.recipe.title.chickpea-curry"
                    origin={ReceipeOriginEnum.THAILAND}
                />
                <hr className="my-5" />
                <LatestRecipe
                    imgSource="/images/phad_thai.JPG"
                    category={RecipeCategoryEnum.MAIN_DISH}
                    readMoreLink=""
                    titleId="yummyfood.recipe.title.phad-thai"
                    origin={ReceipeOriginEnum.THAILAND}
                />
            </MDBCardBody>
        </MDBCard>
    );
}

LatestRecipes.displayName = 'LatestRecipes';
export default LatestRecipes;
