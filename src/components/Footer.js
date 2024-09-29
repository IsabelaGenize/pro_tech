import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #001f3f;
  color: white;
  padding: 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterColumn = styled.div`
  flex: 1;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterColumn>
                    <FooterTitle>Serviços</FooterTitle>
                    <FooterLink href="#">Desenvolvimento de Software</FooterLink>
                    <FooterLink href="#">Consultoria em TI</FooterLink>
                    <FooterLink href="#">Data Science</FooterLink>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle>Links</FooterTitle>
                    <FooterLink href="#">Início</FooterLink>
                    <FooterLink href="#">Clientes</FooterLink>
                    <FooterLink href="#">Contato</FooterLink>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle>Contato</FooterTitle>
                    <FooterLink href="tel:+5511918505030">+55 (11) 91850-5030</FooterLink>
                    <FooterLink href="mailto:contato@protech-consultancy.com">contato@protech-consultancy.com</FooterLink>
                </FooterColumn>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;
