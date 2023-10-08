import {
  ModalContainer,
  ModalWindow,
  YesBtn,
  NoBtn,
} from './ModalLogout.styled';

export const ModalLogout = () => {
  const bodyEl = document.querySelector('body');
  bodyEl.style.overflow = 'hidden';

  return (
    <ModalContainer>
      <ModalWindow>
        <p>Are you sure you want to log out?</p>
        <YesBtn type="button">Yes</YesBtn>
        <NoBtn type="button">No</NoBtn>
      </ModalWindow>
    </ModalContainer>
  );
};
