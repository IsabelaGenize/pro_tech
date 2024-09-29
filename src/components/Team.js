import React from 'react';
import styled from 'styled-components';

const TeamContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f5f5f5;
  color: #333;
`;

const TeamTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const TeamContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TeamImage = styled.img`
  width: 50%;
  border-radius: 10px;
`;

const TeamDescription = styled.p`
  width: 45%;
  font-size: 1rem;
  line-height: 1.6;
`;

const Team = () => {
    return (
        <TeamContainer>
            <TeamTitle>O que Nos Torna Únicos</TeamTitle>
            <TeamContent>
                <TeamImage src="/img/myTeam.png" alt="Nossa equipe" />
                <TeamDescription>
                    Nossa equipe é composta por especialistas apaixonados e experientes, prontos para enfrentar
                    desafios e buscar soluções inovadoras. Investimos constantemente em treinamento e desenvolvimento
                    para garantir que nossos clientes tenham acesso às tecnologias mais avançadas. Ao escolher a ProTech,
                    você está optando por um parceiro tecnológico comprometido com o seu sucesso.
                </TeamDescription>
            </TeamContent>
        </TeamContainer>
    );
};

export default Team;
