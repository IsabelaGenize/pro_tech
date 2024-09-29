import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
    height: 40px;
`;

const LogoForm = styled.img`
    height: 100px;
    display: block;
    margin: 0 auto;
`;

const Nav = styled.nav`
    display: flex;
    gap: 1rem;
`;

const NavLink = styled.a`
    color: white;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #142533;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #18BAC7;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  color: #cc0000;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleClickOutside = (e) => {
        if (e.target.id === "modal-background") {
            setShowModal(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para processar os dados do formulário
        setShowModal(false);
    };

    return (
        <>
            <HeaderContainer>
                <Logo src="/img/logo.svg" alt="ProTech Consultancy" />
                <Nav>
                    <NavLink href="#sobre-nos">SOBRE NÓS</NavLink>
                    <NavLink href="#clientes">CLIENTES</NavLink>
                    <NavLink href="#academy">ACADEMY</NavLink>
                    <NavLink href="#contato" onClick={handleOpenModal}>CONTATO</NavLink>
                </Nav>
            </HeaderContainer>
            {showModal && (
                <Modal id="modal-background" onClick={handleClickOutside}>
                    <ModalContent>
                        <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
                        <LogoForm src="/img/logo.svg" alt="logo" />
                        <Title>Cadastre sua Empresa e Faça Parte</Title>
                        <Form onSubmit={handleSubmit}>
                            <Input type="text" placeholder="Nome" required />
                            <Input type="email" placeholder="Email" required />
                            <Input type="tel" placeholder="Telefone" />
                            <SubmitButton type="submit">Enviar</SubmitButton>
                        </Form>
                    </ModalContent>
                </Modal>
            )}
        </>
    );
};

export default Header;
