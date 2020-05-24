import React from 'react';
import { MDBFooter, MDBContainer } from 'mdbreact';

const Footer = () => {
    return (
        <MDBFooter color="mdb-color">
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.linkedin.com/in/tamara-milovanovic-5a817467/"> Tamara Milovanović </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
};

Footer.displayName = 'Footer';
export default Footer;