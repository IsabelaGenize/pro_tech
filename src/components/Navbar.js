import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 51, 102, 0.8);
`;

const LanguageSelector = styled.select`
  padding: 5px;
  border-radius: 5px;
  border: none;
  background-color: #005580;
  color: white;
`;

const Logo = styled.h2`
  color: white;
  margin: 0;
`;

const Navbar = ({ setLanguage }) => {
    return (
        <Nav>
            <Logo>Consultoria TI</Logo>
            <LanguageSelector onChange={(e) => setLanguage(e.target.value)}>
                <option value="pt-br">Português</option>
                <option value="en">English</option>
                <option value="es">Español</option>
            </LanguageSelector>
        </Nav>
    );
};

export default Navbar;
