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
            <NavbarLink to="/team">Team</NavbarLink>
            <NavbarLink to="/api">API's</NavbarLink>
            <NavbarLink to="/docs">Docs</NavbarLink>
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
          <NavbarLinkExtended to="/team">Team</NavbarLinkExtended>
          <NavbarLinkExtended to="/api"> API's</NavbarLinkExtended>
          <NavbarLinkExtended to="/Docs">Docs</NavbarLinkExtended>

        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;