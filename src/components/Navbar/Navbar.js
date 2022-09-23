import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavTitle,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './Navbar.elements';
import { IconContext } from 'react-icons/lib';


const Navbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              <NavIcon />
              <NavTitle>Higginbotham</NavTitle>
            </NavLogo>

            <MobileIcon onClick={handleClick}>
              {!!click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/tree' onClick={closeMobileMenu}>
                  Tree
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/docs' onClick={closeMobileMenu}>
                  Docs
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/stories' onClick={closeMobileMenu}>
                  Stories
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/notes' onClick={closeMobileMenu}>
                  Notes
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>

        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar