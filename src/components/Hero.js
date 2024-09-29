import React, { useState, useEffect } from 'react';
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
  const titles = [
    'SOFTWARE DEVELOPMENT',
    'INNOVATIVE SOLUTIONS',
    'EXPERT CONSULTING'
  ];

  const subtitles = [
    'Soluções tecnológicas para o seu negócio',
    'Inovações para transformar sua empresa',
    'Consultoria especializada para seu projeto'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000); // Troca de texto a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
  }, [titles.length]);

  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>{titles[currentIndex]}</HeroTitle>
        <HeroSubtitle>{subtitles[currentIndex]}</HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;