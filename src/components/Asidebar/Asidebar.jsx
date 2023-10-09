import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import Navigation from 'components/Navigation/Navigation';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FlexWrapper, AsideContainer } from './Asidebar.styled';

const CURRENCY_PATH = '/currency';
const HOME_PATH = '/home';

const AsideMenu = () => {
  const location = useLocation();

  const isHome = location.pathname === HOME_PATH || location.pathname === '/';
  const isCurrency = location.pathname === CURRENCY_PATH;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth > 767);

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
    <AsideContainer>
      <FlexWrapper>
        <Navigation />
        {windowWidth || isHome ? <Balance /> : null}
      </FlexWrapper>
      {window.innerWidth <= 767 || isCurrency ? null : <Currency />}
    </AsideContainer>
  );
};

export default AsideMenu;
