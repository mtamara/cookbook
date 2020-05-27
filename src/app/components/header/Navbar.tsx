import React, { useState } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBFormInline, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import { FormattedMessage } from 'react-intl';

const Navbar = () => {
  const [isWideEnough] = useState(false);
  const [collapse, setCollapse] = useState(false);

  return (
    <div>
      <header>
          <MDBNavbar color="peach-gradient" dark expand="md" fixed="top">
            <MDBNavbarBrand href="/">
              <strong>Yummy Food</strong>
            </MDBNavbarBrand>
            {!isWideEnough && <MDBNavbarToggler onClick={() => setCollapse(!collapse)} />}
            <MDBCollapse isOpen={collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink link to="/recipes">
                    <FormattedMessage id="yummyfood.navbar.recipes" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink link to='#!'>
                    <FormattedMessage id="yummyfood.navbar.contact" />
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBFormInline waves>
                    <div className="md-form my-0">
                      <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                  </MDBFormInline>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon="user" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem href="#!">TBD</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
      </header>
    </div>
  )
}

Navbar.displayName = 'Navbar';
export default Navbar;