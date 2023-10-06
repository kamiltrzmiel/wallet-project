import styled from 'styled-components';
import { BaseInput } from './BaseInput.styled';
import { Icon } from '../Icon/Icon';
import { useField } from 'formik';
import { ErrorMessage, StyledDiv } from './InputIcon.styled';

const InputIconBase = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <StyledDiv>
      <BaseInput {...field} {...props} />
      <Icon icon={icon} />

      {meta.touched && meta.error ? (
        <ErrorMessage className="error">{meta.error}</ErrorMessage>
      ) : null}
    </StyledDiv>
  );
};

export const InputIcon = styled(InputIconBase);
