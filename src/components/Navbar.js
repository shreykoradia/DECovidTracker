import React, { useState } from "react";
import {
  NavbarContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../styles/Navbar.style";


function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <RightContainer>
          <NavbarLinkContainer>
            {/* <NavbarLink to="/about"> About </NavbarLink> */}
            <NavbarLink to="/blogs">Blogs</NavbarLink>
            {/* <NavbarLink to="/contact"> Contact </NavbarLink> */}
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/about"> About </NavbarLinkExtended>
          <NavbarLinkExtended to="/blogs"> Blogs</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact"> Contact </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;