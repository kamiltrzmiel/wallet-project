import {
  ModalContainer,
  ModalWindow,
  YesBtn,
  NoBtn,
} from './ModalLogout.styled';
import { useDispatch } from 'react-redux';
import { setIsModalLogoutOpen } from 'redux/slices/globalSlice';
import { logout } from 'redux/slices/sessionSlice';

const ModalLogout = () => {
  const bodyEl = document.querySelector('body');
  bodyEl.style.overflow = 'hidden';

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setIsModalLogoutOpen(false));
    bodyEl.style.overflow = 'auto';
  };

  const handleLogout = () => {
    dispatch(logout());
    bodyEl.style.overflow = 'auto';
  };

  const handleEscapeKey = event => {
    if (event.key === 'Escape') {
      closeModal();
      window.removeEventListener('keydown', handleEscapeKey);
    }
  };

  window.addEventListener('keydown', handleEscapeKey);

  const closeModalByClickOutside = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <ModalContainer onClick={closeModalByClickOutside}>
      <ModalWindow>
        <p>Are you sure you want to log out?</p>
        <YesBtn type="button" onClick={handleLogout}>
          Yes
        </YesBtn>
        <NoBtn type="button" onClick={closeModal}>
          No
        </NoBtn>
      </ModalWindow>
    </ModalContainer>
  );
};

export default ModalLogout;
