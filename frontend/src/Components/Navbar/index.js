import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Wrapper, ItemsWrapper, LogoAndText, Menus, NavItem, NavTitle, Container } from './style'

const Navbar = styled.nav`
text-align:center;
  padding: 0.5rem 10%;
  width: 80%;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: #f7f7f7;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%), 0 6px 20px 2px rgb(0 0 0 / 3%);
  @media screen and (max-width: 768px) {
    padding: 0.5rem 5px;
  }
`


export const NavBar = () => (
  <Container>
  <Wrapper>
    <Navbar>
      <ItemsWrapper>
        <Link to="/">
          <LogoAndText>
            
            <NavTitle>Sesin Çıksın</NavTitle>
          </LogoAndText>
        </Link>
        <Menus id="mobileMenu">
          <NavItem>
            <Link to="/#" style={{ color: '#ED553B' }}>
              Text Areas
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/#" style={{ color: '#ED553B' }}>
              Meme Station
            </Link>
          </NavItem>
          <NavItem>
          <Link to="/#" style={{ color: '#ED553B' }}>
              Explore
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/#" style={{ color: '#ED553B'}}>
              Account
            </Link>
          </NavItem>
        </Menus>
      </ItemsWrapper>
    </Navbar>
  </Wrapper>
  </Container>
)

export default NavBar