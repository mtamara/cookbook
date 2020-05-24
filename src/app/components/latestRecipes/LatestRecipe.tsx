import React from 'react';
import { MDBRow, MDBCol, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import './LatestRecipes.css';
import { LatestRecipeProps } from './types';
import { FormattedMessage } from 'react-intl';

const LatestRecipe = React.memo((props: LatestRecipeProps) => {
    return (
        <MDBRow>
            <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4 max-height-350px" hover waves>
                    <img
                        className="img-fluid"
                        src={props.imgSource}
                        alt=""
                    />
                    <a href="#!">
                        <MDBMask overlay="white-slight" />
                    </a>
                </MDBView>
            </MDBCol>
            <MDBCol lg="7">
                <a href="#!" className="green-text">
                    <h6 className="font-weight-bold mb-3">
                        <MDBIcon icon="utensils" className="pr-2" />
                                    Food
                            </h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0">
                    <strong><FormattedMessage id={props.titleId} /></strong>
                </h3>
                <p>
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque
                    nihil impedit quo minus id quod maxime placeat facere possimus,
                    omnis voluptas assumenda est, omnis dolor repellendus et aut
                    officiis debitis.
                        </p>
                <h6 className="font-weight-bold mb-3">
                    <MDBIcon icon="globe-americas" className="pr-2" />
                    <FormattedMessage id={`yummyfood.recipe.origin.${props.origin}`} />
                </h6>
                <MDBBtn color="deep-orange" size="sm" className="waves-light ">
                    <FormattedMessage id="yummyfood.btn.read-more" />
                </MDBBtn>
            </MDBCol>
        </MDBRow>
    );
});

LatestRecipe.displayName = 'LatestRecipe';
export default LatestRecipe;