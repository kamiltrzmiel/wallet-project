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
      <Header />
      <Container>
        <Section>
          <AsideBar />
          <MainContainer>
            {windowWidth && location.pathname === '/home' && (
              <ButtonAddTransaction />
            )}
            <Suspense>
              <Outlet />
            </Suspense>
          </MainContainer>
        </Section>
      </Container>
    </Background>
  );
};

export default Layout;
