import React from 'react';
import { MDBView, MDBMask } from 'mdbreact';
import { FormattedMessage } from 'react-intl';
import './Header.css';

const HeaderImage = () => {
    return (
        <MDBView src="/images/homepage.JPG" className="background-position-homepage">
            <MDBMask overlay="stylish-light" className="flex-center flex-column text-white text-center">
                <h2><FormattedMessage id="yummyfood.homepage.title" /></h2>
                <h5><FormattedMessage id="yummyfood.homepage.subtitle" /></h5>
                <br />
                <p><FormattedMessage id="yummyfood.homepage.description" /></p>
            </MDBMask>
        </MDBView>
    );
};

HeaderImage.displayName = 'HeaderImage';
export default HeaderImage;