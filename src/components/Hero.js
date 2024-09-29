import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const HeroContent = styled.div`
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
`;

const Hero = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroTitle>SOFTWARE DEVELOPMENT</HeroTitle>
                <HeroSubtitle>Soluções tecnológicas para o seu negócio</HeroSubtitle>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;
