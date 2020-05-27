import React from 'react';
import Recipe from './Recipe';
import { MDBContainer, MDBRow } from 'mdbreact';
import './Recipes.css';
import { RecipeCategoryEnum, ReceipeOriginEnum } from './types';

const Recipes = () => {
    return (
        <MDBContainer className="recipes-container">
            <MDBRow>
                <Recipe
                    imgSource="/images/tortellini.JPG"
                    category={RecipeCategoryEnum.MAIN_DISH}
                    readMoreLink=""
                    titleId="yummyfood.recipe.title.tortellini"
                    origin={ReceipeOriginEnum.ITALIA}
                    teaserId="yummyfood.recipe.teaser.swiss-roll"
                />
                <Recipe
                    imgSource="/images/rolat.JPG"
                    category={RecipeCategoryEnum.MAIN_DISH}
                    readMoreLink=""
                    titleId="yummyfood.recipe.title.swiss-roll"
                    origin={ReceipeOriginEnum.CENTRAL_EUROPE}
                    teaserId="yummyfood.recipe.teaser.swiss-roll"
                />
                <Recipe
                    imgSource="/images/chickpea_curry.JPG"
                    category={RecipeCategoryEnum.MAIN_DISH}
                    readMoreLink=""
                    titleId="yummyfood.recipe.title.chickpea-curry"
                    origin={ReceipeOriginEnum.THAILAND}
                    teaserId="yummyfood.recipe.teaser.chickpea-curry"
                />
                <Recipe
                    imgSource="/images/sopa_de_mani.JPG"
                    category={RecipeCategoryEnum.MAIN_DISH}
                    readMoreLink=""
                    titleId="yummyfood.recipe.title.sopa-mani"
                    origin={ReceipeOriginEnum.BOLIVIA}
                    teaserId="yummyfood.recipe.teaser.sopa-mani"
                />
                <Recipe
                    imgSource="/images/gibanica.jpg"
                    category={RecipeCategoryEnum.MAIN_DISH}
                    readMoreLink=""
                    titleId="yummyfood.recipe.title.gibanica"
                    origin={ReceipeOriginEnum.SERBIA}
                    teaserId="yummyfood.recipe.teaser.gibanica"
                />
                <Recipe
                    imgSource="/images/phad_thai.JPG"
                    category={RecipeCategoryEnum.MAIN_DISH}
                    readMoreLink=""
                    titleId="yummyfood.recipe.title.phad-thai"
                    origin={ReceipeOriginEnum.THAILAND}
                    teaserId="yummyfood.recipe.teaser.phad-thai"
                />
            </MDBRow>
        </MDBContainer>
    );
};

Recipes.displayName = 'Recipes';
export default Recipes;