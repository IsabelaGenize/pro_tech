import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #003366;
  color: white;
`;

const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const FeatureItem = styled.li`
  flex: 0 0 30%;
  margin-bottom: 2rem;
  text-align: center;
`;

const FeatureIcon = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
`;

const Features = () => {
    const features = [
        { icon: '/icons/excelencia 1.png', title: 'Excelência', description: 'Nos destacamos em oferecer soluções superiores...' },
        { icon: '/icons/aperto-de-mao 1.png', title: 'Comprometimento', description: 'Estamos totalmente dedicados ao sucesso dos nossos clientes...' },
        { icon: '/icons/integridade 1.png', title: 'Integridade', description: 'Operamos com os mais altos padrões éticos...' },
        { icon: '/icons/lei 1.png', title: 'Transparência', description: 'Mantemos uma comunicação clara e honesta...' },
        { icon: '/icons/inovacao 1.png', title: 'Inovação', description: 'Buscamos constantemente novas tecnologias e abordagens...' },
    ];

    return (
        <FeaturesContainer>
            <FeaturesList>
                {features.map((feature, index) => (
                    <FeatureItem key={index}>
                        <FeatureIcon src={feature.icon} alt={feature.title} />
                        <FeatureTitle>{feature.title}</FeatureTitle>
                        <FeatureDescription>{feature.description}</FeatureDescription>
                    </FeatureItem>
                ))}
            </FeaturesList>
        </FeaturesContainer>
    );
};

export default Features;
