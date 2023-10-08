import {
  ModalContainer,
  ModalWindow,
  YesBtn,
  NoBtn,
} from './ModalLogout.styled';
import { resetCurrency } from 'redux/currency/currencySlice';
import { resetTransactions } from 'redux/slices/financeSlice';
import { resetGlobal } from 'redux/slices/globalSlice';
import { resetSession } from 'redux/slices/sessionSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export const ModalLogout = () => {
  const bodyEl = document.querySelector('body');
  bodyEl.style.overflow = 'hidden';

  const dispatch = useDispatch();
  const resetState = () => {
    dispatch(resetCurrency());
    dispatch(resetTransactions());
    dispatch(resetGlobal());
    dispatch(resetSession());
  };

  return (
    <ModalContainer>
      <ModalWindow>
        <p>Are you sure you want to log out?</p>
        <Link to="/login">
          <YesBtn type="button" onClick={resetState}>
            Yes
          </YesBtn>
        </Link>
        <NoBtn type="button">No</NoBtn>
      </ModalWindow>
    </ModalContainer>
  );
};
