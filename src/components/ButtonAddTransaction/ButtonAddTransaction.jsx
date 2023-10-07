import { useDispatch } from 'react-redux';
import { setIsModalAddTransactionOpen } from 'redux/slices/globalSlice';
import { StyledButton } from './ButtonAddTransaction.styled';

const ButtonAddTransaction = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(setIsModalAddTransactionOpen(true));
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }
  };

  return <StyledButton onClick={handleOpenModal}>Add_Btn</StyledButton>;
};

export default ButtonAddTransaction;
