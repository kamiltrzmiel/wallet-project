import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Formik } from 'formik';
import { object, string, date, bool, mixed, number } from 'yup';

import CategorySelect from 'components/CategorySelect/CategorySelect';
import { BaseInput } from 'components/Inputs/BaseInput.styled';
import DatetimePicker from 'components/DatetimePicker/DatetimePicker';
import Textarea from 'components/Inputs/Textarea';
import { PrimaryButton } from 'components/Buttons/Buttons';
import { Icon } from 'components/Icon/Icon';
import { customStyles } from 'components/CategorySelect/CategorySelect.styled';

import {
  editTransaction,
  fetchTransactions,
  fetchTotals,
} from 'redux/slices/financeSlice';
import { setIsModalEditTransactionOpen } from 'redux/slices/globalSlice';
import { formatDate } from 'utilities/formatUtils';
import { dateTransformer } from 'utilities/formatUtils';

import {
  Backdrop,
  CalendarWrapper,
  CancelButton,
  CloseButton,
  ErrorText,
  ExpenseSpan,
  FormikForm,
  Heading,
  IncomeSpan,
  InputWrapper,
  Modal,
  TransactionTypeDiv,
  TwoColumnRow,
  placeholderStyles,
} from './EditTransactionModal.styled';

const options = [
  { value: 'main expenses', label: 'Main expenses' },
  { value: 'products', label: 'Products' },
  { value: 'car', label: 'Car' },
  { value: 'self care', label: 'Self care' },
  { value: 'child care', label: 'Child care' },
  { value: 'household products', label: 'Household products' },
  { value: 'education', label: 'Education' },
  { value: 'leisure', label: 'Leisure' },
  { value: 'other expenses', label: 'Other expenses' },
  { value: 'entertainment', label: 'Entertainment' },
];

const EditTransactionModal = () => {
  const dispatch = useDispatch();

  const selectedTransactionToEdit = useSelector(
    state => state.finance.currentTransactionToEdit
  );

  const handleCloseEditModal = () => {
    dispatch(setIsModalEditTransactionOpen(false));
    document.body.style.overflow = 'unset';
  };

  const handleBackdropClick = ev => {
    if (ev.currentTarget === ev.target) {
      handleCloseEditModal();
    }
  };

  const escKeyDown = ev => {
    if (ev.code === 'Escape') {
      handleCloseEditModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', escKeyDown);
    return () => {
      document.removeEventListener('keydown', escKeyDown);
    };
  });

  const handleSubmit = values => {
    dispatch(
      editTransaction({
        id: selectedTransactionToEdit._id,
        updatedData: {
          amount: values.value,
          category: values.category.label,
          date: values.date,
          isIncome: selectedTransactionToEdit.isIncome,
          comment: values.comment,
        },
      })
    )
      .then(() => dispatch(fetchTransactions()))
      .then(() => dispatch(fetchTotals()));
    // dispatch(fetchTotals());
    dispatch(setIsModalEditTransactionOpen(false));
    document.body.style.overflow = 'unset';
  };

  return (
    <Backdrop onClose={handleCloseEditModal} onClick={handleBackdropClick}>
      <Modal>
        <CloseButton onClick={handleCloseEditModal}>
          <Icon icon="icon__close" />
        </CloseButton>
        <Formik
          initialValues={{
            type: selectedTransactionToEdit.isIncome,
            category: selectedTransactionToEdit.category,
            value: selectedTransactionToEdit.amount,
            date: `${formatDate(selectedTransactionToEdit.date)}`,
            comment: selectedTransactionToEdit.comment,
          }}
          validationSchema={object({
            type: bool(),
            category: mixed().when('type', {
              is: type => !type,
              then: () =>
                mixed().required('Please choose transaction category.'),
              otherwise: () => mixed().notRequired(),
            }),
            value: number()
              .typeError('Transaction value must be a number')
              .test(
                'len',
                'Transaction value can be a maximum of 16 characters',
                val => val.toString().length <= 16
              )
              .required('Please provide transaction value.'),
            date: date()
              .transform(dateTransformer)
              .typeError('Please enter a valid date')
              .required('Please provide transaction date.'),
            comment: string().notRequired(),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleSubmit(values);
            resetForm();
            setSubmitting(false);
          }}
          enableReinitialize
        >
          {({ values, setFieldValue, handleBlur }) => (
            <FormikForm>
              <Heading>Edit transaction</Heading>
              <TransactionTypeDiv>
                <IncomeSpan $active={selectedTransactionToEdit.isIncome}>
                  Income
                </IncomeSpan>
                <Icon icon="icon__slash"></Icon>
                <ExpenseSpan $active={!selectedTransactionToEdit.isIncome}>
                  Expense
                </ExpenseSpan>
              </TransactionTypeDiv>
              {!selectedTransactionToEdit.isIncome && (
                <InputWrapper>
                  <CategorySelect
                    value={values.category}
                    placeholder={selectedTransactionToEdit.category}
                    name="category"
                    onChange={category => setFieldValue('category', category)}
                    options={options}
                    styles={{ ...customStyles, ...placeholderStyles }}
                  />
                  <ErrorText
                    name="category"
                    component="div"
                    className="category"
                  />
                </InputWrapper>
              )}
              <TwoColumnRow>
                <InputWrapper>
                  <BaseInput
                    placeholder="0.00"
                    title="Please put the transaction value"
                    name="value"
                    type="number"
                    autoComplete="off"
                    value={values.value}
                    onChange={value =>
                      setFieldValue('value', value.target.value)
                    }
                    onBlur={handleBlur}
                    onKeyUp={handleBlur}
                  />
                </InputWrapper>
                <CalendarWrapper>
                  <DatetimePicker
                    dateFormat="DD-MM-YYYY"
                    name="date"
                    type="date"
                    timeFormat={false}
                  />
                  <ErrorText name="date" component="div" />
                  <Icon icon="icon__baseline-date_range" />
                </CalendarWrapper>
              </TwoColumnRow>
              <InputWrapper>
                <Textarea
                  placeholder="Comment"
                  title="Please describe your transaction."
                  name="comment"
                  type="text"
                  autoComplete="off"
                />
                <ErrorText name="comment" component="div" />
              </InputWrapper>
              <PrimaryButton type="submit">SAVE</PrimaryButton>
              <CancelButton onClick={handleCloseEditModal} type="button">
                CANCEL
              </CancelButton>
            </FormikForm>
          )}
        </Formik>
      </Modal>
    </Backdrop>
  );
};

export default EditTransactionModal;
