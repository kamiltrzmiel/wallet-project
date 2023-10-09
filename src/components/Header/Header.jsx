import { Icon } from 'components/Icon/Icon';
import { LogoButton } from 'components/LogoButton/LogoButton';
import { useSelector, useDispatch } from 'react-redux';
import { setIsModalLogoutOpen } from 'redux/slices/globalSlice';
import { ContainerHeader, HeaderDiv, LogoutDiv } from './Header.styled';
import ModalLogout from 'components/ModalLogout/ModalLogout';

const Header = () => {
  const user = useSelector(state => state.session.user);
  const isModalLogoutOpen = useSelector(
    state => state.global.isModalLogoutOpen
  );
  const dispatch = useDispatch();

  const trimmedUserName = () => {
    if (!user.name) {
      return 'unknown';
    }
    return user.name.length > 10 ? user.name.slice(0, 10) + '...' : user.name;
  };

  const openModal = () => {
    dispatch(setIsModalLogoutOpen(true));
  };

  return (
    <>
      {isModalLogoutOpen && <ModalLogout />}
      <HeaderDiv>
        <ContainerHeader>
          <LogoButton />
          <LogoutDiv>
            <span className="nameText">
              <button className="button" type="button">
                {trimmedUserName()}
              </button>
            </span>
            <div className="divider button"></div>
            <button
              type="button"
              className="exitButton button"
              onClick={openModal}
            >
              <Icon icon="icon__exit"></Icon>
              <span className="exitText">Exit</span>
            </button>
          </LogoutDiv>
        </ContainerHeader>
      </HeaderDiv>
    </>
  );
};

export default Header;
