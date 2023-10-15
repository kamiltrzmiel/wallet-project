import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { object, string, date, bool, mixed, number } from 'yup';

import Switch from 'components/Switch/Switch';
import CategorySelect from 'components/CategorySelect/CategorySelect';
import { BaseInput } from 'components/Inputs/BaseInput.styled';
import DatetimePicker from 'components/DatetimePicker/DatetimePicker';
import Textarea from 'components/Inputs/Textarea';
import { PrimaryButton } from 'components/Buttons/Buttons';
import { Icon } from 'components/Icon/Icon';

import {
  addTransaction,
  fetchTransactions,
  fetchTotals,
} from 'redux/slices/financeSlice';
import { setIsModalAddTransactionOpen } from 'redux/slices/globalSlice';
import { formatDate } from 'utilities/formatUtils';
import { dateTransformer } from 'utilities/formatUtils';

import {
  Backdrop,
  CalendarWrapper,
  CancelButton,
  CloseButton,
  ErrorText,
  FormikForm,
  Heading,
  InputWrapper,
  Modal,
  TwoColumnRow,
} from './AddTransactionModal.styled';

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

const AddTransactionModal = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    setIsChecked(isChecked => !isChecked);
  };

  const handleCloseModal = () => {
    dispatch(setIsModalAddTransactionOpen(false));
    document.body.style.overflow = 'unset';
  };

  const handleBackdropClick = ev => {
    if (ev.currentTarget === ev.target) {
      handleCloseModal();
    }
  };

  const escKeyDown = ev => {
    if (ev.code === 'Escape') {
      handleCloseModal();
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
      addTransaction({
        amount: values.value,
        category: isChecked ? 'income' : values.category.label,
        date: values.date,
        isIncome: isChecked,
        comment: values.comment,
      })
    )
      .then(() => dispatch(fetchTransactions()))
      .then(() => dispatch(fetchTotals()));

    dispatch(setIsModalAddTransactionOpen(false));
    document.body.style.overflow = 'unset';
  };

  return (
    <Backdrop onClose={handleCloseModal} onClick={handleBackdropClick}>
      <Modal>
        <CloseButton onClick={handleCloseModal}>
          <Icon icon="icon__close" />
        </CloseButton>
        <Formik
          initialValues={{
            type: isChecked,
            category: null,
            value: '',
            date: `${formatDate(new Date())}`,
            comment: '',
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
              <Heading>Add transaction</Heading>
              <Switch
                name="type"
                checked={isChecked}
                onClick={handleCheckboxChange}
                type="checkbox"
              />
              {!isChecked && (
                <InputWrapper>
                  <CategorySelect
                    name="category"
                    placeholder="Select a category"
                    value={values.category}
                    onChange={category => setFieldValue('category', category)}
                    options={options}
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
                  <ErrorText name="value" component="div" className="error" />
                </InputWrapper>
                <CalendarWrapper>
                  <DatetimePicker
                    dateFormat="DD-MM-YYYY"
                    name="date"
                    type="date"
                    timeFormat={false}
                  />
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
              <PrimaryButton type="submit">ADD</PrimaryButton>
              <CancelButton type="button" onClick={handleCloseModal}>
                CANCEL
              </CancelButton>
            </FormikForm>
          )}
        </Formik>
      </Modal>
    </Backdrop>
  );
};

export default AddTransactionModal;
