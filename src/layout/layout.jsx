import { useState, useEffect, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Background,
  BluredBackground,
} from 'components/Background/Background.styled';
import Header from 'components/Header/Header';
import { Section, MainContainer } from './layout.styled';
import AsideMenu from 'components/Asidebar/Asidebar';
import ButtonAddTransaction from 'components/ButtonAddTransaction/ButtonAddTransaction';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container/Container.styled';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth > 767);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth > 767);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <Background>
      <BluredBackground>
        <Header />
        <Container>
          <Section>
            <AsideMenu />
            <MainContainer>
              {windowWidth && location.pathname === '/home' && (
                <ButtonAddTransaction />
              )}
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </MainContainer>
          </Section>
        </Container>
      </BluredBackground>
    </Background>
  );
};

export default Layout;
