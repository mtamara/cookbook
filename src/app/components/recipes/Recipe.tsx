import React from 'react';
import { MDBCol, MDBCard, MDBCardImage, MDBBtn, MDBIcon, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import { RecipeProps } from './types';
import { FormattedMessage } from 'react-intl';

const Recipe = React.memo((props: RecipeProps) => {
    return (
        <MDBCol md="6" lg="4" className="recipe-col">
            <MDBCard cascade className="recipe-card">
                <div className="position-relative">
                    <MDBCardImage
                        cascade
                        className='img-fluid'
                        overlay="white-light"
                        hover
                        src={props.imgSource}
                    />
                    <MDBBtn
                        floating
                        tag='a'
                        className='ml-auto mr-4 btn-rounded read-more position-absolute'
                        gradient="peach"
                    >
                        <MDBIcon icon='chevron-right' />
                    </MDBBtn>
                </div>
                <MDBCardBody cascade>
                    <MDBCardTitle>
                        <FormattedMessage id={props.titleId} />
                    </MDBCardTitle>
                    <hr />
                    <MDBCardText className="text-justify">
                        <FormattedMessage id={props.teaserId} />
                    </MDBCardText>
                </MDBCardBody>
                <hr />
                <p className="mb-3 location-text">
                    <MDBIcon icon="globe-americas" className="pr-2" />
                    <FormattedMessage id={`yummyfood.recipe.origin.${props.origin}`} />
                </p>
            </MDBCard>
        </MDBCol >
    );
});

Recipe.displayName = 'Recipe';
export default Recipe;