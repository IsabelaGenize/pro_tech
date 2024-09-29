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
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
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
  background-color: #005580;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  padding: 5px 10px;
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Adicione aqui a lógica para processar os dados do formulário
        setShowModal(false);
    };

    return (
        <>
            <HeaderContainer>
                <Logo src="/path-to-your-logo.png" alt="ProTech Consultancy" />
                <Nav>
                    <NavLink href="#sobre-nos">SOBRE NÓS</NavLink>
                    <NavLink href="#clientes">CLIENTES</NavLink>
                    <NavLink href="#academy">ACADEMY</NavLink>
                    <NavLink href="#contato" onClick={handleOpenModal}>CONTATO</NavLink>
                </Nav>
            </HeaderContainer>
            {showModal && (
                <Modal>
                    <ModalContent>
                        <h2>Formulário de Cadastro</h2>
                        <Form onSubmit={handleSubmit}>
                            <Input type="text" placeholder="Nome" required />
                            <Input type="email" placeholder="Email" required />
                            <Input type="tel" placeholder="Telefone" />
                            <SubmitButton type="submit">Enviar</SubmitButton>
                            <CloseButton onClick={handleCloseModal}>Fechar</CloseButton>
                        </Form>
                    </ModalContent>
                </Modal>
            )}
        </>
    );
};

export default Header;
