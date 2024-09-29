import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 4rem 2rem;
  background-color: #f5f5f5;
  color: #333;
`;

const AboutColumn = styled.div`
  flex: 1;
  padding: 0 1rem;
`;

const AboutTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const About = () => {
    return (
        <AboutContainer>
            <AboutColumn>
                <AboutTitle>Sobre Nós</AboutTitle>
                <AboutText>
                    A ProTech Consultancy é uma empresa estratégica comprometida com a excelência e a inovação
                    na área de TI. Nossa missão é fornecer soluções tecnológicas de ponta para impulsionar o
                    sucesso dos nossos clientes...
                </AboutText>
            </AboutColumn>
            <AboutColumn>
                <AboutTitle>Visão</AboutTitle>
                <AboutText>
                    Ser a referência absoluta em gestão de TI, revolucionando a forma como as empresas
                    utilizam a tecnologia para alcançar seus objetivos...
                </AboutText>
            </AboutColumn>
            <AboutColumn>
                <AboutTitle>Missão</AboutTitle>
                <AboutText>
                    Fornecer as mais inovadoras soluções em gestão, processos e tecnologia para nossos
                    clientes, garantindo excelência operacional e vantagem competitiva...
                </AboutText>
            </AboutColumn>
        </AboutContainer>
    );
};

export default About;
