import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import garrafa1 from "./assets/garrafa.png"
import garrafa2 from "./assets/garrafa2.png"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Poppins", sans-serif;
    background: #0d0c1d;
    color: #fff;
    
  }
`;

const Sidebar = styled.nav`
  background: linear-gradient(to left, rgba(158, 111, 255, 0.2), transparent);
  position: fixed;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
  z-index: 999;
  height: 100%;
  width: 10%;
  justify-content: center;
  padding: 10px;	
`;

const SidebarLine = styled.div``;

const SidebarLink = styled.a`
  color: #bbb;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-right: 2px solid #9e6fff;
  transition: 0.3s;
  &:hover {
    color: #9e6fff;
    border-right: 4px solid #9e6fff;
  }
`;

const Page = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled.h1`
  font-size: 2rem;
  color: #9e6fff;
  font-weight: 700;
  margin: 2rem;
`;

const Hero = styled.section`
  padding: 8rem 2rem;
  text-align: center;
  background: linear-gradient(180deg, #0d0c1d, #1b1935);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroTitle = styled.h2`
  font-size: 3.5rem;
  color: #f0d3ff;
  max-width: 800px;
`;

const HeroText = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #b5a8c5;
  max-width: 600px;
`;

const CTAButton = styled.a`
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: #9e6fff;
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s;
  box-shadow: 0 0 20px #9e6fff50;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 25px #9e6fff99;
  }
`;

const Section = styled.section`
  padding: 5rem 2rem;
  text-align: center;
  background: #1b1935;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #9e6fff;
`;

const Features = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
`;

const FeatureCard = styled.div`
  background: #231f45;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 0 12px #9e6fff20;
  transition: 0.3s;
  width: 70%;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px #9e6fff40;
  }
`;

const Features2 = styled.div`
	margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  justify-items: center;
`;

const FeatureCard2 = styled.div`
  background: #231f45;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 0 12px #9e6fff20;
  transition: 0.3s;
  width: 70%;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px #9e6fff40;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  background: #15132b;
  font-size: 0.9rem;
  color: #888;
`;

const CarouselContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const CarouselImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 0 20px #9e6fff40;
  background-color: #1b1935;
`;

export default function GlowBottlePage() {
  return (
    <>
      <GlobalStyle />
      <Sidebar>
        <SidebarLine />
        <SidebarLink href="#features">Recursos</SidebarLink>
        <SidebarLink href="#app">App</SidebarLink>
        <SidebarLink href="#galeria">Galeria</SidebarLink>	
        <SidebarLink href="#depoimentos">Depoimentos</SidebarLink>
        <SidebarLink href="#contato">Contato</SidebarLink>
      </Sidebar>
      <Page>
        <Logo>GlowBottle</Logo>

        <Hero>
          <HeroTitle>Hidratação com tecnologia e estilo</HeroTitle>
          <HeroText>
            GlowBottle é a garrafa inteligente que cuida da sua saúde com
            alertas luminosos, design premium e integração com app. Mantenha-se
            hidratado, com personalidade.
          </HeroText>
          <CTAButton href="#contato">Quero a minha agora</CTAButton>
        </Hero>

        <Section id="features">
          <SectionTitle>Por que GlowBottle é única?</SectionTitle>
          <p style={{ maxWidth: "600px", margin: "0 auto", color: "#c2b3e0" }}>
            Unimos inovação, estética e bem-estar em um só produto. Cada detalhe
            foi pensado para tornar sua experiência com a água mais prática e
            prazerosa.
          </p>
          <Features2>
            <FeatureCard2>
              <h4>Iluminação LED inteligente</h4>
              <p>
                Lembretes visuais para te lembrar de beber água ao longo do dia.
              </p>
            </FeatureCard2>
            <FeatureCard2>
              <h4>Integração com app</h4>
              <p>
                Acompanhe seu consumo diário de água e defina metas
                personalizadas.
              </p>
            </FeatureCard2>
            <FeatureCard2>
              <h4>Bateria de longa duração</h4>
              <p>
                Até 10 dias com uma única carga. Carregamento via USB-C incluso.
              </p>
            </FeatureCard2>
            <FeatureCard2>
              <h4>Design sustentável</h4>
              <p>Feita com materiais recicláveis e 100% livre de BPA.</p>
            </FeatureCard2>
          </Features2>
        </Section>

        <Section id="app">
          <SectionTitle>Um app que brilha com você</SectionTitle>
          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#c2b3e0",
              marginBottom: "3rem",
            }}
          >
            Com o app GlowBottle você controla sua hidratação em tempo real.
            Crie metas, receba lembretes e veja seu progresso diário com
            animações motivadoras.
          </p>
          <Features>
            <FeatureCard>
              <h4>Controle total</h4>
              <p>
                Gerencie intensidade da luz, frequência dos alertas e até as
                cores do LED via Bluetooth.
              </p>
            </FeatureCard>
            <FeatureCard>
              <h4>Histórico de consumo</h4>
              <p>
                Acompanhe gráficos semanais e descubra como sua hidratação
                impacta sua saúde e bem-estar.
              </p>
            </FeatureCard>
          </Features>
        </Section>

		<Section id="galeria">
          <SectionTitle>Conheça a GlowBottle em detalhes</SectionTitle>
          <CarouselContainer>
            <CarouselImage src={garrafa1} alt="GlowBottle" />
            <CarouselImage src={garrafa2} alt="GlowBottle" />
          </CarouselContainer>
        </Section>	

        <Section id="depoimentos">
          <SectionTitle>Quem já usa, recomenda:</SectionTitle>
          <Features>
            <FeatureCard>
              <p>
                “Nunca achei que uma garrafa pudesse me ajudar tanto! Estou
                bebendo 2x mais água.”
              </p>
              <strong>— Carla, 27 anos</strong>
            </FeatureCard>
            <FeatureCard>
              <p>
                “Além de linda, é funcional. A luz é sutil mas eficiente, e o
                app é muito fácil de usar.”
              </p>
              <strong>— Bruno, 33 anos</strong>
            </FeatureCard>
          </Features>
        </Section>

        <Section id="contato">
          <SectionTitle>Entre em contato</SectionTitle>
          <p>Email: suporte@glowbottle.io</p>
          <p>Instagram: @glowbottle</p>
        </Section>

        <Footer>© 2025 GlowBottle Inc. Todos os direitos reservados.</Footer>
      </Page>
    </>
  );
}
