import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Team from './components/Team';
import Footer from './components/Footer';

const AppContainer = styled.div`
    background: linear-gradient(to right, #001f3f, #003366);
    color: white;
    min-height: 100vh;
`;

function App() {
    return (
        <AppContainer>
            <Header />
            <Hero />
            <About />
            <Features />
            <Team />
            <Footer />
        </AppContainer>
    );
}

export default App;
